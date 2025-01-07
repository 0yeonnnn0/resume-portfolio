import ContactLabel from "../contact/ContactLabel";
import ContactLink from "../contact/ContactLink";
import { HoverHighlight } from "../HoverHighlight";

interface ContactItemProps {
  label: string;
  value: string;
  href?: string;
}

export default function ContactItem({ label, value, href }: ContactItemProps) {
  return (
    <p>
      <ContactLabel label={label} />
      {href ? (
        <ContactLink href={href} value={value} />
      ) : (
        <HoverHighlight className="font-normal">{value}</HoverHighlight>
      )}
    </p>
  );
}
