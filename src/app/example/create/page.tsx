import Link from "next/link";
import { Form } from "./_interactive";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="space-y-4">
      <Link href="/example">
        <Button variant="secondary"> ↩️ Back</Button>
      </Link>
      <Form />
    </div>
  );
}
