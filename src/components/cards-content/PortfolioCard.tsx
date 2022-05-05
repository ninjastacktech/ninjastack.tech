import * as React from "react";
import { CardBackgroundFlavor } from "../../models/card.model";
import { DragCard } from "../Card";

export interface IPortfolioCardProps {}

export function PortfolioCard(props: IPortfolioCardProps) {
  return (
    <div>
      <DragCard
        className="w-80 text-center"
        backgroundFlavor={CardBackgroundFlavor.gray}
        title="NFT Portfolio"
        defaultPosition={{ x: 800, y: 250 }}
      >
        {/* <div className="flex-2 flex justify-center">
          <img className="w-28 h-28" src={pixelNinjaImg3} alt="NFT Bots" />
        </div> */}
        <div className="flex-1 mt-6 flex flex-col items-center">
          <div className="text-sm">Built with our C# SDK for OpenSea</div>
          <a
            className="cursor-pointer rounded-lg font-large font-bold mt-4 flex justify-center w-3/4 p-1"
            href="https://portfolio.ninjastack.tech/"
            target="_blank"
          >
            Go to App
          </a>
        </div>
      </DragCard>
    </div>
  );
}
