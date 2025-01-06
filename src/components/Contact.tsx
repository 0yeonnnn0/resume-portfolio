import { useResumeStore } from "../store/resumeStore";
import Section from "./atoms/Section";

export default function Contact() {
  const contact = useResumeStore((state) => state.contact);

  return (
    <Section id="contact" title="Contact">
      <div className="flex flex-col gap-1">
        <p className="font-medium">
          <strong>Phone</strong> <br />
          <span className="font-normal">{contact.phone}</span>
        </p>
        <p className="font-medium">
          <strong>Email</strong> <br />
          <span className="font-normal">{contact.email}</span>
        </p>
        <p className="font-medium">
          <strong>Github</strong> <br />
          <a
            href={`https://github.com/${contact.githubId}`}
            className="underline font-normal"
            target="_blank"
          >
            github.com/{contact.githubId}
          </a>
        </p>
      </div>
    </Section>
  );
}
