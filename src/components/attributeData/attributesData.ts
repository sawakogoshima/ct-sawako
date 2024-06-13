export interface AttributeRow {
  id: string;
  column_name: string;
  type: string;
}

export interface AttributesData {
  [type: string]: AttributeRow[];
}

export const attributesData: AttributesData = {
  Products: [
    {
      id: '1',
      column_name: 'Brand',
      type: 'Product',
    },
    {
      id: '2',
      column_name: 'Range',
      type: 'Product',
    },
    {
      id: '3',
      column_name: 'Supplier',
      type: 'Product',
    },
    {
      id: '4',
      column_name: 'Industries',
      type: 'Product',
    },
    {
      id: '5',
      column_name: 'Product_type',
      type: 'Product',
    },
    {
      id: '6',
      column_name: 'Colour_group',
      type: 'Product',
    },
    {
      id: '7',
      column_name: 'Colour',
      type: 'Product',
    },
    {
      id: '8',
      column_name: 'Length',
      type: 'Product',
    },
    {
      id: '9',
      column_name: 'Width',
      type: 'Product',
    },
    {
      id: '10',
      column_name: 'Height',
      type: 'Product',
    },
    {
      id: '11',
      column_name: 'Package_length',
      type: 'Product',
    },
    {
      id: '12',
      column_name: 'Package_width',
      type: 'Product',
    },
    {
      id: '13',
      column_name: 'Package_height',
      type: 'Product',
    },
    {
      id: '14',
      column_name: 'Weight',
      type: 'Product',
    },
    {
      id: '15',
      column_name: 'Sell',
      type: 'Product',
    },
    {
      id: '16',
      column_name: 'Buy',
      type: 'Product',
    },
    {
      id: '17',
      column_name: 'Gender',
      type: 'Product',
    },
    {
      id: '18',
      column_name: 'Materials',
      type: 'Product',
    },
    {
      id: '19',
      column_name: 'Certifications',
      type: 'Product',
    },
    {
      id: '20',
      column_name: 'Abrasiviness',
      type: 'Product',
    },
  ],
  Variants: [
    {
      id: '1',
      column_name: 'Brand_Variants',
      type: 'Variant',
    },
    {
      id: '2',
      column_name: 'Range_Variants',
      type: 'Variant',
    },
  ],
};
