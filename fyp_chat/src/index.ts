import "dotenv/config";
import { WebSocket, WebSocketServer } from "ws";
import { handleMessage } from "./handlers/handleMessage";

const wss = new WebSocketServer({ port: 9090 }, () => console.log("Started"));

const clients: Record<string, WebSocket>[] = [];

const handleConnection = async (client: WebSocket, request: any) => {
  const [, currentUserId] = request.url.split("/");

  if (!currentUserId) client.close();

  clients.push({ [currentUserId]: client });
  client.on(
    "message",
    (message: string) => handleMessage(client, currentUserId, message, clients),
  );
  client.on(
    "close",
    () => clients.splice(clients.indexOf({ [currentUserId]: client }), 1),
  );
};

wss.on("connection", handleConnection);
