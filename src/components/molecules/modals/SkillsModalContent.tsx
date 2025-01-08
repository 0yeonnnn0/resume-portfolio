import { SkillType } from "@/store/resumeStore";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface SkillsModalProps {
  skills: SkillType[];
}

export default function SkillsModalContent({ skills }: SkillsModalProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSkills = skills.filter((skillCategory) =>
    skillCategory.items.some((skill) =>
      skill.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="space-y-8 p-6">
      {/* 헤더 섹션 */}
      <div className="space-y-3">
        <h2 className="text-3xl font-bold">Skills</h2>
        <p className="text-gray-600">
          현재까지 사용해본 기술 스택들입니다.
        </p>
      </div>

      {/* 검색바 */}
      <div>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="text"
            placeholder="기술 스택 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>
      </div>

      {/* 스킬 카테고리 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((category, index) => (
          <div
            key={index}
            className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm"
          >
            <h3 className="text-lg font-semibold mb-4">{category.category}</h3>
            <div className="flex flex-wrap gap-2">
              {category.items.filter(skill => 
                skill.toLowerCase().includes(searchQuery.toLowerCase())
              ).map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 범례 섹션 */}
      <div className="border-t pt-6">
        <h3 className="text-sm font-medium text-gray-500 mb-3">숙련도</h3>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span className="text-sm text-gray-600">Advanced</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
            <span className="text-sm text-gray-600">Intermediate</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
            <span className="text-sm text-gray-600">Basic</span>
          </div>
        </div>
      </div>
    </div>
  );
} 