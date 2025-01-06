import ContactLabel from "../atoms/ContactLabel";
import ContactValue from "../atoms/ContactValue";
import ContactLink from "../atoms/ContactLink";

interface ContactItemProps {
  label: string;
  value: string;
  href?: string;
}

export default function ContactItem({ label, value, href }: ContactItemProps) {
  return (
    <p className="font-medium">
      <ContactLabel label={label} />
      <br />
      {href ? (
        <ContactLink href={href} value={value} />
      ) : (
        <ContactValue value={value} />
      )}
    </p>
  );
}
