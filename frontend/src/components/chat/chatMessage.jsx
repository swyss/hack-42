import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";

export default function ChatMessage({ message, time, sentAdmin, isAdmin }) {
  if (isAdmin && sentAdmin) {
    return (
      <div className="w-full flex items-end justify-end">
        <Card className="rounded-md border w-80">
          <CardContent>
            <div>{message}</div>
          </CardContent>
          <CardFooter className={"justify-end"}>
            <p>{time}</p>
          </CardFooter>
        </Card>
      </div>
    );
  } else if ((!sentAdmin && isAdmin) || (sentAdmin && !isAdmin)) {
    console.log(sentAdmin);
    return (
      <div className="w-full flex items-start justify-start">
        <Card className="rounded-md border w-80">
          <CardContent>
            <div>{message}</div>
          </CardContent>
          <CardFooter className={"justify-start"}>
            <p>{time}</p>
          </CardFooter>
        </Card>
      </div>
    );
  } else {
    return (
      <div className="w-full flex items-end justify-end">
        <Card className="rounded-md border w-80">
          <CardContent>
            <div>{message}</div>
          </CardContent>
          <CardFooter className={"justify-end"}>
            <p>{time}</p>
          </CardFooter>
        </Card>
      </div>
    );
  }
}
