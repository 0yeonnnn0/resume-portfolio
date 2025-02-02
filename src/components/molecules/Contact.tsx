import { useResumeStore } from "../../store/resumeStore";
import ContactItem from "../atoms/contact/ContactItem";
import ContactList from "../atoms/contact/ContactList";
import Section from "../atoms/Section";
import ContactModalContent from "./modals/ContactModalContent";

export default function Contact() {
  const contact = useResumeStore((state) => state.contact);

  return (
    <Section
      id="contact"
      title="Contact"
      content={<ContactModalContent contact={contact} />}
    >
      <ContactList>
        <ContactItem label="Phone" value={contact.phone} />
        <ContactItem label="Email" value={contact.email} />
        <ContactItem
          label="Github"
          value={`github.com/${contact.githubId}`}
          href={`https://github.com/${contact.githubId}`}
        />
      </ContactList>
    </Section>
  );
}
