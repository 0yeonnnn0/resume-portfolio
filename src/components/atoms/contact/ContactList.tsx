interface ContactListProps {
  children: React.ReactNode;
}

export default function ContactList({ children }: ContactListProps) {
  return <div className="flex flex-col gap-1 ml-2">{children}</div>;
}
