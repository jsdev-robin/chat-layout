import { ArrowLeft, ChevronRight, Ellipsis } from "lucide-react";
import { Button } from "../ui/button";
import Text from "../ui/text";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Heading from "../ui/heading";
import { useAppContext } from "../../context/app-context";

const ChatHeader = () => {
  const { ref } = useAppContext();
  return (
    <div ref={ref}>
      <div className="flex items-center justify-between gap-4 p-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="text-muted-foreground">
            <ArrowLeft />
          </Button>
          <Text variant="base" weight="medium">
            Conferacne Meeting
          </Text>
          <Badge variant="secondary" className="text-muted-foreground">
            4h left
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/evilrabbit.png"
                alt="@evilrabbit"
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </div>
          <Badge variant="secondary" className="text-muted-foreground">
            +8
          </Badge>
        </div>
      </div>
      <div className="px-8 pb-4 flex items-center justify-between border-b border-border relative before:absolute before:w-20 before:h-0.5 before:bg-foreground before:-bottom-px before:left-0">
        <div className="flex items-center gap-2">
          <div>
            <Heading as="h4" className="font-bold">
              6:00
            </Heading>
            <Text variant="base" textColor="muted">
              Sat, Dec 11
            </Text>
          </div>
          <ChevronRight className="text-muted-foreground" />
          <div>
            <Heading as="h4" className="font-bold">
              7:00
            </Heading>
            <Text variant="base" textColor="muted">
              Sat, Dec 11
            </Text>
          </div>
        </div>
        <Button variant="ghost">
          <Ellipsis />
        </Button>
      </div>
    </div>
  );
};

export default ChatHeader;
