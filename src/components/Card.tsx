import * as React from "react";
import { ReactNode, useRef } from "react";
import Draggable from "react-draggable";
import { CardBackgroundFlavor } from "../models/card.model";

export interface IDragCardProps {
  backgroundFlavor?: CardBackgroundFlavor;
  className?: string;
  children: ReactNode;
  title?: string;
  defaultPosition?: { x: number; y: number };
}

export function DragCard({
  backgroundFlavor = CardBackgroundFlavor.white,
  children,
  className,
  title,
  defaultPosition,
}: IDragCardProps) {
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef} defaultPosition={defaultPosition}>
      <div
        ref={nodeRef}
        className={backgroundFlavor + " " + className + " box shadow-lg bg-opacity-80"}
      >
        {title && <h4 className="font-medium mb-4 cursor-move">{title}</h4>}
        {children}
      </div>
    </Draggable>
  );
}
