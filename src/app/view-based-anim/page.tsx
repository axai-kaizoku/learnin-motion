// "use client";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { motion } from "framer-motion";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { Button } from "@/components/ui/button";
// import { useState } from "react";

// const FormSchema = z.object({
//   email: z.string().email(),
//   otp: z.string().length(6),
// });

// type FormType = z.infer<typeof FormSchema>;

// export default function ViewBased() {
//   const [state, setState] = useState("0");

//   const form = useForm<FormType>({
//     resolver: zodResolver(FormSchema),
//     mode: "onTouched",
//     defaultValues: { email: "", otp: "" },
//   });

//   const handleNext = () => {
//     const emailState = form.getFieldState("email");
//     if (!emailState.invalid) {
//       setState("1");
//     }
//   };

//   const onSubmit = (data: FormType) => {
//     console.log("FORM SUBMITTED");
//     console.log(data);
//   };

//   return (
//     <div className="flex h-full w-full flex-col items-center justify-center">
//       <div className="flex h-full w-[60%] items-center justify-center border-x">
//         <div className="flex h-96 w-96 items-center justify-center rounded-md border bg-muted p-4">
//           {/* Form */}
//           <Form {...form}>
//             <form
//               className="flex w-full flex-col gap-4"
//               onSubmit={form.handleSubmit(onSubmit)}
//             >
//               {state === "0" && (
//                 <motion.div>
//                   <FormField
//                     control={form.control}
//                     name="email"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Email</FormLabel>
//                         <FormControl>
//                           <Input
//                             placeholder="Give us your email"
//                             {...field}
//                             className={
//                               form.formState.errors.email
//                                 ? "focus-visible:ring-red-500"
//                                 : "focus-visible:ring-black dark:focus-visible:ring-white"
//                             }
//                           />
//                         </FormControl>
//                       </FormItem>
//                     )}
//                   />
//                 </motion.div>
//               )}
//               {state === "1" && (
//                 <motion.div>
//                   <FormField
//                     control={form.control}
//                     name="otp"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>OTP</FormLabel>
//                         <FormControl>
//                           <Input
//                             placeholder="Give us OTP"
//                             {...field}
//                             className={
//                               form.formState.errors.otp
//                                 ? "focus-visible:ring-red-500"
//                                 : "focus-visible:ring-black dark:focus-visible:ring-white"
//                             }
//                           />
//                         </FormControl>
//                       </FormItem>
//                     )}
//                   />
//                 </motion.div>
//               )}
//               {state === "0" && (
//                 <button className="btn" type="button" onClick={handleNext}>
//                   Next
//                 </button>
//               )}
//               {state === "1" && (
//                 <button className="btn" type="submit">
//                   Submit
//                 </button>
//               )}
//             </form>
//           </Form>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const FormSchema = z.object({
  email: z.string().email(),
  otp: z.string().length(6),
});

type FormType = z.infer<typeof FormSchema>;

export default function ViewBased() {
  const [state, setState] = useState("0");

  const form = useForm<FormType>({
    resolver: zodResolver(FormSchema),
    mode: "onTouched",
    defaultValues: { email: "", otp: "" },
  });

  const handleNext = () => {
    const emailState = form.getFieldState("email");
    if (!emailState.invalid) {
      setState("1");
    }
  };

  const onSubmit = (data: FormType) => {
    console.log("FORM SUBMITTED");
    console.log(data);
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex h-full w-[60%] items-center justify-center border-x">
        <div className="flex h-96 w-96 items-center justify-center rounded-md border bg-muted p-4">
          {/* Form */}
          <Form {...form}>
            <form
              className="flex w-full flex-col gap-4"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <AnimatePresence mode="wait">
                {state === "0" && (
                  <motion.div
                    key="email"
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 200, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
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
                  <motion.div
                    key="otp"
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 200, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
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
              </AnimatePresence>
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
        </div>
      </div>
    </div>
  );
}
