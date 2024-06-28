import { BASE_API_URL } from '../../apiConfig';

export interface AttributeRow {
  column_name: string;
}

export interface AttributesData {
  [type: string]: AttributeRow[];
}

export let attributesData: AttributesData = {};

async function fetchAndUpdateAttributesData() {
  try {
    // Fetch ProductAttrs data
    const productAttrsResponse = await fetch(
      `${BASE_API_URL}/product-attributes`
    );
    if (!productAttrsResponse.ok) {
      throw new Error(`HTTP error! status: ${productAttrsResponse.status}`);
    }
    const productAttrsData = await productAttrsResponse.json();
    console.log('productAttrsData', productAttrsData);

    // Fetch variantAttrs data
    const variantAttrsResponse = await fetch(
      `${BASE_API_URL}/product-variant/attributes`
    );
    const variantAttrsData = await variantAttrsResponse.json();
    console.log('variantAttrsData', variantAttrsData);

    // Fetch categoryAttrs data
    // const categoryAttrsResponse = await fetch(
    //   `${BASE_API_URL}/category-attributes`
    // );
    // const categoryAttrsData = await categoryAttrsResponse.json();

    // Fetch productCategoryMappingImport data
    // const productCategoryMappingImportResponse = await fetch(
    //   `${BASE_API_URL}/`
    // );
    // const productCategoryMappingImportData =
    //   await productCategoryMappingImportResponse.json();

    // Update attributesData
    attributesData = {
      products_import: productAttrsData.map((row: string) => ({
        column_name: row,
      })),

      variants_import: variantAttrsData.map((row: string) => ({
        column_name: row,
      })),

      categories_import: [
        { column_name: 'categories' },
        { column_name: 'categories2' },
      ],

      product_category_mapping_import: [
        { column_name: 'category_mapping_import' },
        { column_name: 'category_mapping_import2' },
      ],

      // categories_import: categoryAttrsData.map((row: string) => ({
      //   column_name: row,
      // })),

      // product_category_mapping_import: productCategoryMappingImportData.map(
      //   (row: string) => ({
      //     column_name: row,
      //   })
      // ),
    };

    attributesData = Object.keys(attributesData).reduce((acc, key) => {
      const newKey = key.replace(/_/g, ' ');
      acc[newKey] = attributesData[key];
      return acc;
    }, {} as { [key: string]: AttributeRow[] });
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
}

fetchAndUpdateAttributesData();

console.log('AttributesData', attributesData);
