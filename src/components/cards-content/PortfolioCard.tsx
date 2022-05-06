import { Carousel } from "react-responsive-carousel";
import { DragCard } from "../Card";
import pixelFucker3 from "../../images/ninja/pixels/ninja-pixel-collection-1.3.png";
import pixelFucker4 from "../../images/ninja/pixels/ninja-pixel-collection-1.4.png";

export interface IPortfolioCardProps {}

export function PortfolioCard(props: IPortfolioCardProps) {
  return (
    <DragCard
      className="md:w-64 text-center"
      title="Open source tools"
      defaultPosition={{ x: 1200, y: 200 }}
    >
      <Carousel className="ninjaCarousel" infiniteLoop={true} showThumbs={false} autoPlay={true}>
        <div>
          <img src={pixelFucker3}/>
          <p className="cursor-pointer font-large font-bold mt-4 mb-8 flex justify-center p-1">Portfolio</p>
        </div>
        <div>
          <img src={pixelFucker4} />
          <p className="cursor-pointer font-large font-bold mt-4 mb-8 flex justify-center p-1">Socket</p>
        </div>
      </Carousel>
    </DragCard>
  );
}
