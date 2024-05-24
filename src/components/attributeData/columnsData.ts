export interface ProductData {
  Brand?: string;
  Range?: string;
  Supplier?: string;
  Industries?: string;
  Product_type?: string;
  Colour_group?: string;
  Colour?: string;
  Length?: string;
  Width?: string;
  Height?: string;
  Package_length?: string;
  Package_width?: string;
  Package_height?: string;
  Weight?: string;
  Sell?: string;
  Buy?: string;
  Gender?: string;
  Materials?: string;
  Certifications?: string;
  Abrasiviness?: string;
}

export interface VariantData {
  Brand_Variants?: string;
  Range_Variants?: string;
}

export interface ImportData {
  import_id: number;
  sheet_id: number;
  sheet_name: string;
  row_number: number;
  total_rows: number;
  env_name: string;
  row_data?: ProductData | VariantData;
  custom_fields: {
    user_id: string;
    team_id: string;
  };
}
