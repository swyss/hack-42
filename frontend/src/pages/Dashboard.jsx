import React, { useEffect } from "react";
import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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

const frameworks = [
  {
    value: "current",
    label: "Current Bagde",
    batchs: [
      {
        id: 1111,
        name: "Test Startup in current badge",
      },
      {
        id: 1122,
        name: "Another Startup",
      },
    ],
  },
  {
    value: "badge2024Q4",
    label: "Badge 2024 Q4",
    batchs: [
      {
        id: 12344,
        name: "Test Startup in past badge",
      },
      {
        id: 12233,
        name: "Startup let's go",
      },
    ],
  },
];

const Dashboard = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("current");
  const [activeIndex, setActiveIndex] = useState(0);
  const [Subbatches, setSubbatches] = useState([]);
  useEffect(() => {
    if (!value) {
      return;
    }

    setSubbatches(frameworks.find((frame) => frame.value === value).batchs);
  }, [value]);
  return (
    <div className="section__padding">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>
      <div className="mt-24">
        <div>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-[200px] justify-between"
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
                    {frameworks.map((framework) => (
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
        <div className="w-full flex mt-4">
          <div className="w-[200px] debug mr-4">
            <li>
              {frameworks.map((item, index) => (
                <ul key={index} className="mb-1">
                  <Button
                    variant="ghost"
                    className={`w-full justify-start ${
                      index === activeIndex
                        ? "bg-accent text-accent-foreground"
                        : ""
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    {item.label}
                  </Button>
                </ul>
              ))}
            </li>
          </div>
          <div className="w-4/5 debug p-4">
            <div className="grid grid-cols-5 gap-4">
              {Subbatches.map((item, index) => (
                <div className="cursor-pointer">
                  <Card
                    className="p-5 flex justify-center items-center"
                    onClick={() => {
                      location.href = `/startup/overview?id=${item.id}`;
                    }}
                  >
                    {item.name}
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
