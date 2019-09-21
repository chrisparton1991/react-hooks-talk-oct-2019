import Interaction from "./Interaction";

/**
 * Runs multiple interactions concurrently.
 */
class GroupInteraction implements Interaction {
  private readonly interactions: Interaction[];

  constructor(...interactions: Interaction[]) {
    this.interactions = interactions;
  }

  async apply(reverse: boolean) {
    await Promise.all(this.interactions.map(i => i.apply(reverse)));
  }
}

export default GroupInteraction;
