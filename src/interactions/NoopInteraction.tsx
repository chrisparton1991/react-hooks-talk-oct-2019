import Interaction from "./Interaction";

/**
 * A default interaction that does nothing. This is used as a default value instead of needing lots of null checks.
 */
class NoopInteraction implements Interaction {
  apply(reverse: boolean) {
    return Promise.resolve();
  }
}

export default NoopInteraction;
