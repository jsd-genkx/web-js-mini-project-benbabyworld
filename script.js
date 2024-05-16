// **1. Inventory and category Initialization: provided**<br>

let categories = [
    { categoryId: 1, categoryName: "Fruits" },
    { categoryId: 2, categoryName: "Beverages" }
];

let inventory = [
    { productId: 1, productName: null , category: 1, price: 0.99, stock: 150 },
    { productId: 2, productName: "Orange Juice", category: 2, price: 3.49, stock: 40 },
    { productId: 3, productName: "Juice", category: 2, price: 5.5, stock: -14 }
];

// **2. Adding a Product** <br>
//        Error handling with validation by showing log error message <br>
//         _if the product object has all required properties_<br>

//         _if the product ID is unique to prevent duplicates *optional*_ <br></br>


inventory.forEach((product) => {
    if (product.productId || product.productName || product.category || product.price || product.stock == null)
    {   let findNull = inventory.find(product => product.productId || product.productName || product.category || product.price || product.stock == null)
        let errMessage = "A property is missing! Check which is empty >" + 
        " Product ID: " + findNull.productId +
        " | Product Name: " + findNull.productName +
        " | Category: " + findNull.category +
        " | Price: " + findNull.price +
        " | Stock: " + findNull.stock;
        console.log(errMessage); 
    }     
})
// **3. Finding a Product** <br>
//        Error handling if the product doesn't exist in the inventory by showing log error message<br></br>

function finding(n) {
    let foundNote = inventory.find(p => p.productId === n )
    console.log(foundNote);
    if (foundNote == undefined) {
        console.log("The product is not found!");
    }else if (foundNote.productId === n) {
        console.log("Your product is " + foundNote.productName);
    } 
}
finding(3)



// **4. Updating Stock** <br>
//        Error handling with validation such as 
// 'enter the wrong product_id' or 'update stock < 0 by showing log error message' <br></br>


function idStock(n) {
    let findId = inventory.find(p => p.productId === n )
    if (findId == undefined) {
        console.log("The product is not found!");
    }else if (findId.stock < 0) {
        console.log("Your product is " + findId.productName + " and out of stock! with the amount of: " + findId.stock);
    } else if (findId.productId === n) {
        console.log("Your product is " + findId.productName);
    }
}

idStock(3)



// **5. Deleting Product**<br>
//        Confirm message when successful deleted


const del  = inventory.filter(p => p.stock > 0)
console.log(del);
console.log("You have removed the products that is out of stock successfully!");