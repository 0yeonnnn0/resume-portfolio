interface ContactValueProps {
  value: string;
}

export default function ContactValue({ value }: ContactValueProps) {
  return <span className="font-normal">{value}</span>;
}
