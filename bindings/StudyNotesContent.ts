// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { ContentMetadata } from "./ContentMetadata";
import type { CourseLevel } from "./CourseLevel";
import type { DocumentRelationships } from "./DocumentRelationships";
import type { DocumentStructure } from "./DocumentStructure";

export type StudyNotesContent = {
  title: string;
  subject: string;
  study_level: CourseLevel;
  exam_prep: boolean;
  content_metadata: ContentMetadata;
  structure: DocumentStructure;
  relationships: DocumentRelationships;
};
