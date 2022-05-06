import { CardBackgroundFlavor } from "../models/card.model";
import { DragCard } from "./Card";
import { BotCard } from "./cards-content/BotCard";
import { CoinVideoCard } from "./cards-content/CoinVideoCard";
import { OathCard } from "./cards-content/OathCard";
import { PortfolioCard } from "./cards-content/PortfolioCard";
import { RoadmapCard } from "./cards-content/RoadmapCard";
import { TeamCard } from "./cards-content/TeamCard";

export default function CardsContainer() {
  return (
    <div className="relative flex flex-col md:flex-row md:h-[40rem] md:w-full">
      <OathCard></OathCard>

      <PortfolioCard></PortfolioCard>
      <BotCard></BotCard>
      <RoadmapCard></RoadmapCard>
      <TeamCard></TeamCard>

      <CoinVideoCard></CoinVideoCard>
    </div>
  );
}
