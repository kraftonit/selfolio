"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import useSWR, { unstable_serialize } from "swr";

export default function Home() {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(data);
  return (
    <div>
      <Button>Click me</Button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
