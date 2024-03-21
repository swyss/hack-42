import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AdditionalSchema } from "./additionalSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
export default function AdditonalForm({ parentSubmit }) {
  const form = useForm({
    resolver: zodResolver(AdditionalSchema),
    defaultValues: {
      englishTest: "",
      englishLevel: "",
      proof: "",
      hear: "",
    },
  });

  function onSubmit(values) {
    //Add the Data to parent
    values.stepName = "additional";
    parentSubmit(values);
    console.log(values);
  }

  const mockDataHear = [
    {
      id: 12222,
      name: "University",
    },
    {
      id: 1111,
      name: "Social Media",
    },
  ];
  const mockDataELevel = [
    {
      id: 12222,
      name: "CAE",
    },
    {
      id: 1111,
      name: "CPE",
    },
  ];

  return (
    <Form {...form} className="border shadow-md w-full">
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-2 border p-10 rounded-md shadow-md"
      >
        <h1 className="font-bold text-3xl">Additional Data</h1>
        <div className="flex flex-col gap-2">
          <FormField
            control={form.control}
            name="englishTest"
            render={({ field }) => (
              <FormItem>
                <FormLabel>English proficiency test</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a proficiency test" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {mockDataELevel.map((test) => (
                      <SelectItem value={test.name} key={test.id}>
                        {test.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="englishLevel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>English proficiency level</FormLabel>
                <FormControl>
                  <Input placeholder="English Level" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="proof"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Proof of English proficiency</FormLabel>
                <FormControl>
                  <Input type="file" {...field} />
                </FormControl>
                <FormDescription>Upload the proof as a PDF.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="hear"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Where did you hear about START Fellowship?
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a value" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {mockDataHear.map((hear) => (
                      <SelectItem value={hear.name} key={hear.id}>
                        {hear.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

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
