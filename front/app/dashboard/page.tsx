
import HeaderPages from "../components/headerPages";
import ListContacts from "../components/listContacts";


export default function Home() {
  return (
    <>
      <HeaderPages />
      <main>
        <section className="body min-h-screen p-4">
          <ListContacts />
        </section>
      </main>
    </>
  );
}
