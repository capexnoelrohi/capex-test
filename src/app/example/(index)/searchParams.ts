import {
  createSearchParamsCache,
  createSerializer,
  parseAsInteger,
  parseAsString,
} from "nuqs/server";

const searchParams = {
  limit: parseAsInteger.withDefault(10),
  name: parseAsString,
};

export const serialize = createSerializer(searchParams);

export const searchParamsCache = createSearchParamsCache(searchParams);

export type SearchParams = ReturnType<typeof searchParamsCache.parse>;
