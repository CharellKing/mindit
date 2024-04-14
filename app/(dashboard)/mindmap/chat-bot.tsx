import ChatInput from "@/app/(dashboard)/mindmap/chat-input";
import ChatPanel, { Message } from "@/app/(dashboard)/mindmap/chat-panel";

interface ChatBotProps {
  messages: Message[];
  suggestions: string[];
}

const ChatBot: React.FC<ChatBotProps> = ({ messages, suggestions }) => {
  return (
    <div className="flex flex-col h-full">
      <ChatPanel messages={messages} />
      <ChatInput suggestions={suggestions} />
    </div>
  )
}

export default ChatBot;