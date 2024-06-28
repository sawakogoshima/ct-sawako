export type ProductAttrsData = string[];

export type CategoryAttrsData = string[];

export type VariantAttrsData = string[];

export type ProductCategoryMappingImportData = string[];

export interface ImportData {
  import_id: number;
  sheet_id: number;
  sheet_name: string;
  row_number: number;
  total_rows: number;
  env_name: string;
  row_data?:
    | ProductAttrsData
    | CategoryAttrsData
    | VariantAttrsData
    | ProductCategoryMappingImportData;
  custom_fields: {
    user_id: string;
    team_id: string;
  };
}
