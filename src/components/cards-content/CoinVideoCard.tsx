import ReactPlayer from "react-player";
import { DragCard } from "../Card";
import coinVideo from "../../videos/coin.mp4";
import { useEffect } from "react";

export interface ICoinVideoCardProps {}

export function CoinVideoCard(props: ICoinVideoCardProps) {
  return (
    <DragCard
      className="w-32 rounded-lg"
      defaultPosition={{ x: 1350, y: 100 }}
      noPadding={true}
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
