// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.

export type UserAction =
  | "Click"
  | "Hover"
  | { "KeyPress": { key: string } }
  | "TextInput"
  | "SliderAdjust"
  | { "Selection": { from_options: Array<string> } };
