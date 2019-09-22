import Point from "../types/Point";
import FadeInteraction from "./FadeInteraction";
import GroupInteraction from "./GroupInteraction";
import Interaction from "./Interaction";
import MoveInteraction from "./MoveInteraction";
import NoopInteraction from "./NoopInteraction";
import SequenceInteraction from "./SequenceInteraction";

function buildFade(target: PIXI.DisplayObject, offsetAlpha: number, durationMs: number) {
  return new FadeInteraction(target, offsetAlpha, durationMs);
}

function buildGroup(...interactions: Interaction[]) {
  return new GroupInteraction(...interactions);
}

function buildMove(target: PIXI.DisplayObject, offset: Point, durationMs: number) {
  return new MoveInteraction(target, offset, durationMs);
}

function buildNoop() {
  return new NoopInteraction();
}

function buildSequence(...interactions: Interaction[]) {
  return new SequenceInteraction(...interactions);
}

export const fade = buildFade;
export const group = buildGroup;
export const move = buildMove;
export const noop = buildNoop();
export const sequence = buildSequence;
