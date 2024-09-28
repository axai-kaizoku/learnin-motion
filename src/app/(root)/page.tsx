import { api } from "@/trpc/server";
import { GreetBruh } from "./_components/greet";

export default async function Home() {
  const post = await api.post.getLatest();
  return (
    <div className="flex flex-col gap-10">
      <span className="font-mono text-9xl font-medium">Home.</span>
      <div className="flex flex-col gap-4">
        <span className="font-mono text-2xl font-thin">Heyy {post?.name}</span>
        <GreetBruh />
      </div>
    </div>
  );
}
