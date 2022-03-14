export interface Metadata {
  readonly id: string;
  readonly source: string;
  readonly sourceName?: string;
  readonly sourcePath?: string;
  readonly relSourcePath?: string;
  readonly relProjectPath?: string;
  readonly modelType: string;
  readonly modelName: string;
  readonly modelLabel: string;
  readonly urlPath?: string;
}
