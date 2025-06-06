// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { AbstractSummaryContent } from "./AbstractSummaryContent";
import type { AnimatedPresentationContent } from "./AnimatedPresentationContent";
import type { BlogPostContent } from "./BlogPostContent";
import type { ComparisonPageContent } from "./ComparisonPageContent";
import type { ConceptAlignmentContent } from "./ConceptAlignmentContent";
import type { ConceptExtractContent } from "./ConceptExtractContent";
import type { ConceptMapContent } from "./ConceptMapContent";
import type { IFrameEmbedContent } from "./IFrameEmbedContent";
import type { InteractivePlaygroundContent } from "./InteractivePlaygroundContent";
import type { LiveEmbedContent } from "./LiveEmbedContent";
import type { MathematicianNotesContent } from "./MathematicianNotesContent";
import type { PersonalNotesContent } from "./PersonalNotesContent";
import type { ResourcePanelContent } from "./ResourcePanelContent";
import type { ScientificPaperContent } from "./ScientificPaperContent";
import type { StaticPreviewContent } from "./StaticPreviewContent";
import type { StudyNotesContent } from "./StudyNotesContent";
import type { TextbookContent } from "./TextbookContent";
import type { TooltipSummaryContent } from "./TooltipSummaryContent";
import type { TransformationMappingContent } from "./TransformationMappingContent";
import type { TypeMappingDisplayContent } from "./TypeMappingDisplayContent";
import type { WikiPageContent } from "./WikiPageContent";

/**
 * Each variant represents a distinct document type with its own specialized structure and behavior
 */
export type MathDocumentType =
  | { "WikiPage": WikiPageContent }
  | { "Textbook": TextbookContent }
  | { "ScientificPaper": ScientificPaperContent }
  | { "PersonalNotes": PersonalNotesContent }
  | { "MathematicianNotes": MathematicianNotesContent }
  | { "StudyNotes": StudyNotesContent }
  | { "TooltipSummary": TooltipSummaryContent }
  | { "BlogPost": BlogPostContent }
  | { "AbstractSummary": AbstractSummaryContent }
  | { "ConceptMap": ConceptMapContent }
  | { "AnimatedPresentation": AnimatedPresentationContent }
  | { "InteractivePlayground": InteractivePlaygroundContent }
  | { "TypeMappingDisplay": TypeMappingDisplayContent }
  | { "ResourcePanel": ResourcePanelContent }
  | { "ComparisonPage": ComparisonPageContent }
  | { "TransformationMapping": TransformationMappingContent }
  | { "ConceptAlignment": ConceptAlignmentContent }
  | { "StaticPreview": StaticPreviewContent }
  | { "LiveEmbed": LiveEmbedContent }
  | { "ConceptExtract": ConceptExtractContent }
  | { "IFrameEmbed": IFrameEmbedContent };
