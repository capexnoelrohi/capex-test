"use server";

import { db } from "@/db";
import { user } from "@/db/schema";
import type { New } from "./validations";

const table = user;

export async function create(data: New) {
  try {
    const userId = 1;
    await db.insert(table).values(data);
    return {
      message: "Successfully created",
      success: true,
    };
  } catch (error) {
    return {
      message: "Error creating",
      success: false,
    };
  }
}
