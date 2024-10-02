import { api } from "@/trpc/server";
import { GreetBruh } from "./_components/greet";

export default async function Home() {
  const post = await api.post.getLatest();
  // const posts = await api.post.getAll();
  const greet = await api.post.heyy({ text: post?.name ?? "" });
  return (
    <div className="flex flex-col gap-10">
      <span className="font-mono text-9xl font-medium">Home.</span>
      <div className="flex flex-col gap-0">
        <span className="font-mono text-2xl font-thin">{greet.greeting}</span>
        <span className="font-mono text-sm pb-4 font-thin">
          so, you can get everything about framer-motion from here
        </span>
        <GreetBruh />
        {/* {JSON.stringify(posts)} */}
      </div>
    </div>
  );
}
