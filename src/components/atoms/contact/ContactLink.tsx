import { HoverHighlight } from "@/components/atoms/shared/HoverHighlight";

interface ContactLinkProps {
  href: string;
  value: string;
}

export default function ContactLink({ href, value }: ContactLinkProps) {
  return (
    <a
      href={href}
      className="underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      <HoverHighlight>{value}</HoverHighlight>
    </a>
  );
}
