import ChatSenderMsg from "./ChatSenderMsg";
import ChatReceiver from "./ChatReceiver";
import TypingIndicator from "../ui/typing-indicator";

const ChatDetails = () => {
  return (
    <div className="flex flex-col-reverse overflow-y-auto p-4 gap-3 h-[calc(90vh-(var(--header-h)+var(--input-h)))]">
      <TypingIndicator />
      <ChatSenderMsg
        data={{
          img: {
            src: "https://randomuser.me/api/portraits/women/45.jpg",
            alt: "Alice",
          },
          isOnline: true,
          msg: "What do you want to eat?",
          msgType: "vote",
          createAt: "23:28",
        }}
      />
      <ChatReceiver
        data={{
          msg: "Let’s decide quickly, time is running out!",
          msgType: "text",
        }}
      />
      <ChatSenderMsg
        data={{
          img: {
            src: "https://randomuser.me/api/portraits/men/32.jpg",
            alt: "John",
          },
          isOnline: false,
          msg: "Should we try the new place near the station?",
          msgType: "text",
          createAt: "23:40",
        }}
      />
      <ChatReceiver
        data={{
          msg: "Hmm...Let me think",
          msgType: "voice",
        }}
      />
      <ChatReceiver
        data={{
          msg: "Hmm...Let me think",
          msgType: "text",
        }}
      />
      <ChatSenderMsg
        data={{
          img: {
            src: "https://github.com/leerob.png",
            alt: "name",
          },
          isOnline: true,
          msg: "Where do we want to meet guys? I need to know before",
          msgType: "voice",
          createAt: "23:30",
        }}
      />
      <ChatSenderMsg
        data={{
          img: {
            src: "https://randomuser.me/api/portraits/women/45.jpg",
            alt: "Alice",
          },
          isOnline: true,
          msg: "Hey everyone 👋",
          msgType: "text",
          createAt: "23:28",
        }}
      />
      <ChatReceiver
        data={{
          msg: "Hi Alice! Glad you joined.",
          msgType: "text",
        }}
      />

      <ChatSenderMsg
        data={{
          img: {
            src: "https://randomuser.me/api/portraits/men/12.jpg",
            alt: "Mark",
          },
          isOnline: true,
          msg: "I’d vote for Burgers 🍔",
          msgType: "text",
          createAt: "23:45",
        }}
      />
      <ChatReceiver
        data={{
          msg: "Same here. Burgers sound great!",
          msgType: "text",
        }}
      />
      <ChatSenderMsg
        data={{
          img: {
            src: "https://randomuser.me/api/portraits/men/15.jpg",
            alt: "Tom",
          },
          isOnline: false,
          msg: "Voice note: Meet at 6 PM near the central park",
          msgType: "voice",
          createAt: "23:46",
        }}
      />
      <ChatSenderMsg
        data={{
          img: {
            src: "https://randomuser.me/api/portraits/women/55.jpg",
            alt: "Emma",
          },
          isOnline: true,
          msg: "Let’s vote: 6 PM or 7 PM?",
          msgType: "vote",
          createAt: "23:47",
        }}
      />
      <ChatReceiver
        data={{
          msg: "I’ll go with 6 PM ⏰",
          msgType: "text",
        }}
      />
      <ChatSenderMsg
        data={{
          img: {
            src: "https://randomuser.me/api/portraits/men/20.jpg",
            alt: "Leo",
          },
          isOnline: true,
          msg: "I'm running a bit late. Will join by 7.",
          msgType: "text",
          createAt: "23:50",
        }}
      />
    </div>
  );
};

export default ChatDetails;
