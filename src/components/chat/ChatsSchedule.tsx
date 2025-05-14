import Heading from "../ui/heading";
import Text from "../ui/text";
import { ChevronRight, Ellipsis } from "lucide-react";
import { Button } from "../ui/button";

const ChatsSchedule = () => {
  return (
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
  );
};

export default ChatsSchedule;
