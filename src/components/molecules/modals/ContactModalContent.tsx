import { useState } from "react";
import { ContactType } from "@/types/profile.type";
import { Mail, Github, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface ContactModalProps {
  contact: ContactType;
}

export default function ContactModalContent({ contact }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactItems = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: `github.com/${contact.githubId}`,
      href: `https://github.com/${contact.githubId}`,
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/marco-kim",
      href: "https://www.linkedin.com/in/dongyeon-kim-49b6852a6/",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
  ];

  return (
    <div className="p-6 min-h-[600px] flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
        {/* 왼쪽: Find me on 섹션 */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Find me on</h2>
            <div className="space-y-6">
              {contactItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 hover:text-blue-600 transition-colors"
                >
                  <div className="text-gray-600">{item.icon}</div>
                  <div className="font-medium">{item.value}</div>
                </a>
              ))}
            </div>
          </div>
          <p className="text-gray-600">
            Feel free to reach out for collaborations or just a friendly chat!
          </p>
        </div>

        {/* 오른쪽: 메시지 폼 */}
        <div className="flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Your name"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Your email"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Your message"
                className="min-h-[200px]"
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
