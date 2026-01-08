"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";

import { useLoginMutation } from "@/hooks/mutations/useSignUpMutations";
import { useAuthStore } from "@/hooks/store";

export const loginSchema = z.object({
   email: z.string().email("Invalid email address"),
   password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginForm() {
   const router = useRouter();
   const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
   const { mutate: login, isPending, isError } = useLoginMutation();

   const form = useForm<LoginFormValues>({
      resolver: zodResolver(loginSchema),
      defaultValues: {
         email: "",
         password: "",
      },
   });

   useEffect(() => {
      if (isAuthenticated) {
         router.push("/admin/create-blog");
      }
   }, [isAuthenticated, router]);

   const onSubmit = (values: LoginFormValues) => {
      login(values, {
         onError: () => {
            form.setError("root", {
               message: "Invalid email or password",
            });
         },
      });
   };

   return (
      <Card className="w-full max-w-md mx-auto p-8 border-orange-200">
         <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>

         <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
               {form.formState.errors.root && (
                  <p className="text-sm text-red-600">
                     {form.formState.errors.root.message}
                  </p>
               )}

               <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                           <Input {...field} disabled={isPending} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                           <Input
                              type="password"
                              {...field}
                              disabled={isPending}
                           />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <Button className="w-full" disabled={isPending}>
                  {isPending ? "Logging in..." : "Login"}
               </Button>
            </form>
         </Form>
      </Card>
   );
}
