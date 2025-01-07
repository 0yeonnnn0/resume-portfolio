export interface HeaderType {
  name: string;
  title: string;
  summary: string;
  phone?: string; // 전화번호 (선택)
  location?: string; // 위치/지역
  website?: string; // 개인 웹사이트
  github?: string; // GitHub 프로필
  linkedin?: string; // LinkedIn 프로필
  blog?: string; // 블로그 주소
  imageUrl?: string; // 프로필 이미지 URL (선택)
}

export interface ContactType {
  phone: string;
  email: string;
  githubId: string;
}
