"use client";

import ChatBot from "@/app/(dashboard)/mindmap/chat-bot";
import { Message } from "@/app/(dashboard)/mindmap/chat-panel";
import MarkMap, { MapMindNode } from "@/app/(dashboard)/mindmap/mark-map";
import { useState } from "react";

export default function MindmapPage() {
  const [mindMapData, setMindMapData] = useState<MapMindNode | null>({
    data: {
      text: "根节点",
    },
    children: [],
  });

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "system",
      content: "欢迎使用本系统",
    },
    {
      sender: "system",
      content: "请问有什么可以帮助您的？",
    },
    {
      sender: "user",
      content: "我想要添加一个节点",
    },
    {
      sender: "system",
      content: "请问您想要添加到哪个节点下？",
    }
  ]);

  const [suggestions, setSuggestions] = useState<string[]>([
    "添加节点",
    "删除节点",
    "修改节点",
  ]);

  return (
    <div className="container grid grid-cols-5 gap-2 h-screen y-auto-scroll">
      <div className="col-span-3 h-full">
        <MarkMap value={mindMapData} onChange={setMindMapData} />
      </div>
      <div className="col-span-2">
        <ChatBot messages={messages} suggestions={suggestions} />
      </div>
    </div>
  )
}
