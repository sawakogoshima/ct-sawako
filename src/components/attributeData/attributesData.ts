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
      type: 'Products',
    },
    {
      id: '2',
      column_name: 'Range',
      type: 'Products',
    },
    {
      id: '3',
      column_name: 'Supplier',
      type: 'Products',
    },
    {
      id: '4',
      column_name: 'Industries',
      type: 'Products',
    },
    {
      id: '5',
      column_name: 'Product_type',
      type: 'Products',
    },
    {
      id: '6',
      column_name: 'Colour_group',
      type: 'Products',
    },
    {
      id: '7',
      column_name: 'Colour',
      type: 'Products',
    },
    {
      id: '8',
      column_name: 'Length',
      type: 'Products',
    },
    {
      id: '9',
      column_name: 'Width',
      type: 'Products',
    },
    {
      id: '10',
      column_name: 'Height',
      type: 'Products',
    },
    {
      id: '11',
      column_name: 'Package_length',
      type: 'Products',
    },
    {
      id: '12',
      column_name: 'Package_width',
      type: 'Products',
    },
    {
      id: '13',
      column_name: 'Package_height',
      type: 'Products',
    },
    {
      id: '14',
      column_name: 'Weight',
      type: 'Products',
    },
    {
      id: '15',
      column_name: 'Sell',
      type: 'Products',
    },
    {
      id: '16',
      column_name: 'Buy',
      type: 'Products',
    },
    {
      id: '17',
      column_name: 'Gender',
      type: 'Products',
    },
    {
      id: '18',
      column_name: 'Materials',
      type: 'Products',
    },
    {
      id: '19',
      column_name: 'Certifications',
      type: 'Products',
    },
    {
      id: '20',
      column_name: 'Abrasiviness',
      type: 'Products',
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
