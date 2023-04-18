import { WebSocket } from "ws";
import prisma from "../utils/prisma-client.utils";

export const handleSendMessage = async (
  currentUserId: string,
  receiverId: string,
  content: string,
  clients: Record<string, WebSocket>[],
) => {
  const roomId = `${currentUserId}${receiverId}`.split("").sort().join("");

  const response = await prisma.message.create({
    data: {
      roomId,
      userId: currentUserId,
      content,
    },
  });

  clients.forEach((pair) => {
    if (pair[receiverId]) {
      pair[receiverId].send(
        JSON.stringify({ "SEND_MESSAGE_RESPONSE": response }),
      );
    }

    if (pair[currentUserId]) {
      pair[currentUserId].send(
        JSON.stringify({ "SEND_MESSAGE_RESPONSE": response }),
      );
    }
  });
};
