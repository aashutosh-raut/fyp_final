interface MessageProps {
  message: any;
  currentUserId: string;
}

export const Message = ({ message, currentUserId }: MessageProps) => {
  const isMessageFromUser = () => {
    return currentUserId === message.userId;
  };

  return (
    <div
      className={`${
        isMessageFromUser() ? "place-self-end" : "place-self-start"
      } space-y-2`}
    >
      <p
        className={`p-5 rounded-2xl
             ${isMessageFromUser() ? "rounded-tr-none" : "rounded-tl-none"}
             ${isMessageFromUser() ? "bg-blue-200" : "bg-green-200"}
        `}
      >
        {message.content}
      </p>
    </div>
  );
};
