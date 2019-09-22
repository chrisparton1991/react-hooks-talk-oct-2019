interface Interaction {

  apply(reverse: boolean, immediate: boolean): Promise<void>;
}

export default Interaction;
