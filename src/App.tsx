import ChatHeader from "./components/chat/ChatHeader";
import ChatDetails from "./components/chat/ChatDetails";
import ChatInputBox from "./components/chat/ChatInputBox";

const App = () => {
  return (
    <section className="bg-background flex items-center justify-center py-5">
      <div className="container max-w-lg">
        <div className="shadow-2xl w-full rounded-md h-full">
          <div className="flex flex-col">
            <ChatHeader />
            <ChatDetails />
            <ChatInputBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
