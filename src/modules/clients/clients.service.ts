import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ClientsService {
  constructor(private prisma: PrismaService) {}
  async create(CreateClientDto: CreateClientDto) {
    const foundClient = await this.prisma.client.findFirst({
      where: { email: CreateClientDto.email },
    });
    if (foundClient) {
      throw new ConflictException('Email already exists');
    }

    const client = new Client();
    Object.assign(client, CreateClientDto);
    await this.prisma.client.create({ data: { ...client } });
    return plainToInstance(Client, client);
  }

  async findAll() {
    const clients = await this.prisma.client.findMany();
    return plainToInstance(Client, clients);
  }

  async findOne(id: string): Promise<Client> {
    const client = await this.prisma.client.findUnique({ where: { id } });
    if (!client) {
      throw new NotFoundException('Client not found');
    }
    return plainToInstance(Client, client);
  }

  async update(id: string, updateClientDto: UpdateClientDto): Promise<Client> {
    const client = await this.prisma.client.findUnique({ where: { id } });
    if (!client) {
      throw new NotFoundException('Client not found');
    }
    const updatedClient = await this.prisma.client.update({
      where: { id },
      data: { ...updateClientDto },
    });
    return plainToInstance(Client, updatedClient);
  }

  async remove(id: string) {
    const client = await this.prisma.client.findUnique({ where: { id } });
    if (!client) {
      throw new NotFoundException('Client not found');
    }
    await this.prisma.client.delete({ where: { id } });
  }
}
