import { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

const partners = [
  {
    name: "Eiffel Tower",
    country: "France",
    tags: ["landmark", "tourist attraction", "Paris"],
  },
  {
    name: "Statue of Liberty",
    country: "USA",
    tags: ["landmark", "freedom", "New York City"],
  },
  {
    name: "Great Wall of China",
    country: "China",
    tags: ["landmark", "historic", "wall"],
  },
  {
    name: "Taj Mahal",
    country: "India",
    tags: ["landmark", "mausoleum", "Agra"],
  },
];

function ComboboxForm() {
  const languages = [
    { label: "English", value: "en" },
    { label: "French", value: "fr" },
    { label: "German", value: "de" },
    { label: "Spanish", value: "es" },
    { label: "Portuguese", value: "pt" },
    { label: "Russian", value: "ru" },
    { label: "Japanese", value: "ja" },
    { label: "Korean", value: "ko" },
    { label: "Chinese", value: "zh" },
  ];

  const FormSchema = z.object({
    language: z.string({
      required_error: "Please select a language.",
    }),
  });

  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Language</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? (languages || []).find(
                            (language) => language.value === field.value
                          )?.label
                        : "Select language"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search language..." />
                    <CommandEmpty>No language found.</CommandEmpty>
                    <CommandGroup>
                      {console.log(languages)}
                      {languages?.map((language, index) => (
                        <CommandItem
                          value={language.label}
                          key={index}
                          onSelect={() => {
                            form.setValue("language", language.value);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              language.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {language.label}
                            </CommandItem>
                      )) ?? null}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>
                This is the language that will be used in the dashboard.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

const AddPartner = ({}) => {
  const [partnerDetails, setPartnerDetails] = useState({
    name: "",
    country: "",
    tag: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPartnerDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(partnerDetails); // Here you can instead save the details where you need them
    // Reset the form fields if needed
    setPartnerDetails({ name: "", country: "", tag: "" });
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">+ Add Partner</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>New Partner</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="picture">Picture</Label>
                <Input id="picture" type="file" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={partnerDetails.name}
                  onChange={handleChange}
                  placeholder=""
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="country" className="text-right">
                  Country
                </Label>
                <Input
                  id="country"
                  name="country"
                  value={partnerDetails.country}
                  onChange={handleChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="tag" className="text-right">
                  Tag
                </Label>
                <Input
                  id="tag"
                  name="tag"
                  value={partnerDetails.tag}
                  onChange={handleChange}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="submit">Save changes</Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const PartnerCard = ({ img, name, country, tags }) => {
  return (
    <div className="cursor-pointer">
      <Card className="p-2 h-40">
        <img src={img} />
        <CardTitle>{name}</CardTitle>
        <CardDescription>{country}</CardDescription>
        <div>
          {tags.map((item, index) => (
            <span className="mr-1 flex-col h-20">
              <Badge key={index} className="fill-red">
                {item}
              </Badge>
            </span>
          ))}
        </div>
      </Card>
    </div>
  );
};

const Patrners = () => {
  return (
    <div className="">
      <div>
        <h1 className="text-3xl font-bold">Partners START Fellowship</h1>
      </div>
      <div className="mt-8">
        <AddPartner />
        <ComboboxForm />
        <div className="mt-2">filter</div>
        <div className="mt-2">
          <div className="grid grid-cols-4 gap-4">
            {partners.map((item, index) => (
              <PartnerCard
                key={index}
                name={item.name}
                country={item.country}
                tags={item.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patrners;
