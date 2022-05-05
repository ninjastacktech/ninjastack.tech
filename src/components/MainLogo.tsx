import circle from "../images/ninja/circle.png";
import guy from "../images/ninja/guy.png";

export interface IMainLogoProps {}

export function MainLogo(props: IMainLogoProps) {
  return (
    <div className="flex mt-32 absolute w-full top-4">
      <div className="w-full h-full flex relative items-center justify-center text-center ">
        <img src={circle} className="flex h-80 opacity-80" alt="circle" />
        <img src={guy} className="flex h-[30rem] absolute" alt="circle" />
      </div>
    </div>
  );
}
