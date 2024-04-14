import SystemMessage from "@/app/(dashboard)/mindmap/system-message";
import UserMessage from "@/app/(dashboard)/mindmap/user-message";

export interface Message {
  sender: string;
  content: string;
}

interface ChatPanelProps {
  messages: Message[];
}

const ChatPanel: React.FC<ChatPanelProps> = ({ messages }) => {
  return (
    <>
      <div
        className="flex-1 h-full w-full overflow-y-auto rounded-xl bg-slate-200 p-4 text-sm leading-6 text-slate-900 dark:bg-slate-800 dark:text-slate-300 sm:text-base sm:leading-7"
      >
        {messages?.map((message, index) => (
          message.sender === "system" ? (<SystemMessage key={index} message={message.content} />) : (<UserMessage key={index} message={message.content} />)
        ))}
      </div>
    </>
  );
}


export default ChatPanel;