import { CardBackgroundFlavor } from "../models/card.model";
import { DragCard } from "./Card";
import { BotCard } from "./cards-content/BotCard";
import { PortfolioCard } from "./cards-content/PortfolioCard";

export default function CardsContainer() {
  return (
    <div className="flex flex-row">
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

      {/* <DragCard
        className="w-80"
        backgroundFlavor={CardBackgroundFlavor.yellow}
        title="Our Projects"
        defaultPosition={{ x: 800, y: -20 }}
      >
        <div className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>

        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          turpis purus, consectetur consequat sem non, auctor scelerisque nisi.
        </div>
      </DragCard> */}

      <PortfolioCard></PortfolioCard>
      <BotCard></BotCard>
    </div>
  );
}
