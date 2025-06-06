// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { ControlBinding } from "./ControlBinding";
import type { FilterOption } from "./FilterOption";
import type { InteractionSystem } from "./InteractionSystem";
import type { ResourceCategory } from "./ResourceCategory";
import type { SearchCapabilities } from "./SearchCapabilities";
import type { Section } from "./Section";

export type ResourcePanelContent = {
  title: string;
  resource_categories: Array<ResourceCategory>;
  search_capabilities: SearchCapabilities;
  filtering_options: Array<FilterOption>;
  base_content: Array<Section>;
  interaction_system: InteractionSystem;
  control_bindings: Array<ControlBinding>;
};
