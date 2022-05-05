import * as React from "react";
import { CardBackgroundFlavor } from "../../models/card.model";
import { DragCard } from "../Card";

export interface IBotCardProps {}

export function BotCard(props: IBotCardProps) {
  return (
    <DragCard
      className="w-80 text-center"
      title="NFT Sales Bot"
      defaultPosition={{ x: 1100, y: 450 }}
    >
      {/* <div className="flex-2 flex justify-center">
          <img className="w-28 h-28" src={pixelNinjaImg4} alt="NFT Bots" />
        </div> */}
      <div className="flex-1 mt-6 flex flex-col items-center">
        <div className="text-sm">Posts sales from any marketplace</div>
        <a
          className="cursor-pointer rounded-lg font-large font-bold mt-4 flex justify-center w-3/4 p-1"
          href="https://ninja-bot-server.azurewebsites.net/"
          target="_blank"
        >
          Go to App
        </a>
      </div>
    </DragCard>
  );
}
