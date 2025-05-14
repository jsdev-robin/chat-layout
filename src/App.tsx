import ChatHeader from "./components/chat/ChatHeader";
import ChatDetails from "./components/chat/ChatDetails";
import ChatInputBox from "./components/chat/ChatInputBox";

const App = () => {
  return (
    <section className="bg-background flex items-center justify-center lg:py-5">
      <div className="container md:max-w-3/5 xl:max-w-2/5">
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
