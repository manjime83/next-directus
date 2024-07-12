import client from "@/lib/directus";
import { readItems } from "@directus/sdk";
import Image from "next/image";

export default async function Home() {
  const gpus = await client.request(readItems("graphic_cards", { fields: ["*"] }));

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {gpus.map((gpu) => (
        <div key={gpu.id}>{JSON.stringify(gpu)}</div>
      ))}
    </main>
  );
}
