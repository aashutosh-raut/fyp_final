import { useEffect } from "react";

export function useWebSocket(
  currentUserId: string,
  receiverId: string,
  callback: (arg: string) => void,
) {
  if (typeof window !== "undefined") {
    const ws = new WebSocket(`ws://localhost:9090/${currentUserId}`);

    const onMount = () => {
      ws.onopen = () => {
        ws.send(
          JSON.stringify({ ENTER_ROOM: { receiverId } }),
        );
      };

      ws.onmessage = (msg) => {
        callback(msg.data);
      };
    };

    const onUnmount = () => {
      ws.close();
    };

    const useEffectHook = () => {
      onMount();
      return () => {
        onUnmount();
      };
    };

    useEffect(useEffectHook, []);

    return ws;
  }
}
