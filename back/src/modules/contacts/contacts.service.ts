import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Contact } from './entities/contact.entity';

@Injectable()
export class ContactsService {
  constructor(private prisma: PrismaService) { }
  async create(createContactDto: CreateContactDto, clientId: string) {
    const contact = Object.assign(new Contact(), createContactDto);
    const newContact = await this.prisma.contact.create({
      data: {
        id: contact.id,
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        created_at: contact.created_at,
        clientId,
      },
    });
    return newContact;
  }

  async findAll(id: string) {
    return await this.prisma.contact.findMany({ where: { clientId: id } });
  }

  async findOne(id: string) {
    const contact = await this.prisma.contact.findFirst({ where: { id } });
    if (!contact) {
      throw new NotFoundException('Contact not found');
    }
    return contact;
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    return `This action updates a #${id} contact`;
  }

  async remove(id: string) {
    const contact = await this.prisma.contact.findFirst({ where: { id } });
    if (!contact) {
      throw new NotFoundException('Contact not found');
    }

    return this.prisma.contact.delete({ where: { id } });
  }
}
