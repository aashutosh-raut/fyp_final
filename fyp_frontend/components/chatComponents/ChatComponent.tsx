import { useState } from "react";
import { useWebSocket } from "./Socket";
import { Message } from "./Message";

interface ChatProps {
  currentUserId: string;
  receiverId: string;
}

export const ChatComponent = ({ currentUserId, receiverId }: ChatProps) => {
  const [content, setContent] = useState<string>("");
  const [messages, setMessages] = useState<any[]>([]);

  const ws = useWebSocket(currentUserId, receiverId, (message: string) => {
    const { ENTER_ROOM_RESPONSE, SEND_MESSAGE_RESPONSE } = JSON.parse(message);

    if (ENTER_ROOM_RESPONSE) setMessages(ENTER_ROOM_RESPONSE.messages);

    if (SEND_MESSAGE_RESPONSE) {
      setMessages((prev) => [...prev, SEND_MESSAGE_RESPONSE]);
    }
  })!;

  const clearInput = (
    setState: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setState("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    ws.send(
      JSON.stringify({
        SEND_MESSAGE: {
          receiverId,
          content,
        },
      })
    );
    clearInput(setContent);
  };

  return (
    <div className="h-screen">
      <ul className="max-w-4xl mx-auto space-y-12 grid grid-cols-1 h-5/6">
        {messages.map((message) => (
          <Message
            key={message.id}
            message={message}
            currentUserId={currentUserId}
          />
        ))}
      </ul>
      <div className="flex justify-center h-1/6">
        <form onSubmit={handleSubmit}>
          <div className="my-3 xl:w-96 h-12 flex flex-row">
            <textarea
              className="
                    form-control
                    block
                    w-96
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Your message"
              value={content}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setContent(e.target.value)
              }
            ></textarea>
            <button
              type="submit"
              className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-4"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
