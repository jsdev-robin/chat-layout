import React from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import Onlineindicator from "../ui/online-indicator";
import Text from "../ui/text";
import { Button } from "../ui/button";
import { Circle, Ellipsis, MessageCircleMore } from "lucide-react";
import EmojiSmileIcon from "../ui/EmojiSmileIcon";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuTrigger,
} from "../ui/context-menu";
import { useMediaQuery } from "../../hooks/use-media-query";

interface ChatSenderMsgProps {
  data: {
    img: {
      src: string;
      alt: string;
    };
    isOnline: boolean;
    msg: string;
    createAt: string;
    msgType?: "text" | "voice" | "vote";
  };
}

const ChatSenderMsg: React.FC<ChatSenderMsgProps> = ({ data }) => {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  console.log(isMobile);

  return data.msgType === "text" ? (
    <div className="w-full space-y-1.5">
      <Text variant="sm" textColor="muted" className="text-center">
        {data.createAt}
      </Text>
      <div className="flex justify-start gap-2 max-w-[90%]">
        <div className="self-end relative">
          <Avatar className="size-6">
            <AvatarImage src={data.img.src} alt={data.img.alt} />
          </Avatar>
          {data.isOnline && <Onlineindicator />}
        </div>
        <div className="bg-muted p-4 rounded-md rounded-bl-none">
          <Text variant="sm" weight="medium">
            {data.msg}
          </Text>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full space-y-1.5">
      <Text variant="sm" textColor="muted" className="text-center">
        {data.createAt}
      </Text>
      <div className="flex justify-start items-center gap-2 max-w-[90%]">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <div className="self-end relative">
              <Avatar className="size-6">
                <AvatarImage src={data.img.src} alt={data.img.alt} />
              </Avatar>
              {data.isOnline && <Onlineindicator />}
            </div>
            <ContextMenu>
              <ContextMenuTrigger
                className="w-full"
                disabled={isMobile ? false : true}
              >
                <div className="bg-muted p-4 rounded-md rounded-bl-none flex-1">
                  <Text variant="sm" weight="medium">
                    {data.msg}
                  </Text>
                  <div className="flex flex-col gap-1 mt-2">
                    <Button
                      className="w-full justify-start !bg-background !border-0"
                      variant="outline"
                    >
                      <Circle className="fill-muted stroke-muted" />
                      Pizza
                    </Button>
                    <Button
                      className="w-full justify-start !bg-background !border-0"
                      variant="outline"
                    >
                      <Circle className="fill-muted stroke-muted" />
                      Burgers
                    </Button>
                  </div>
                  <Text
                    variant="xs"
                    textColor="muted"
                    weight="medium"
                    className="text-right mt-2"
                  >
                    8 votes . Vote to see result
                  </Text>
                </div>
              </ContextMenuTrigger>
              <ContextMenuContent>
                <div className="items-center flex">
                  <Button variant="ghost" size="sm">
                    <EmojiSmileIcon />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MessageCircleMore />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Ellipsis />
                  </Button>
                </div>
              </ContextMenuContent>
            </ContextMenu>
          </div>
        </div>
        <div className="items-center hidden lg:flex">
          <Button variant="ghost" size="sm">
            <EmojiSmileIcon />
          </Button>
          <Button variant="ghost" size="sm">
            <MessageCircleMore />
          </Button>
          <Button variant="ghost" size="sm">
            <Ellipsis />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatSenderMsg;
