import * as React from "react";
import { DragCard } from "../Card";

export interface IRoadmapCardProps {}

export function RoadmapCard(props: IRoadmapCardProps) {
  return (
    <DragCard
      className="w-80"
      title="Roadmap"
      defaultPosition={{ x: 1000, y: -20 }}
    >
      <div className="mb-4">We're gonna do lots of cool stuff</div>

      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque turpis
        purus, consectetur consequat sem non, auctor scelerisque nisi.
      </div>
    </DragCard>
  );
}
