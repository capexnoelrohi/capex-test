import { db } from "@/db";
import { searchParamsCache } from "./_searchParams";
import {
  TableBody,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableHeader,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { eq } from "drizzle-orm";
import { user } from "@/db/schema";
import { revalidatePath } from "next/cache";

type PageProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default async function Page({ searchParams }: PageProps) {
  const { limit } = searchParamsCache.parse(searchParams);
  const list = await db.query.user.findMany({
    limit,
  });
  return (
    <>
      <div className="flex w-full justify-end">
        <Link href="/example/create">
          <Button>Create</Button>
        </Link>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {list.map((u) => (
            <TableRow key={u.id}>
              <TableCell>{u.name}</TableCell>
              <TableCell>{u.email}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <form
                    action={async () => {
                      "use server";
                      await db
                        .update(user)
                        .set({ name: "some name" })
                        .where(eq(user.id, u.id));
                      revalidatePath("/example");
                    }}
                  >
                    <Button variant="ghost" size="sm" type="submit">
                      Edit
                    </Button>
                  </form>
                  <form
                    action={async () => {
                      "use server";
                      await db.delete(user).where(eq(user.id, u.id));
                      revalidatePath("/example");
                    }}
                  >
                    <Button variant="destructive" size="sm" type="submit">
                      Delete
                    </Button>
                  </form>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
