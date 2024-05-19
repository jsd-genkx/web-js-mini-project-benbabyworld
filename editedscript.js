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


/// 2nd edition after feedback: ข้อนี้ผมสร้าง array ของ new inventory แล้วเช็คว่าถ้า input ไม่ตรงกับ find() ก็แจ้งเตือน ครับ 
// สามารถใช้ parameter m เป็น input ได้เลยครับ ถ้าเป็นสินค้าที่สะกดถูกตาม productName ก็จะแสดงว่าได้เติมของเเล้วครับ
let Newinventory = [
    { productId: 4, productName: "Strawberry" , category: 1, price: null, stock: 10 },
    { productId: 5, productName: "Apple Juice", category: 2, price: 39, stock: 90 },
    { productId: 6, productName: "Coke", category: 2, price: 9.5, stock: 4 }
];

let addProduct = function add(m) {
    let find = Newinventory.find(p => p.productName.toLowerCase() === m.toLowerCase())
    if (!find) {
        console.log("Incorrect input! Try again.");
    }
    else if (find.productId !== null && find.productName !== null && find.category !== null && find.price !== null && find.stock !== null)
        { inventory.push(find)
        console.log(`The product added is ${find.productName}.`);
        console.log(inventory);
    } 
}
addProduct("coke")
addProduct("apple juice")



//3. Finding a Product

// edited after feedback

/* ผมใช้ toLowercase() + toUppercase มาทำให้ input เป็นเหมือนกันแล้วหาสินค้า */

/// 2nd edition after feedback: console log ให้มีความหมายขึ้นมานิดนึงแล้วครับ 555

function find(m) {
    let check =inventory.find(p => p.productName.toLowerCase() === m.toLowerCase())
    console.log(check);
    if (!check) {
        console.log("Incorrect product name!");
    } else {
    }console.log(`The product is ${check.productName}. The price is $${check.price}. ${check.stock} items left in stock`);
}
find("banana")




//4. Updating Stock

//edited after feedback 
/* ผมใช้ input parameter 2 ตัวคือชื่อสินค้าที่หาและจำนวนที่อยากเพิ่มครับ */


/// 2nd edition after feedback: ข้อนี้ผมเช็คสองอย่างคือ type ของ amount ให้เป็นตัวเลข และ amount ต้องมากกว่า 0 กับ การสะกดคำของ inputName ครับ 

function updateProduct(inputName, amount) {
    let look = inventory.find(p => p.productName.toLowerCase() === inputName.toLowerCase())
    if (typeof amount !== 'number' || amount <= 0 || !look) {
        console.log("Incorrect name or amount! The amount must be only positive number!");
    } else {
        look.stock += amount;
        console.log(look);
    }
}
updateProduct("banana", 3)

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

