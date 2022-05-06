import circle from "../images/ninja/circle.png";
import guy from "../images/ninja/guy.png";

export interface IMainLogoProps {}

export function MainLogo(props: IMainLogoProps) {
  return (
    <div className="hidden absolute w-full top-4 mt-20 md:flex md:mt-32">
      <div className="w-full h-full flex relative items-center justify-center text-center ">
        <img src={circle} className="flex h-80 opacity-80" alt="circle" />
        <img src={guy} className="flex h-[30rem] absolute" alt="circle" />
      </div>
    </div>
  );
}
