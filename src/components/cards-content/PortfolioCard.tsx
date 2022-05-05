import * as React from "react";
import { CardBackgroundFlavor } from "../../models/card.model";
import { DragCard } from "../Card";
import pixelNinjaImg3 from "../../images/ninja/pixels/ninja-pixel-collection-1.3.png";

export interface IPortfolioCardProps {}

export function PortfolioCard(props: IPortfolioCardProps) {
  return (
    <div>
      <DragCard
        className="w-80 text-center"
        backgroundFlavor={CardBackgroundFlavor.yellow}
        title="NFT Portfolio"
        defaultPosition={{ x: 800, y: -20 }}
      >
        <div className="flex-2 flex justify-center">
          <img className="w-28 h-28" src={pixelNinjaImg3} alt="NFT Bots" />
        </div>
        <div className="flex-1 mt-6 flex flex-col items-center">
          <div className="text-sm">Built with our C# SDK for OpenSea</div>
          <a
            className="bg-slate-700 text-gray-300 cursor-pointer rounded-lg font-large font-bold mt-4 flex justify-center w-3/4 p-1"
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
