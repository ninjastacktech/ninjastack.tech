import ReactPlayer from "react-player";
import { DragCard } from "../Card";
import coinVideo from "../../videos/coin.mp4";
import { CardBackgroundFlavor } from "../../models/card.model";

export interface ICoinVideoCardProps {}

export function CoinVideoCard(props: ICoinVideoCardProps) {
  return (
    <DragCard
      className="hidden md:flex md:w-32 rounded-lg"
      defaultPosition={{ x: 1350, y: 100 }}
      noPadding={true}
      backgroundFlavor={CardBackgroundFlavor.none}
    >
      <ReactPlayer
        loop={true}
        playing={true}
        muted={true}
        url={coinVideo}
        width={140}
        height={140}
        style={{ borderRadius: "0.5rem", overflow: "hidden" }}
      />
    </DragCard>
  );
}
