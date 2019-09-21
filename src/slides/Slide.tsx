import * as PIXI from "pixi.js";
import ElementBuilder from "../elements/ElementBuilder";
import Interaction from "../interactions/Interaction";
import SlideDeck from "../slideDesk/SlideDeck";

abstract class Slide {
  protected deck: SlideDeck;
  protected container: PIXI.Container = new PIXI.Container();
  protected build: ElementBuilder;
  public steps: Interaction[] = [];

  protected constructor(deck: SlideDeck) {
    this.deck = deck;
    this.build = this.deck.elementBuilder;
  }

  public show() {
    this.deck.canvas.addChild(this.container);
    this.onEnter();
  }

  public hide() {
    this.onExit();
    this.deck.canvas.removeChild(this.container);
  }

  protected abstract onEnter(): void;
  protected abstract onExit(): void;

  protected add(...objects: PIXI.DisplayObject[]) {
    objects.forEach(object => this.container.addChild(object));
  }
}

export default Slide;
