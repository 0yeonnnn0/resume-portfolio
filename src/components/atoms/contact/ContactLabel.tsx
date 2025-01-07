interface ContactLabelProps {
  label: string;
}

export default function ContactLabel({ label }: ContactLabelProps) {
  return <strong className="block">{label}</strong>;
}
