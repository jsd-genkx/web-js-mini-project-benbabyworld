let categories = [
    { categoryId: 1, categoryName: "Fruits" },
    { categoryId: 2, categoryName: "Beverages" }
];

let inventory = [
    { productId: 1, productName: "Banana" , category: 1, price: 0.99, stock: 150 },
    { productId: 2, productName: "Orange Juice", category: 2, price: 3.49, stock: 40 },
    { productId: 3, productName: "Juice", category: 2, price: 5.5, stock: -14 }
];

// edited code after feedback


// 2. Adding a Product

/* ผมเปลี่ยนมาเป็นเช็คสินค้าถ้าเป็น null ให้ขึ้นเตือน แต่ถ้าไม่ ให้ใช้ .push ครับ  */ 

const newProduct = { productId: 4, productName: "Milk", category: 2, price: 6, stock: 45 }
let addProduct = function add() {
    if (newProduct.productId || newProduct.productName || newProduct.category || newProduct.price || newProduct.stock !== null) {
        inventory.push(newProduct)
        console.log(inventory);
    } else {
        console.log("error");
    }
}
addProduct()



//3. Finding a Product

// edited after feedback

/* ผมใช้ toLowercase() + toUppercase มาทำให้ input เป็นเหมือนกันแล้วหาสินค้า */
function find(m) {
    let check =inventory.find(p => p.productName.toLowerCase() === m.toLowerCase())
    if (check === undefined) {
        console.log("The product is not found!");
    } else {
        console.log(check);
    }
}
find("milk")

//4. Updating Stock

//edited after feedback 
/* ผมใช้ input parameter 2 ตัวคือชื่อสินค้าที่หาและจำนวนที่อยากเพิ่มครับ */

function updateProduct(inputName, amount) {
    let look =inventory.find(p => p.productName.toLowerCase() === inputName.toLowerCase())
    if (look === undefined) {
        console.log("The product is not found!");
    } else {
        look.stock += amount;
        console.log(look);
    }
}
updateProduct("milk", 2)

//5. Deleting Product

/* ข้อนี้ยากนิดนึงครับ ผมจะใช้ splice ครับ ยากตรงหา index ของสินค้าที่เจอ ก็เลยไปเจอ find(Index) ครับถึงจะ ได้ค่า index มา splice สินค้าออกครับ*/

function removeProduct(m) {
    let removed = inventory.find(p => p.productName.toLowerCase() === m.toLowerCase())
    if (removed === undefined) {
        console.log("The product is not found!");
    } else {
        console.log(removed);
        let index = inventory.findIndex(p => p.productName.toLowerCase() === m.toLowerCase());
        inventory.splice(index,1)
        console.log(removed.productName + " has been removed from stock!");
        console.log(inventory);
}
}
removeProduct("milk");


