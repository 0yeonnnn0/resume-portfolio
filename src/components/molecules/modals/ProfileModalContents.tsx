interface ProfileModalContentProps {
  profile: {
    name: string;
    role: string;
    status: "hired" | "seeking" | "available";
    introduction: string;
    hobbies: string[];
    languages: Language[];
  };
}

interface Language {
  name: string;
  level: string;
}

export default function ProfileModalContent({
  profile,
}: ProfileModalContentProps) {
  const statusColors = {
    hired: "bg-blue-100 text-blue-800",
    seeking: "bg-green-100 text-green-800",
    available: "bg-yellow-100 text-yellow-800",
  };

  const statusText = {
    hired: "재직중",
    seeking: "구직중",
    available: "이직가능",
  };

  return (
    <div className="space-y-8 p-6">
      {/* 헤더 섹션 */}
      <div className="space-y-3">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-bold">{profile.name}</h2>
          <span
            className={`px-3 py-1 rounded-full text-sm ${
              statusColors[profile.status]
            }`}
          >
            {statusText[profile.status]}
          </span>
        </div>
        <p className="text-xl text-gray-600">{profile.role}</p>
      </div>

      {/* 자기소개 섹션 */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">About Me</h3>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {profile.introduction}
        </p>
      </div>

      {/* 취미 섹션 */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Hobbies & Interests</h3>
        <div className="flex flex-wrap gap-2">
          {profile.hobbies.map((hobby, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {hobby}
            </span>
          ))}
        </div>
      </div>

      {/* 언어 능력 섹션 */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Languages</h3>
        <div className="grid grid-cols-2 gap-4">
          {profile.languages.map((lang, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
            >
              <span className="font-medium">{lang.name}</span>
              <span className="text-gray-600">{lang.level}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
