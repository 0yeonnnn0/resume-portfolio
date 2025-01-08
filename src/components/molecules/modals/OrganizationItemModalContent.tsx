import { OrganizationType } from "@/store/resumeStore";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Calendar, MapPin, Users } from "lucide-react";

interface OrganizationItemModalProps {
  organization: OrganizationType;
}

export default function OrganizationItemModalContent({
  organization,
}: OrganizationItemModalProps) {
  return (
    <div className="p-6 space-y-8">
      {/* 헤더: 조직명과 기간, 위치 */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">{organization.name}</h2>
        <div className="flex flex-wrap gap-4 text-gray-600">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>{organization.role}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>
              {organization.period.start} - {organization.period.end}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{organization.location}</span>
          </div>
        </div>
      </div>

      {/* 이미지 캐러셀 */}
      {organization.images && organization.images.length > 0 && (
        <div className="space-y-4">
          <Carousel className="w-full max-w-3xl mx-auto">
            <CarouselContent>
              {organization.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-video">
                    <img
                      src={image.url}
                      alt={image.alt || `Organization image ${index + 1}`}
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

      {/* 주요 활동 내용 */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Key Activities</h3>
        <ul className="space-y-2 text-gray-600">
          {organization.details.map((detail, index) => (
            <li key={index} className="flex gap-2">
              <span>•</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
