import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ChatComponent } from "../../components/chatComponents/ChatComponent";
import { getId } from "../../utils/auth";
import NavBar from "../../components/NavBar";

interface QuerryVariables {
  friendId: string;
}

const chat = () => {
  const [receiverId, setReceiverId] = useState<string>();

  const router = useRouter();

  useEffect(() => {
    const { friendId } = router.query as unknown as QuerryVariables;
    setReceiverId(friendId);
  }, [router]);

  if (receiverId) {
    return (
      <div style={{ height: 1000, width: "100%", backgroundColor: "#fffef5" }}>
        <NavBar />
        <ChatComponent currentUserId={getId()} receiverId={receiverId} />
      </div>
    );
  }

  return <div>Loading...</div>;
};

export default chat;
