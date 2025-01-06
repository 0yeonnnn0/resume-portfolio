import { useResumeStore } from "../../store/resumeStore";
import ContactList from "../atoms/ContactList";
import Section from "../atoms/Section";
import ContactItem from "../molecules/ContactItem";

export default function Contact() {
  const contact = useResumeStore((state) => state.contact);

  return (
    <Section id="contact" title="Contact">
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
