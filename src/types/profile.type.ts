export interface HeaderType {
  name: string;
  role: string;
  summary: string;
  status: "seeking" | "hired" | "available";
  introduction: string;
  hobbies: string[];
  languages: { name: string; level: string }[];
  phone?: string; // 전화번호 (선택)
}

export interface ContactType {
  phone: string;
  email: string;
  githubId: string;
}
