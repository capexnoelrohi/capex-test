import { db } from "@/db";
import { searchParamsCache } from "./searchParams";
import {
  TableBody,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableHeader,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default async function Page() {
  const { limit } = searchParamsCache.all();
  const list = await db.query.user.findMany({
    limit,
  });
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {list.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Button variant="ghost" size="sm">
                  Edit
                </Button>
                <Button variant="destructive" size="sm">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
