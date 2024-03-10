// Name: GLA2
// Course Code: SODV1201
// Class: Software Development Diploma program
// Author: Glenn Perez

// ============================================================================================
// Function to display date on footer
// ============================================================================================
function SetDate() {
  const now = new Date();
  // Constants to display month as text
  const m = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  document.querySelector('#date').textContent = m[now.getMonth()] + ' ' + now.getDate() + ', ' + now.getFullYear();
}

// ============================================================================================
// Function to filter product data based on sort by price and filter by category dropdown
// ============================================================================================
function ShowProductsList(data, sortMode, filterMode) {
  let productlist = FilterProducts(data, filterMode);
  sortProducts(productlist, sortMode);
  PopulateProducts( productlist);
}

// ============================================================================================
// Function to sort product data depending on price
// ============================================================================================
function sortProducts(data, mode) {
  if (mode == 'ascending') {
    // Sort product list in ascending order by price
    data.sort((a, b) => a.price - b.price)
  } else {
    // Sort product list in descending order by price
    data.sort((a, b) => b.price - a.price)
  }
}

// ============================================================================================
// Function to filter product data based on category
// ============================================================================================
function FilterProducts(data, mode) {
  let productData_Filtered = [];
  if (mode == 'all') {
    productData_Filtered = data;
  } else {
    productData_Filtered = data.filter(product => product.category == mode);
  }
  return productData_Filtered;
}

// ============================================================================================
// Function to populate products list on HTML page
// ============================================================================================
function PopulateProducts(products) {
  let containerEle = document.querySelector(".productContainer");
  // Reset HTML data
  containerEle.innerHTML = "";
  products.forEach((data) => {
    containerEle.innerHTML += `
      <div class="product">
      <h2 class="title">${data.title}</h2>
      <p class="category">Category: ${data.category}</p>
      <p class="rate">Rate: ${data.rating.rate} (${data.rating.count} reviews)</p>      
      <img class="product-image" src="${data.image}" alt="Product Image">
      <p class="description">${data.description}</p>
      <p class="price">$ ${data.price}</p>                
  </div>`
  })
}

// ============================================================================================
// Export the functions to the main main js code
// ============================================================================================
export {
  SetDate,
  ShowProductsList
}
// ============================================================================================