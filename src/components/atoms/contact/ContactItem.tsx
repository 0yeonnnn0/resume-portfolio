import ContactLabel from "../contact/ContactLabel";
import ContactValue from "../contact/ContactValue";
import ContactLink from "../contact/ContactLink";

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
