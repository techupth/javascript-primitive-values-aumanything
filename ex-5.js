//Exercise #5: Shopping and Discount
// ให้ Declare ตัว Variable เพื่อเก็บข้อมูลดังต่อไปนี้ (รวมทั้งหมด 3 Variables)
// Variable ที่เก็บราคาสินค้าทั้งหมดเป็น 27000 บาท
// Variable ที่เก็บส่วนลด 25% โดยให้มี Value เป็นสูตรการคำนวนหาว่าส่วนลดคิดเป็นจำนวนเงินกี่บาท
// Variable ที่เก็บราคาที่ต้องจ่ายจริงหลังหักส่วนลด
// Start coding here
let totalPrice = 27000;
let discount = (totalPrice * 0.25);
let netPrice = (totalPrice - discount); 
console.log(netPrice);