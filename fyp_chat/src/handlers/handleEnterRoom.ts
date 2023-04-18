import { WebSocket } from "ws";
import prisma from "../utils/prisma-client.utils";

export const handleEnterRoom = async (
  client: WebSocket,
  currentUserId: string,
  receiverId: string,
) => {
  const roomId = `${currentUserId}${receiverId}`.split("").sort().join("");

  const roomMessages = await prisma.room.findUnique({
    where: {
      id: roomId,
    },
    select: {
      messages: true,
    },
  });

  if (roomMessages) {
    return client.send(JSON.stringify({ "ENTER_ROOM_RESPONSE": roomMessages }));
  }

  await prisma.room.create({
    data: {
      id: roomId,
    },
  });

  return client.send(JSON.stringify({
    "ENTER_ROOM_RESPONSE": {
      messages: [],
    },
  }));
};
