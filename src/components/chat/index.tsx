"use client";

import { useChat } from "ai/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
    <Card className="w-[500px]">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>Using vercel SDK to create a chatbot.</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] w-full pr-10">
          {messages.map((message) => (
            <section
              key={message.id}
              className="flex gap-2 text-slate-600 text-sm mb-4"
            >
              {message.role === "user" && (
                <Avatar>
                  <AvatarFallback>WF</AvatarFallback>
                  <AvatarImage src="https://github.com/willsza.png" />
                </Avatar>
              )}

              {message.role === "assistant" && (
                <Avatar>
                  <AvatarFallback>Ak</AvatarFallback>
                  <AvatarImage src="https://github.com/rocketseat.png" />
                </Avatar>
              )}

              <p className="leading-relaxed">
                <span className="block font-bold text-slate-700">
                  {message.role === "user" ? "Will" : "Alke IA"}
                </span>
                {message.content}
              </p>
            </section>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSubmit} className="flex gap-2 w-full">
          <Input
            placeholder="How can I help you?"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  );
}
