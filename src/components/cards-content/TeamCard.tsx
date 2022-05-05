import * as React from "react";
import { CardBackgroundFlavor } from "../../models/card.model";
import { DragCard } from "../Card";

export interface ITeamCardProps {}

export function TeamCard(props: ITeamCardProps) {
  return (
    <DragCard
      className="w-80"
      title="Team"
      backgroundFlavor={CardBackgroundFlavor.gray}
      defaultPosition={{ x: -850, y: 400 }}
    >
      <div className="mb-4">Who we are</div>

      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque turpis
        purus, consectetur consequat sem non, auctor scelerisque nisi.
      </div>
    </DragCard>
  );
}
