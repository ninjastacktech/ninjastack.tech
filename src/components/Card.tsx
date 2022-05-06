import * as React from "react";
import { ReactNode, useRef } from "react";
import Draggable from "react-draggable";
import { CardBackgroundFlavor } from "../models/card.model";
import { useMediaQuery } from "usehooks-ts";

export interface IDragCardProps {
  backgroundFlavor?: CardBackgroundFlavor;
  className?: string;
  children: ReactNode;
  title?: string;
  defaultPosition?: { x: number; y: number };
  noPadding?: boolean;
}

export function DragCard({
  backgroundFlavor = CardBackgroundFlavor.white,
  children,
  className,
  title,
  defaultPosition,
  noPadding,
}: IDragCardProps) {
  const nodeRef = useRef(null);
  const matchesMd = useMediaQuery("(min-width: 768px)");

  return (
    <Draggable
      nodeRef={nodeRef}
      defaultPosition={matchesMd ? defaultPosition : { x: 0, y: 0 }}
      position={matchesMd ? undefined : { x: 0, y: 0 }}
      disabled={!matchesMd}
    >
      <div
        ref={nodeRef}
        className={
          backgroundFlavor +
          " " +
          className +
          " box shadow-lg mx-4 my-2 md:absolute " +
          (noPadding ? "" : "p-4")
        }
      >
        {title && <h4 className="font-medium mb-4 md:cursor-move">{title}</h4>}
        {children}
      </div>
    </Draggable>
  );
}
