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
import { OrganizationType } from "@/store/resumeStore";

interface OrganizationTableProps {
  organizations: OrganizationType[];
}

export default function OrganizationModalContent({
  organizations,
}: OrganizationTableProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredOrganizations = organizations.filter((org) =>
    org.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* 헤더 섹션 */}
      <div className="space-y-3">
        <h2 className="text-3xl font-bold">Organizations</h2>
      </div>

      {/* 검색바 */}
      <div>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="text"
            placeholder="조직 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>
      </div>

      {/* 테이블 컨테이너 */}
      <div className="relative w-[calc(100vw-theme(space.40))] max-w-screen-xl -ml-8">
        <div className="border rounded-lg overflow-x-auto">
          <div className="min-w-full inline-block align-middle pb-3">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[300px] bg-background pl-6">
                    Organization
                  </TableHead>
                  <TableHead className="min-w-[200px] bg-background">
                    Role
                  </TableHead>
                  <TableHead className="min-w-[150px] bg-background">
                    Location
                  </TableHead>
                  <TableHead className="min-w-[100px] bg-background">
                    Duration
                  </TableHead>
                  <TableHead className="min-w-[500px] bg-background pr-6">
                    Details
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="border-b">
                {filteredOrganizations.map((org, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium pl-6 whitespace-nowrap">
                      {org.name}
                    </TableCell>
                    <TableCell className="whitespace-nowrap">{org.role}</TableCell>
                    <TableCell>{org.location}</TableCell>
                    <TableCell>{org.duration}</TableCell>
                    <TableCell className="pr-6 whitespace-nowrap">
                      <ul className="space-y-1 list-disc list-inside text-sm text-gray-700">
                        {org.details.map((detail, idx) => (
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
