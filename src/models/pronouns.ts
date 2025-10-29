type PronounSet =
  | 'he/him'
  | 'she/her'
  | 'they/them'
  | 'xe/xem'
  | 'ze/zir'
  | 'ze/hir'
  | 'ey/em'
  | 'fae/faer'
  | 'it/its'
  | 'any'
  | 'custom';



type Pronouns = {
  primary: PronounSet;
  secondary?: PronounSet;
  custom?: CustomPronouns;
  displayFormat: 'primary' | 'both' | 'all';
  respectPreference: 'strict' | 'flexible'; // How strictly to enforce pronoun usage
}

type CustomPronouns = {
  subjective: string; // he, she, they, xe, etc.
  objective: string; // him, her, them, xem, etc.
  possessive: string; // his, her, their, xyr, etc.
  possessivePronoun: string; // his, hers, theirs, xyrs, etc.
  reflexive: string; // himself, herself, themself, xemself, etc.
}

export type {
  Pronouns,
  PronounSet,
  CustomPronouns
}
