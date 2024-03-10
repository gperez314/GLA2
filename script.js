// Name: GLA2
// Course Code: SODV1201
// Class: Software Development Diploma program
// Author: Glenn Perez

// ============================================================================================
// Import functions from module
import {
    SetDate,
    ShowProductsList
} from './function.js'

// Define variables
const quoteURL = 'https://fakestoreapi.com/products';
var productData = [];
let sortorder = document.querySelector('#sortOrder');
let filtercategory = document.querySelector('#categoryFilter');

// Set date on footer
SetDate();

// ============================================================================================
// 1. Create code to send request to get the data and show on the page.
// ============================================================================================
fetch(quoteURL) // Get data from API
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`); // Throw error if unsuccessfull
        }
        return response.json() // Parse JSON data as javascript object
    })
    .then(response => {
        productData = response; // store response in productData
        // Function to filter product data based on sort by price and filter by category dropdown
        ShowProductsList(productData, sortorder.value, filtercategory.value);
    })
    .catch(error => {
        console.log(error) // Log error on console
    });

// ============================================================================================
// 2. Add sort by price functionality, and user can sort by ascending or sort by descending).
// ============================================================================================
// Event listener to sort products based on price
sortorder.addEventListener('change', () => {
    ShowProductsList(productData, sortorder.value, filtercategory.value);
})


// ============================================================================================
// 3. Add filter functionality so that user can filter by category (men's clothing, jewelry, electronics, 
// women's clothing) in a drop-down menu.
// ============================================================================================
// Event listener to filter product data based on category
filtercategory.addEventListener('change', () => {
    ShowProductsList(productData, sortorder.value, filtercategory.value);
})