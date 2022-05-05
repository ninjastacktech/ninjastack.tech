import ReactPlayer from "react-player";
import { DragCard } from "../Card";
import coinVideo from "../../videos/coin.mp4";
import { useEffect } from "react";

export interface ICoinVideoCardProps {}

export function CoinVideoCard(props: ICoinVideoCardProps) {

  return (
    <div>
      <DragCard
        className="w-32"
        defaultPosition={{ x: -1000, y: 200 }}
        noPadding={true}
      >
          <ReactPlayer
            loop={true}
            playing={true}
            muted={true}
            url={coinVideo}
            width={140}
            height={140}
          />
      </DragCard>
    </div>
  );
}
