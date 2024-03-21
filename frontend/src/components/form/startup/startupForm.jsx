import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { StartupSchema } from "./startupSchema";

export default function StartupForm({ parentSubmit }) {
  const form = useForm({
    resolver: zodResolver(StartupSchema),
    defaultValues: {
      name: "",
      industry: "",
      description: "",
      potential: "",
      motivation: "",
      chooseSTART: "",
      coFounderCount: 0,
      coFounderNames: "",
    },
  });
  function onSubmit(values) {
    //Add the Data to parent
    values.stepName = "startup";
    parentSubmit(values);
    console.log(values);
  }
  return (
    <Form {...form} className="border shadow-md w-full">
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-2 border p-10 rounded-md shadow-md"
      >
        <h1 className="font-bold text-3xl">Startup</h1>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Startup Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Startup Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="industry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Startup Industry</FormLabel>
                  <FormControl>
                    <Input placeholder="Startup Industry" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your startup"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Describe what your startup does, what problem does it solve?
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="potential"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Startup Potential</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about the potential of the startup"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Why do you think does your startup has potential in the
                  future?
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="motivation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Motivation as Founder</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about the motivation of the startup"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  What motivates you as a founder?
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="chooseSTART"
            render={({ field }) => (
              <FormItem>
                <FormLabel>START Fellowship 23/24</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us how you heard about us"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Why do you choose to apply to START Fellowship?
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full">
            <div className="flex flex-row justify-between gap-2">
              <FormField
                control={form.control}
                name="coFounderCount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of co-founders</FormLabel>
                    <FormControl>
                      <Input placeholder="0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="coFounderNames"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Co-founders name</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Write all co-founder names down"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Full names required & please separate the names with a
                      comma
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Button type="submit">Next</Button>
        </div>
      </form>
    </Form>
  );
}
