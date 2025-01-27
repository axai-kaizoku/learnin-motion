"use client"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { motion, useAnimationControls } from "framer-motion"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"
import { Layout } from "./helpers/layout"

const FormSchema = z.object({
  email: z.string().email(),
  otp: z.string().length(6),
})

type FormType = z.infer<typeof FormSchema>

export function FormBased() {
  const [state, setState] = useState("0")
  const controls = useAnimationControls()

  const form = useForm<FormType>({
    resolver: zodResolver(FormSchema),
    mode: "onTouched",
    defaultValues: { email: "", otp: "" },
  })

  const handleNext = () => {
    const emailState = form.getFieldState("email")
    if (!emailState.invalid) {
      void controls.start("move")
      setState("1")
    }
  }

  const onSubmit = (data: FormType) => {
    console.log("FORM SUBMITTED")
    console.log(data)
  }

  return (
    <Layout title="ViewBased">
      <motion.div
        variants={{
          initial: {
            // x: -200,
            // transition: { duration: 1 },
            rotate: 0,
          },
          move: {
            // x: 0,
            rotate: 360,
            // transition: { duration: 1 },
          },
        }}
        initial="initial"
        animate={controls}
        className="flex h-96 w-96 items-center justify-center rounded-md border bg-muted p-4"
      >
        {/* Form */}
        <Form {...form}>
          <form
            className="flex w-full flex-col gap-10"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            {state === "0" && (
              <motion.div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Give us your email"
                          {...field}
                          className={
                            form.formState.errors.email
                              ? "focus-visible:ring-red-500"
                              : "focus-visible:ring-black dark:focus-visible:ring-white"
                          }
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </motion.div>
            )}
            {state === "1" && (
              <motion.div>
                <FormField
                  control={form.control}
                  name="otp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>OTP</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Give us OTP"
                          {...field}
                          className={
                            form.formState.errors.otp
                              ? "focus-visible:ring-red-500"
                              : "focus-visible:ring-black dark:focus-visible:ring-white"
                          }
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </motion.div>
            )}
            {state === "0" && (
              <button className="btn" type="button" onClick={handleNext}>
                Next
              </button>
            )}
            {state === "1" && (
              <button className="btn" type="submit">
                Submit
              </button>
            )}
          </form>
        </Form>
      </motion.div>
    </Layout>
  )
}
