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

interface Project {
  title: string;
  role: string;
  organization: string;
  location: string;
  period: {
    start: string;
    end: string;
  };
  skills: string[];
  description: string;
  url?: string;
}

interface ProjectTableProps {
  projects: Project[];
}

export default function ExperienceModalContent({
  projects,
}: ProjectTableProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8 p-6">
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
      <div>
        <div className="overflow-x-auto border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="min-w-[200px]">Project</TableHead>
                <TableHead className="min-w-[150px]">Role</TableHead>
                <TableHead className="min-w-[200px]">Organization</TableHead>
                <TableHead className="min-w-[150px]">Period</TableHead>
                <TableHead className="min-w-[200px]">Skills</TableHead>
                <TableHead className="min-w-[300px]">Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProjects.map((project, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
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
                  <TableCell>{project.role}</TableCell>
                  <TableCell>
                    <div>
                      <div>{project.organization}</div>
                      <div className="text-sm text-gray-500">
                        {project.location}
                      </div>
                    </div>
                  </TableCell>
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
                  <TableCell className="max-w-md">
                    <p className="text-sm text-gray-700 whitespace-pre-line">
                      {project.description}
                    </p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
