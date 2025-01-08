import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { ExperienceType } from "@/store/resumeStore";

interface ProjectTableProps {
  projects: ExperienceType[];
}

export default function ExperienceModalContent({
  projects,
}: ProjectTableProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* 헤더 섹션 */}
      <div className="space-y-3">
        <h2 className="text-3xl font-bold">Experience</h2>
      </div>

      {/* 검색바 */}
      <div>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="text"
            placeholder="프로젝트 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>
      </div>

      {/* 테이블 컨테이너 */}
      <div className="relative w-[calc(100vw-theme(space.40))] -ml-8 max-w-screen-xl">
        <div className="border rounded-lg overflow-x-auto">
          <div className="min-w-full inline-block align-middle pb-3">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[200px] bg-background pl-6">
                    Project
                  </TableHead>
                  <TableHead className="min-w-[200px] bg-background">
                    Role
                  </TableHead>
                  <TableHead className="min-w-[150px] bg-background">
                    Organization
                  </TableHead>
                  <TableHead className="min-w-[100px] bg-background">
                    Period
                  </TableHead>
                  <TableHead className="min-w-[200px] bg-background">
                    Skills
                  </TableHead>
                  <TableHead className="min-w-[500px] bg-background pr-6">
                    Details
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="border-b">
                {filteredProjects.map((project, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium pl-6 whitespace-nowrap">
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {project.title}
                        </a>
                      ) : (
                        project.title
                      )}
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      {project.role}
                    </TableCell>
                    <TableCell>{project.company}</TableCell>
                    <TableCell>
                      {project.period.start} - {project.period.end}
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {project.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 text-xs bg-gray-100 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="pr-6 whitespace-nowrap">
                      <ul className="space-y-1 list-disc list-inside text-sm text-gray-700">
                        {project.description.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
