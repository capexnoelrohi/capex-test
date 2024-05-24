"use client";

import { Button } from "@/components/ui/button";

export function DeleteButton({ itemId }: { itemId: number }) {
  return (
    <Button variant="destructive" size="sm">
      Delete
    </Button>
  );
}
