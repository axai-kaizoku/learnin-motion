import { z } from "zod"

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc"

// Mocked DB
interface Post {
  id: number
  name: string
}
const posts: Post[] = [
  {
    id: 1,
    name: "Unknown Bruh",
  },
]

export const postRouter = createTRPCRouter({
  heyy: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Heyy ${input.text}`,
      }
    }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ input }) => {
      const post: Post = {
        id: posts.length + 1,
        name: input.name,
      }
      posts.push(post)
      return post
    }),

  getLatest: publicProcedure.query(() => {
    return posts.at(-1) ?? null
  }),
  getAll: publicProcedure.query(() => {
    return posts ?? null
  }),
})
