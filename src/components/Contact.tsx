import { useResumeStore } from "../store/resumeStore";

export default function Contact() {
  const contact = useResumeStore((state) => state.contact);

  return (
    <section id="contact">
      <h2 className="text-2xl font-semibold mb-2 border-b-2 border-black pb-2">
        Contact
      </h2>
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
    </section>
  );
}
