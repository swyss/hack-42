import React from "react";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
export default function FounderDetails({ props }) {
  return (
    <Card className="w-1/2">
      <CardHeader className="flex items-center justify-center">
        <p className="text-3xl font-bold">Founder details</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="flex flex-row gap-2">
          <p className="font-bold">Full name:</p>
          <p>{props.fullname}</p>
        </div>

        <div className="flex flex-row gap-2">
          <p className="font-bold">Email:</p>
          <p>{props.email}</p>
        </div>

        <div className="flex flex-row gap-2">
          <p className="font-bold">Date of birth:</p>
          <p>{props.birthday}</p>
        </div>

        <div className="flex flex-row gap-2">
          <p className="font-bold">Phone Number:</p>
          <p>{props.phoneNumber}</p>
        </div>

        <div className="flex flex-row gap-2">
          <p className="font-bold">City:</p>
          <p>{props.city}</p>
        </div>
        <div className="flex flex-row gap-2">
          <p className="font-bold">Country:</p>
          <p>{props.country}</p>
        </div>
      </CardContent>
    </Card>
  );
}
