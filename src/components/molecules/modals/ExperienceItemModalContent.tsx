import { ExperienceType } from "@/store/resumeStore";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Calendar, MapPin, Building2 } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface ExperienceItemModalProps {
  experience: ExperienceType;
}

export default function ExperienceItemModalContent({
  experience,
}: ExperienceItemModalProps) {
  return (
    <div className="p-6 space-y-8">
      {/* 헤더: 프로젝트명과 기간, 위치 */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">{experience.title}</h2>
        <div className="flex flex-wrap gap-4 text-gray-600">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{`${experience.period.start} - ${experience.period.end}`}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{experience.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4" />
            <HoverCard>
              <HoverCardTrigger className="text-gray-600 hover:text-gray-900 transition-colors">
                <span>{experience.company}</span>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <h4 className="font-semibold">{experience.company}</h4>
                  <p className="text-sm text-gray-600">
                    {experience.organizationInfo}
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </div>

      {/* 사용 기술 스택 */}
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill, index) => (
            <Badge key={index} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      {/* 프로젝트 이미지 캐러셀 */}
      {experience.images && experience.images.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Project Gallery</h3>
          <Carousel className="w-full max-w-3xl mx-auto">
            <CarouselContent>
              {experience.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-video">
                    <img
                      src={image.url}
                      alt={image.alt || `Project image ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  {image.description && (
                    <p className="mt-2 text-sm text-gray-600 text-center">
                      {image.description}
                    </p>
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      )}

      {/* 주요 성과 및 설명 */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Key Achievements</h3>
        <ul className="space-y-2 text-gray-600">
          {experience.description.map((desc, index) => (
            <li key={index} className="flex gap-2">
              <span>•</span>
              <span>{desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
