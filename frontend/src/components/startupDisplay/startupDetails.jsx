import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import FounderDetails from "./founderDetails";
import { Button } from "../ui/button";

export default function StartupDetails({ props }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex-row flex gap-5 items-center justify-center">
        <div className="flex flex-col">
          <p className="text-3xl font-bold">{props.name}</p>
          <Button
            onClick={() => {
              location.href = "/request";
            }}
          >
            Add Request
          </Button>
        </div>

        <img src={props.logo} />
      </div>
      <div className="flex flex-row gap-5">
        <Card className="w-1/2">
          <CardHeader className="flex items-center justify-center">
            <p className="text-3xl font-bold">Startup Details</p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-row gap-2">
              <p className="font-bold">Industry:</p>
              <p>{props.industry}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-2xl underline">Description:</p>
              <p>{props.description}</p>
            </div>
          </CardContent>
        </Card>
        <FounderDetails props={props.founderDetails} />
      </div>
    </div>
  );
}
