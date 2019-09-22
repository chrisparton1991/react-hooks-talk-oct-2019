import Interaction from "./Interaction";

/**
 * Runs multiple interactions sequentially.
 */
class SequenceInteraction implements Interaction {
  private readonly interactions: Interaction[];

  constructor(...interactions: Interaction[]) {
    this.interactions = interactions;
  }

  async apply(reverse: boolean, immediate: boolean) {
    const interactions = reverse ? [...this.interactions].reverse() : this.interactions;

    for (const interaction of interactions) {
      await interaction.apply(reverse, immediate);
    }
  }
}

export default SequenceInteraction;
