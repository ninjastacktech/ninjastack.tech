import { CardBackgroundFlavor } from "../models/card.model";
import { DragCard } from "./Card";
import { BotCard } from "./cards-content/BotCard";
import { CoinVideoCard } from "./cards-content/CoinVideoCard";
import { PortfolioCard } from "./cards-content/PortfolioCard";
import { RoadmapCard } from "./cards-content/RoadmapCard";
import { TeamCard } from "./cards-content/TeamCard";

export default function CardsContainer() {
  return (
    <div className="flex flex-row h-[40rem] relative">
      <DragCard
        className="w-80 card"
        title="Sacred Ninja Oath"
        defaultPosition={{ x: 50, y: 150 }}
      >
        <div className="mb-4">
          Uncovered from the bowels of the infamous Ninja clan in Iga, a mountain-shrouded town near the ancient imperial capital of Kyoto, stands our pledge of high morality to act as modern public servants in the emerging Web3 world.          
        </div>

        <div className="mb-4">
          We hereby vow to enrich the ancient Bansenshukai with modern tools that will be of benefit to blockchain creators and developers alike.
        </div>
      </DragCard>

      <PortfolioCard></PortfolioCard>
      <BotCard></BotCard>
      <RoadmapCard></RoadmapCard>
      <TeamCard></TeamCard>

      <CoinVideoCard></CoinVideoCard>
    </div>
  );
}
