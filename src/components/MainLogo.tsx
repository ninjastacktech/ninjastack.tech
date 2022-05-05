import circle from "../images/ninja/circle.png";
import guy from "../images/ninja/guy.png";

export interface IMainLogoProps {}

export function MainLogo(props: IMainLogoProps) {
  return (
    <div className="flex items-center justify-center relative mt-32 text-center">
      <img src={circle} className="flex h-80" alt="circle" />
      <img src={guy} className="flex h-[30rem] absolute" alt="circle" />
    </div>
  );
}
