import { animate } from "../utils/animate";
import Interaction from "./Interaction";

/**
 * Animates the opacity of a target object.
 */
class FadeInteraction implements Interaction {
  private readonly target: PIXI.DisplayObject;
  private readonly durationMs: number;
  private readonly alphaOffset: number;

  constructor(target: PIXI.DisplayObject, alphaOffset: number, durationMs: number = 1000) {
    this.target = target;
    this.durationMs = durationMs;
    this.alphaOffset = alphaOffset;
  }

  async apply(reverse: boolean, immediate: boolean) {
    const from = this.target.alpha;
    const to = reverse ? (from - this.alphaOffset) : (from + this.alphaOffset);

    await animate(immediate ? 0.00001 : this.durationMs, progress => {
      this.target.alpha = from + (to - from) * progress;
    });
  }
}


export default FadeInteraction;
