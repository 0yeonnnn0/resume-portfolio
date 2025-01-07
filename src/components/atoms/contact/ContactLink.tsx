interface ContactLinkProps {
  href: string;
  value: string;
}

export default function ContactLink({ href, value }: ContactLinkProps) {
  return (
    <a
      href={href}
      className="underline font-normal"
      target="_blank"
      rel="noopener noreferrer"
    >
      {value}
    </a>
  );
}
