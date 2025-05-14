import { Avatar, AvatarImage } from "./avatar";
import Onlineindicator from "./online-indicator";

const TypingIndicator = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Avatar className="size-6">
          <AvatarImage
            src={
              "https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-1/447547678_2426111187594619_2794787843621496013_n.jpg?stp=c448.0.1152.1153a_cp0_dst-jpg_s40x40_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeF5bReFzlEZ2hBu8xMjKTHmdEuJQYBcePt0S4lBgFx4-3aVpoYZYp9W8w2dz1tsdFmpE0rmae1e7TBZJMlFRj8c&_nc_ohc=3bjF4WDvo1UQ7kNvwG1bNj3&_nc_oc=AdlwZBmyF5iD-GnKlwlEf-fFUiLgYukVEU19b4SBK45hpo21phSHWQwkxEMOj3Ae-PY&_nc_zt=24&_nc_ht=scontent.fdac24-2.fna&_nc_gid=bloge73fFBgdLy7urwR00g&oh=00_AfIHKZyZJdJXLLEqFCgo831tKs1u7xuDj1Fcet1THNQeCA&oe=682ACEB6"
            }
            alt={""}
          />
        </Avatar>
        <Onlineindicator />
      </div>
      <div className="flex items-center space-x-0.5">
        <span className="w-1.5 h-1.5 bg-gray-900 rounded-full animate-bubble" />
        <span className="w-1.5 h-1.5 bg-gray-700 rounded-full animate-bubble [animation-delay:0.2s]" />
        <span className="w-1.5 h-1.5 bg-gray-600 rounded-full animate-bubble [animation-delay:0.4s]" />
      </div>
    </div>
  );
};

export default TypingIndicator;
