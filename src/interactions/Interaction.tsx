interface Interaction {

  apply(reverse: boolean): Promise<void>;
}

export default Interaction;
