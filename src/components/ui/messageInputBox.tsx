import { CornerDownLeft, Mic, Paperclip } from "lucide-react";
import { Label } from "./label";
import { Textarea } from "./textarea";
import { Button } from "./button";

const MessageInputBox = () => {
  return (
    <div className="p-4">
      <form className="relative overflow-hidden rounded-lg border focus-within:ring-1 focus-within:ring-ring bg-muted">
        <Label htmlFor="message" className="sr-only">
          Message
        </Label>
        <Textarea
          id="message"
          placeholder="Message to conference meeting"
          className="min-h-12 max-h-28 resize-none border-0 p-3 focus-visible:ring-0 whisper-scroll firefox:whisper-thin !bg-muted"
        />
        <div className="flex items-center p-3 pt-0">
          <Button variant="ghost" size="icon">
            <Paperclip />
            <span className="sr-only">Attach file</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Mic />
            <span className="sr-only">Use Microphone</span>
          </Button>
          <Button type="submit" size="sm" className="ml-auto">
            Send Message
            <CornerDownLeft />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default MessageInputBox;
