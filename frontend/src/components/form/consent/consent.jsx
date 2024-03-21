import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ConsentSchema } from "./consentSchema";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";

export default function Consent({ parentSubmit }) {
  const form = useForm({
    resolver: zodResolver(ConsentSchema),
    defaultValues: {
      emailConfirm: "",
      requirements: "",
      consent: "",
      terms: "",
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
        className="flex flex-col gap-10 border p-10 rounded-md shadow-md"
      >
        <h1 className="font-bold text-3xl">Confirm and consent</h1>
        <div className="flex flex-col gap-5">
          <FormField
            control={form.control}
            name="emailConfirm"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email confirmation</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormDescription>
                  Please confirm your email address. Use the same one as before!
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col gap-5">
            <p className="text-2xl">Application Requirements</p>
            <ul className="list-disc pl-4">
              <li>You are between 18-25 years old</li>
              <li>You are committed to founding</li>
              <li>
                You are a co-founder with at least a team of 2 people (no solo
                founders!)
              </li>
              <li>
                You have an MVP (a first prototype to validate among first
                customers)
              </li>
              <li>
                You are enrolled at a partner university of START Fellowship
                List of Universities - LatAm
              </li>
              <li>You have good English skills</li>
            </ul>
            <FormField
              control={form.control}
              name="requirements"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="flex flex-col space-y-1 leading-none">
                    <FormLabel>
                      I confirm being aware of the requirements of the program
                    </FormLabel>
                    {form.formState.errors.requirements && (
                      <span className="text-red-500">
                        Please confirm the requirements
                      </span>
                    )}
                  </div>
                </FormItem>
              )}
            />
            <div className="flex flex-col">
              <p className="text-2xl">Definitions and consent</p>
              <ul className="list-disc pl-4">
                <li>
                  MVP: A Minimum Viable Product (MVP) is an early version of a
                  product that includes only the core features necessary to meet
                  customer needs and gather feedback.
                </li>
                <li>
                  SaaS-MVP: A Software-as-a-Service Minimum Viable Product is a
                  stripped-down version of a software application that provides
                  essential features and functionality to validate its market
                  viability and gather user feedback.
                </li>
                <li>
                  Hardware-MVP: A Hardware Minimum Viable Product is a basic
                  version of a physical product or device that demonstrates its
                  core functionality and value proposition, aiming to test
                  market demand and collect user insights.
                </li>
                <li>
                  Prototype: A prototype is a preliminary version or model of a
                  product, system, or concept that is created to test and
                  validate its design, functionality, and feasibility among
                  first customers, family, friends, and fools.
                </li>
                <li>
                  Startup: A startup is a young company, venture or project that
                  is in its early stages of development and that is scalable and
                  innovative.
                </li>
                <li>
                  Co-Founder: A co-founder refers to one of the individuals who,
                  along with others, initiates and establishes a company or
                  venture. In this sense, a co-founder must own at least 10% of
                  an incorporated startup company.
                </li>
                <li>
                  Partner University: The universities are listed exhaustively
                  in this list:{" "}
                  <a href="List of Universities - LatAm">
                    List of Universities - LatAm
                  </a>
                </li>
              </ul>
            </div>
            <FormField
              control={form.control}
              name="consent"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="flex flex-col space-y-1 leading-none">
                    <FormLabel>
                      By submitting this form, I acknowledge that I have read
                      and understood the provided definitions. I agree that the
                      information I provide must align with these definitions,
                      and I am aware that failure to comply may result in my
                      exclusion from the application and program.
                    </FormLabel>
                    {form.formState.errors.requirements && (
                      <span className="text-red-500">
                        Please confirm the consent
                      </span>
                    )}
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="flex flex-col space-y-1 leading-none">
                    <FormLabel>
                      By submitting this form, I acknowledge that I have read
                      and understood the{" "}
                      <a
                        href="https://www.startglobal.org/terms-and-conditions"
                        target="_blank"
                      >
                        Terms and Conditions
                      </a>
                      and the{" "}
                      <a
                        href="https://www.startglobal.org/privacy-policy"
                        target="_blank"
                      >
                        Privacy Policy.*
                      </a>
                    </FormLabel>
                    {form.formState.errors.requirements && (
                      <span className="text-red-500">
                        Please confirm the terms
                      </span>
                    )}
                  </div>
                </FormItem>
              )}
            />
          </div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
}
