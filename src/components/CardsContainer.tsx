import { CardBackgroundFlavor } from "../models/card.model";
import { DragCard } from "./Card";
import { BotCard } from "./cards-content/BotCard";
import { CoinVideoCard } from "./cards-content/CoinVideoCard";
import { PortfolioCard } from "./cards-content/PortfolioCard";
import { RoadmapCard } from "./cards-content/RoadmapCard";
import { TeamCard } from "./cards-content/TeamCard";

export default function CardsContainer() {
  return (
    <div className="flex flex-row h-[40rem]">
      <DragCard
        className="w-80"
        title="Our Mission"
        defaultPosition={{ x: 100, y: 20 }}
      >
        <div className="mb-4">
          We want to create tools for blockchain creators and developers
        </div>

        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          turpis purus, consectetur consequat sem non, auctor scelerisque nisi.
          Praesent a nisl ac ipsum efficitur rutrum. Mauris iaculis vestibulum
          velit sit amet bibendum. Vivamus enim sem, condimentum ac magna quis,
          placerat lobortis nisi. Proin quis ipsum velit. Nunc et vehicula
          lectus, nec aliquam ante.{" "}
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
