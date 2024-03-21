import React from "react";
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


export default function login() {

    const form = useForm({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    function onSubmit(values) {

        values.stepName = "personal";
        //TODO either send data to backend or save in frontend for a single commit
        console.log(values);
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
                    <Input placeholder="password" {...field} />
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