import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { ChevronDown, Mic, Plus } from "lucide-react";
import { useAppContext } from "../../context/app-context";
import EmojiSmileIcon from "../ui/EmojiSmileIcon";

const ChatInputBox = () => {
  const { chatInputBoxRef } = useAppContext();

  return (
    <div className="p-4" ref={chatInputBoxRef}>
      <div className="bg-muted rounded-lg overflow-hidden">
        <Label htmlFor="message" className="sr-only">
          Message
        </Label>
        <Textarea
          id="message"
          placeholder="Message to conference meeting"
          className="min-h-12 max-h-28 overflow-y-auto resize-none border-0 p-3 focus-visible:ring-0 !bg-transparent shadow-none"
        />
        <div className="p-3 flex items-center">
          <div className="flex items-center">
            <Button variant="secondary" size="icon" className="bg-background">
              <Plus />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground"
            >
              <EmojiSmileIcon />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground"
            >
              <Mic />
            </Button>
          </div>
          <Button type="submit" className="ml-auto">
            Send now
            <span className="h-4 w-px bg-muted-foreground" />
            <ChevronDown />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInputBox;
