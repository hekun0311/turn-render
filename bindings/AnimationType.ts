// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { Direction } from "./Direction";

export type AnimationType =
  | "FadeIn"
  | "FadeOut"
  | { "SlideIn": { direction: Direction } }
  | { "Highlight": { color: string } }
  | { "Morph": { target_shape: string } }
  | "TypewriteText"
  | { "CountUp": { target_value: number } }
  | { "Transform": { matrix: Array<number> } };
