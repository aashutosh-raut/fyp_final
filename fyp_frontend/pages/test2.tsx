import { ChatComponent } from "../components/chatComponents/ChatComponent";
import NavBar from "../components/NavBar";

const test = () => {
  return (
    <div>
      <NavBar />
      {/* <ChatComponent currentUserId="user2" receiverId="user1" /> */}
      <div className="h-screen">
        <div className="bg-red-300 h-5/6">Hello</div>
        <div className="bg-blue-300 h-1/6">CHAT</div>
      </div>
    </div>
  );
};

export default test;
