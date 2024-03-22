import React, { useContext } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
//import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "./loginSchema";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { UserContext } from "@/App";

export default function login() {
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values) {
    if (values.email === "admin") {
      localStorage.setItem("STARTHACK", "admin");
    } else {
      localStorage.setItem("STARTHACK", "user");
    }
    location.href = "/dashboard";
  }

  return (
    <Form {...form} className="border shadow-md w-full">
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-2 border p-10 rounded-md shadow-md"
      >
        <h1 className="font-bold text-3xl">Login</h1>
        <div className="w-full">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="john.doe@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Next</Button>
      </form>
    </Form>
  );
}
