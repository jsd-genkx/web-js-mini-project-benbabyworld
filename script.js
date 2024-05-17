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

/*-----------------------------------------------------------------------*/

// **2. Adding a Product** <br>
//        Error handling with validation by showing log error message <br>
//         _if the product object has all required properties_<br>

//         _if the product ID is unique to prevent duplicates *optional*_ <br></br>

// ผมทำโจทย์นี้ครับ _if the product object has all required properties_<br> 
// 1. เข้าใจว่าโจทย์ต้องการให้ log ข้อความหากสินค้ามี properties ไม่ครบ 
// 2. เปลี่ยน item ที่ 1 ใน inventory ในเป็น productName: null สมมติว่าสินค้าชิ้นนึง ไม่มีชื่อ

inventory.forEach((product) => {
    if (product.productId || product.productName || product.category || product.price || product.stock === null)
// 3. สร้างฟังก์ชัน ถ้า forEach() หาว่าชิ้นไหนมี null ใน log message 
    {   let findNull = inventory.find(product => product.productId || product.productName || product.category || product.price || product.stock == null)
// 4. ใช้ find() เพื่อหา item ที่มี null มา log ใน message ครับ
        let errMessage = "A property is missing! Check which is empty >" + 
        " Product ID: " + findNull.productId +
        " | Product Name: " + findNull.productName +
        " | Category: " + findNull.category +
        " | Price: " + findNull.price +
        " | Stock: " + findNull.stock;
        console.log(errMessage); 
    }     
})


/*-----------------------------------------------------------------------*/


// **3. Finding a Product** <br>
//        Error handling if the product doesn't exist in the inventory by showing log error message<br></br>

// เข้าใจโจทย์ว่า: ถ้าไม่เจอของให้เเสดงข้อความเตือน

//1. สร้างฟังก์ชั่น finding ให้สามารถ input ค่า productID อะไรก็ได้แล้วให้ log ออกมาว่า เจอหรือไม่เจอ
function finding(n) {
    let foundNote = inventory.find(p => p.productId === n )
//2. ใช่ find() หาว่ามี productID ที่ n ไหม เก็บไว้ใน foundNote
    if (foundNote === undefined) {
//3. ถ้าใส่ค่า n ที่ไม่เจอ (เดาว่าน่าจะเป็น undefined ครับ) log แบบแถวที่ 46 ครับ
        console.log("The product is not found!");
    }else if (foundNote.productId === n) {
//4. ถ้า n ที่เจอจะเอา productName มาแดสงแบบแถวที่ 49 ครับ
        console.log("Your product is " + foundNote.productName);
    } 
}
finding(4)   // 5. ใส่ค่า n ครับ

/*-----------------------------------------------------------------------*/

// **4. Updating Stock** <br>
//        Error handling with validation such as 
// 'enter the wrong product_id' or 'update stock < 0 by showing log error message' <br></br>
// เข้าใจโจทย์ว่าให้แสดงข้อความเตือนถ้า ใส่ id ผิด หรือ สินค้าในสต็อคขาดไป หรือ < 0 (ผมก็เลยไปใส่ในสินค้าที่ 3 ว่า ขาดไป 14 ชิ้น (-14))
// { productId: 3 .... stock: -14 }

function idStock(n) {
// 1. สร่างฟังก์ชั่น เพื่อหา productID ที่เท่ากับค่าที่จะใส่ (เหมือนข้อด้านบนเลยครับ)
    let findId = inventory.find(p => p.productId === n )
    if (findId == undefined) {
// 2. ถ้าไม่เจอ ให้ log ออกมาแบบด้านล่างเลยครับ
        console.log("The product is not found!");
    }else if (findId.stock < 0) {
//3. หรือถ้า "เจอ" แต่ สินค้าใน stock มันขาดไป ก็ให้เเสดงข้อความด้านล่างครับ 
        console.log("Your product is " + findId.productName + " and out of stock! with the amount of: " + findId.stock);
    } else if (findId.productId === n) {
//4. สุดท้าย ถ้าเจอและสินค้าไม่ขาด ก็ให้ log ว่าเจอแบบด้านล้างครับ
        console.log("Your product is " + findId.productName);
    }
}

idStock(3) //5. ใส่ productID ครับ


/*-----------------------------------------------------------------------*/

// **5. Deleting Product**<br>
//        Confirm message when successful deleted
// เข้าใจโจทย์ว่า : ให้แสดงข้อความว่าสิน้คาถูกลบออกจาก inventory แล้ว ซึ่งผมจะลบสินค้าที่ขาดในสต็อคออก

const del  = inventory.filter(p => p.stock > 0)
//1. ให้ del เป็น array ที่โดน filter() ว่าถ้าสินค้ายังมีในสต็อคก็ให้อยู่ ส่วนสินค้าที่ขาด ให้เอาออกจาก inventory
console.log(del);
//2. log del ออกมาจะเป็น array ของสินค้าที่ยังมีในสต็อค แล้ว log ข้แความข้างล่าง
console.log("You have removed the products that is out of stock successfully!");