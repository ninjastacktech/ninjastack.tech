import circle from "../images/ninja/circle.png";
import guy from "../images/ninja/guy.png";

export interface IMainLogoProps {}

export function MainLogo(props: IMainLogoProps) {
  return (
    <div className="flex items-center justify-center mt-32 text-center absolute w-full h-full top-4">
      <img src={circle} className="flex h-80" alt="circle" />
      <img src={guy} className="flex h-[30rem] absolute" alt="circle" />
    </div>
  );
}
