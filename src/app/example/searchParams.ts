import { createSearchParamsCache, createSerializer } from "nuqs/server";

const searchParams = {};

export const serialize = createSerializer(searchParams);

export const searchParamsCache = createSearchParamsCache(searchParams);

export type SearchParams = ReturnType<typeof searchParamsCache.parse>;
