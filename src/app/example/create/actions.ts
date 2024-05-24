"use server";

import { db } from "@/db";
import { user } from "@/db/schema";
import type { New } from "./validations";
import { revalidatePath } from "next/cache";

const table = user;

export async function create(data: New) {
  try {
    await db.insert(table).values(data);
    revalidatePath("/example");
    return {
      message: "Successfully created",
      success: true,
    };
  } catch (error) {
    console.error(error);
    return {
      message: "Error creating",
      success: false,
    };
  }
}
