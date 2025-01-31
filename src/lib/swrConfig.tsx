"use client";

import { SWRConfig } from "swr";
const fetcher = (resource: string, init: RequestInit) =>
  fetch(resource, init).then((res) => res.json());

export const SWR = ({ children }: { children: React.ReactNode }) => {
  return <SWRConfig value={{ fetcher }}>{children}</SWRConfig>;
};
