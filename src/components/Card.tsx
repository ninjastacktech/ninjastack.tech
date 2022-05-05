import * as React from "react";
import { ReactNode, useRef } from "react";
import Draggable from "react-draggable";
import { CardBackgroundFlavor } from "../models/card.model";

export interface IDragCardProps {
  backgroundFlavor?: CardBackgroundFlavor;
  className?: string;
  children: ReactNode;
}

export function DragCard({
  backgroundFlavor = CardBackgroundFlavor.white,
  children,
  className,
}: IDragCardProps) {
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef}>
      <div
        ref={nodeRef}
        className={backgroundFlavor + " " + className + " box"}
      >
        {children}
      </div>
    </Draggable>
  );
}
