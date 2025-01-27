"use client"
import { api } from "@/trpc/react"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation"

const GreetSchema = z.object({
  input: z.string(),
})

type GreetType = z.infer<typeof GreetSchema>

export const GreetBruh = () => {
  const router = useRouter()

  const createPost = api.post.create.useMutation({
    onSuccess: () => {
      router.refresh()
    },
  })

  const form = useForm<GreetType>({
    resolver: zodResolver(GreetSchema),
    mode: "onSubmit",
    defaultValues: { input: "" },
  })

  const onSubmit = (data: GreetType) => {
    createPost.mutate({ name: data.input })
    form.reset()
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="input"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder=". . . ."
                    className={
                      form.formState.errors.input
                        ? "focus-visible:ring-red-500"
                        : "focus-visible:ring-black dark:focus-visible:ring-white"
                    }
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  )
}
