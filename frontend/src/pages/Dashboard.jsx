import React, { useEffect } from "react";
import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Coach from "./Coach";
import Patrners from "./Partners";

const menu = [
  {
    label: "Home",
    link: "/home",
  },
  {
    label: "Startup application",
    link: "/application",
  },
  {
    label: "Startup requests",
    link: "/request",
  },
  {
    label: "Coach/ Mentor",
    link: "/coach",
  },
  {
    label: "Parnters",
    link: "/parners",
  },
];

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

const StartupOwerview = () => {
  return (
    <div className="w-4/5 p-4">
      <div className="grid grid-cols-5 gap-4">
        {frameworks.map((item, index) => (
          <div className="cursor-pointer">
            <Card className="h-40">{item.label}</Card>
          </div>
        ))}
      </div>
    </div>
  );
};

const views = [<StartupOwerview />, <Coach />, <Patrners />];

const Dashboard = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewIndex, setViewIndex] = useState(0);

  useEffect(() => {
    console.log("load startup application");
    console.log("load startup request");
  });

  return (
    <div className="section__padding fullHeightDiv">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>
      <div className="mt-8 h-full w-full">
        <div className="w-1/6">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="justify-between"
              >
                {value
                  ? frameworks.find((framework) => framework.value === value)
                      ?.label
                  : "Select batch..."}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search framework..." />
                <CommandEmpty>No batch found.</CommandEmpty>
                <CommandGroup>
                  <CommandList>
                    {frameworks.map((framework, index) => (
                      <CommandItem
                        key={framework.value}
                        value={framework.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue);
                          setOpen(false);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            value === framework.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {framework.label}
                      </CommandItem>
                    ))}
                  </CommandList>
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
        <div className="w-full flex  h-[90%] mt-4">
          <div className="w-1/6 border rounded-lg mr-4 p-2">
            <ul>
              {" "}
              {/* This ul tag should wrap all list items */}
              {menu.map((item, index) => (
                <li key={index} className="mb-1">
                  {" "}
                  {/* Each item is an li, not ul */}
                  <Button
                    variant="ghost"
                    className={`w-full justify-start ${
                      index === activeIndex
                        ? "bg-accent text-accent-foreground"
                        : ""
                    }`}
                    onClick={() => {
                      setActiveIndex(index);
                      setViewIndex(index);
                    }}
                  >
                    {item.label}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full border rounded-lg p-4 relative">
            {views[viewIndex]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
