import React, { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "../ui/card";
import ChatMessage from "./chatMessage";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "../ui/input";

export default function Chat({ chat }) {
  const isAdmin = true;
  const ref = useRef(null);
  const [MessageValue, setMessageValue] = useState("");
  const messagesEndRef = useRef(null);
  const [Chat, setChat] = useState(chat);
  const jumpToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleSendMessage = () => {
    setTimeout(() => {
      const currentDate = new Date();
      const currentTime = currentDate.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      const newChatItem = {
        message: MessageValue,
        time: currentTime,
        isAdmin: isAdmin,
      };
      setMessageValue("");

      // Update the Chat state by spreading the existing Chat array and appending the newChatItem
      setChat([...Chat, newChatItem]);
    }, 500);
  };
  useEffect(() => {
    console.log(messagesEndRef);
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messagesEndRef]);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);
  const handleChange = (event) => {
    setMessageValue(event.target.value); // Update the state with the new value from the input
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive" onClick={jumpToBottom}>
          Open Chat
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Chat</DialogTitle>
        </DialogHeader>
        <Card>
          <CardContent className="p-0">
            <ScrollArea
              id="scrollArea"
              className="w-full flex p-0"
              style={{ maxHeight: "300px", overflowY: "auto" }}
            >
              <div className="p-4 flex flex-col gap-2">
                {Chat.map((mess, index) => (
                  <div className="gap-2 flex">
                    <ChatMessage
                      message={mess.message}
                      time={mess.time}
                      sentAdmin={mess.isAdmin}
                      isAdmin={isAdmin}
                      key={index}
                    />
                  </div>
                ))}
                <div
                  className="flex w-full"
                  key={new Date().getTime()}
                  ref={(el) => {
                    messagesEndRef.current = el;
                  }}
                />
              </div>
            </ScrollArea>
            <div className="w-full flex flex-row justify-center items-center">
              <Input
                className="border m-2"
                value={MessageValue}
                onChange={handleChange}
                placeholder="Your message"
              />
              <Button onClick={handleSendMessage}>Send message</Button>
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
