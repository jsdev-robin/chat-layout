import ChatSenderMsg from "./ChatSenderMsg";
import ChatReceiver from "./ChatReceiver";

const ChatDetails = () => {
  return (
    <div className="flex flex-col-reverse overflow-y-auto p-4 gap-3 h-[calc(90vh-(var(--header-h)+var(--input-h)))]">
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
    </div>
  );
};

export default ChatDetails;
