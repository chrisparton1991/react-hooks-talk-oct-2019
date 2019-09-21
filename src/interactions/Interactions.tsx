import Point from "../types/Point";
import MoveInteraction from "./MoveInteraction";
import NoopInteraction from "./NoopInteraction";

function buildMove(target: PIXI.DisplayObject, offset: Point) {
  return new MoveInteraction(target, offset);
}

function buildNoop() {
  return new NoopInteraction();
}

export const move = buildMove;
export const noop = buildNoop();
