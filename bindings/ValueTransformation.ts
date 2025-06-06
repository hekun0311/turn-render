// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.

export type ValueTransformation =
  | { "Linear": { scale: number; offset: number } }
  | { "Logarithmic": { base: number } }
  | { "Exponential": { base: number } }
  | { "Custom": { formula: string } };
