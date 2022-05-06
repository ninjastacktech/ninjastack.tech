import * as React from "react";
import { DragCard } from "../Card";

export interface IOathCardProps {}

export function OathCard(props: IOathCardProps) {
  return (
    <DragCard
      className="md:w-80 card"
      title="Sacred Ninja Oath"
      defaultPosition={{ x: 50, y: 150 }}
    >
      <div className="mb-4 pr-5 overflow-y-auto h-40">
        <p className="mb-4">
          Uncovered from the depths of the infamous ninja clan in Iga, a
          mountain-shrouded town near the ancient imperial capital of Kyoto,
          stands our pledge of high morality to act as modern public servants in
          the emerging Web3 world.{" "}
        </p>
        <p>
          We hereby vow to enrich the ancient Bansenshukai with modern tools
          that will be of benefit to blockchain creators and developers alike.
        </p>
      </div>
    </DragCard>
  );
}
