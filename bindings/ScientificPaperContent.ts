// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { AcademicMetadata } from "./AcademicMetadata";
import type { ContentMetadata } from "./ContentMetadata";
import type { DocumentRelationships } from "./DocumentRelationships";
import type { DocumentStructure } from "./DocumentStructure";
import type { PaperType } from "./PaperType";

export type ScientificPaperContent = {
  title: string;
  paper_type: PaperType;
  venue: string | null;
  peer_reviewed: boolean;
  content_metadata: ContentMetadata;
  academic_metadata: AcademicMetadata;
  structure: DocumentStructure;
  relationships: DocumentRelationships;
};
