// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { AnimationTriggerType } from "./AnimationTriggerType";
import type { MathDocument } from "./MathDocument";
import type { MathNode } from "./MathNode";

/**
 * Defines various targets a link can point to, enabling rich interactivity.
 */
export type LinkTarget =
  | { "Url": string }
  | { "InternalPageId": string }
  | { "DefinitionId": { term_id: string; theory_context: string | null } }
  | {
    "DefinitionAspect": {
      term_id: string;
      aspect_id: string;
      theory_context: string | null;
    };
  }
  | { "TheoremId": string }
  | {
    "ObjectConstructorTemplate": {
      template_id: string;
      /**
       * Pre-filled parameters for the template, MathNode can represent concrete values or variables.
       */
      parameters: Array<[string, MathNode]>;
      /**
       * Indicates the desired abstraction level (L1-L4) for the constructed object.
       */
      target_abstraction_level: number | null;
    };
  }
  | { "GlossaryTerm": string }
  | { "BibliographyKey": string }
  | { "InteractiveElementId": string }
  | { "TooltipDocument": MathDocument }
  | {
    "AnimationTrigger": {
      animation_id: string;
      trigger_type: AnimationTriggerType;
    };
  };
