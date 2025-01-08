import { EducationType } from "@/store/resumeStore";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, GraduationCap, MapPin } from "lucide-react";

interface EducationModalProps {
  education: EducationType[];
}

export default function EducationModalContent({ education }: EducationModalProps) {
  return (
    <div className="p-6 space-y-8">
      {/* 헤더 섹션 */}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Education</h2>
        <p className="text-gray-600">학력 사항 및 주요 활동</p>
      </div>

      {/* 교육 타임라인 */}
      <div className="relative pl-8 border-l-2 border-gray-200 space-y-12">
        {education.map((edu, index) => (
          <div key={index} className="relative">
            {/* 타임라인 도트 */}
            <div className="absolute -left-[41px] p-2 bg-white border-2 border-gray-200 rounded-full">
              <GraduationCap className="w-5 h-5 text-gray-600" />
            </div>

            {/* 학교 정보 카드 */}
            <div className="bg-card rounded-lg border p-6 space-y-6">
              {/* 학교명 및 상태 */}
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">{edu.institution}</h3>
                <div className="flex items-center gap-2 text-gray-600">
                  <Badge variant={edu.status === "졸업" ? "default" : "secondary"}>
                    {edu.status}
                  </Badge>
                  {edu.gpa && (
                    <Badge variant="outline">
                      GPA: {edu.gpa}
                    </Badge>
                  )}
                </div>
              </div>

              {/* 학위 및 위치 정보 */}
              <div className="grid gap-2 text-gray-600">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>{edu.degree} in {edu.major}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{edu.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarDays className="w-4 h-4" />
                  <span>{edu.period ? `${edu.period.start} - ${edu.period.end}` : edu.duration}</span>
                </div>
              </div>

              {/* 주요 수강 과목 */}
              {edu.courses && edu.courses.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold">주요 수강 과목</h4>
                  <div className="grid gap-3">
                    {edu.courses.map((course, idx) => (
                      <div key={idx} className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex justify-between items-start">
                          <span className="font-medium">{course.name}</span>
                          {course.grade && (
                            <Badge variant="outline">{course.grade}</Badge>
                          )}
                        </div>
                        {course.description && (
                          <p className="mt-1 text-sm text-gray-600">{course.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 성과 및 활동 */}
              {edu.achievements && edu.achievements.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold">성과 및 활동</h4>
                  <div className="grid gap-3">
                    {edu.achievements.map((achievement, idx) => (
                      <div key={idx} className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex justify-between items-start">
                          <span className="font-medium">{achievement.title}</span>
                          <span className="text-sm text-gray-600">{achievement.date}</span>
                        </div>
                        {achievement.description && (
                          <p className="mt-1 text-sm text-gray-600">{achievement.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
