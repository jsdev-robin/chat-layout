import React from "react";
import { Check, Circle, Play } from "lucide-react";
import { Slider } from "../ui/slider";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Text from "../ui/text";

interface ChatReceiverProps {
  data: {
    msg: string;
    msgType?: "text" | "voice";
  };
}

const ChatReceiver: React.FC<ChatReceiverProps> = ({ data }) => {
  return data.msgType === "text" ? (
    <div className="flex gap-2 max-w-[90%] ml-auto flex-row-reverse">
      <Badge className="self-end rounded-full size-4 p-0 bg-[#f9e3cb]">
        <Check className="stroke-[#dc7a0a]" />
      </Badge>
      <div className="bg-[#f9e3cb] p-4 rounded-md rounded-br-none">
        <Text variant="sm" weight="medium">
          {data.msg}
        </Text>
      </div>
    </div>
  ) : (
    <div className="flex gap-2 max-w-[90%] ml-auto flex-row-reverse">
      <span className="self-end">
        <Circle size={16} strokeWidth={4} className="stroke-[#eaa75b]" />
      </span>
      <div className="bg-[#f9e3cb] p-3 rounded-md rounded-br-none w-full">
        <div className="flex items-center gap-2 w-full">
          <Button size="icon" className="rounded-full size-8">
            <Play className="fill-background !size-3" />
          </Button>
          <Slider
            defaultValue={[50]}
            max={100}
            step={1}
            className="w-[150px]"
          />
          <Text variant="sm" textColor="muted">
            0:30
          </Text>
        </div>
      </div>
    </div>
  );
};

export default ChatReceiver;
