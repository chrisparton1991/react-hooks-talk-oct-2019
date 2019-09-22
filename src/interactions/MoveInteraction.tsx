import Point from "../types/Point";
import { animate } from "../utils/animate";
import Interaction from "./Interaction";

/**
 * Animates the position of a target object by a fixed offset.
 */
class MoveInteraction implements Interaction {
  private readonly target: PIXI.DisplayObject;
  private readonly durationMs: number;
  private readonly offset: Point;

  constructor(target: PIXI.DisplayObject, offset: Point, durationMs: number) {
    this.target = target;
    this.durationMs = durationMs;
    this.offset = offset;
  }

  async apply(reverse: boolean, immediate: boolean) {
    const from = {x: this.target.position.x, y: this.target.position.y};
    const to = reverse ?
      {x: from.x - this.offset.x, y: from.y - this.offset.y} :
      {x: from.x + this.offset.x, y: from.y + this.offset.y};

    await animate(immediate ? 0.00001 : this.durationMs, progress => {
      this.target.position.x = from.x + (to.x - from.x) * progress;
      this.target.position.y = from.y + (to.y - from.y) * progress;
    });
  }
}


export default MoveInteraction;
