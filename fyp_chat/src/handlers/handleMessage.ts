import { WebSocket } from "ws";
import { handleEnterRoom } from "./handleEnterRoom";
import { handleSendMessage } from "./handleSendMessage";

export const handleMessage = (
  client: WebSocket,
  currentUserId: string,
  message: string,
  clients: Record<string, WebSocket>[],
) => {
  const { ENTER_ROOM, SEND_MESSAGE } = JSON.parse(message);

  if (ENTER_ROOM && ENTER_ROOM.receiverId) {
    handleEnterRoom(
      client,
      currentUserId,
      ENTER_ROOM.receiverId,
    );
  }

  if (SEND_MESSAGE && SEND_MESSAGE.receiverId && SEND_MESSAGE.content) {
    handleSendMessage(
      currentUserId,
      SEND_MESSAGE.receiverId,
      SEND_MESSAGE.content,
      clients,
    );
  }
};
