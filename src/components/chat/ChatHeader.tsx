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
          <Text variant="base" weight="bold">
            Conferacne Meeting
          </Text>
          <Badge variant="secondary" className="text-muted-foreground">
            4h left
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
            <Avatar>
              <AvatarImage
                src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-1/447547678_2426111187594619_2794787843621496013_n.jpg?stp=c448.0.1152.1153a_cp0_dst-jpg_s40x40_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeF5bReFzlEZ2hBu8xMjKTHmdEuJQYBcePt0S4lBgFx4-3aVpoYZYp9W8w2dz1tsdFmpE0rmae1e7TBZJMlFRj8c&_nc_ohc=3bjF4WDvo1UQ7kNvwG1bNj3&_nc_oc=AdlwZBmyF5iD-GnKlwlEf-fFUiLgYukVEU19b4SBK45hpo21phSHWQwkxEMOj3Ae-PY&_nc_zt=24&_nc_ht=scontent.fdac24-2.fna&_nc_gid=bloge73fFBgdLy7urwR00g&oh=00_AfIHKZyZJdJXLLEqFCgo831tKs1u7xuDj1Fcet1THNQeCA&oe=682ACEB6"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-1/486644520_1822592765202206_874228434924014017_n.jpg?stp=c0.0.853.853a_cp0_dst-jpg_s80x80_tt6&_nc_cat=105&ccb=1-7&_nc_sid=9a2c5d&_nc_eui2=AeHwuCWi-hZurKIUIskWnT7RAlI-GP_r1GACUj4Y_-vUYITqsqwgfRhAt63PV4rkZqivBbZ21zQyo9gcblRK-N5_&_nc_ohc=NtZcid4j-7MQ7kNvwEh1BUM&_nc_oc=Adn-vn9qanqIkYRBYi9InsNCj32eiuNGfPTTlMl1jbzSPiKSGCgZwGQi9SefLPNZDrU&_nc_zt=24&_nc_ht=scontent.fdac24-2.fna&_nc_gid=vIwo69QjFsjpQqsJTFltAw&oh=00_AfK6pValFDSJEexppydXL1DMItZ3hh9UelxOwcXdGdXRlw&oe=682ABB2B"
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
      <div className="flex items-center justify-between border-b border-border pb-4 px-4 md:px-8 lg:px-16 relative before:absolute before:w-20 before:h-0.5 before:bg-foreground before:-bottom-px before:left-0 max-md:landscape:hidden">
        <div className="flex items-center gap-2">
          <div>
            <Heading as="h5" className="font-bold">
              6:00
            </Heading>
            <Text variant="sm" weight="medium" textColor="muted">
              Sat, Dec 11
            </Text>
          </div>
          <ChevronRight className="text-muted-foreground" />
          <div>
            <Heading as="h4" className="font-bold">
              7:00
            </Heading>
            <Text variant="sm" weight="medium" textColor="muted">
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
