// Exercise #3: Uploading Progress
// ให้ Declare ตัว Variable ที่มีชื่อว่า uploadProgress
// ให้ Assign ตัว Value ของ uploadProgress โดยการเขียน Expression คำนวณหา Progress ของการ Upload File ออกมาเป็นเปอร์เซ็นต์ Notes
// ขนาดไฟล์ทั้งหมด 250000 Bytes
// Upload ไฟล์ไปแล้ว 30000 Bytes

let totalFileSize = 250000;
let uploadedSize = 30000;
let uploadProgress = (uploadedSize/totalFileSize) * 100;
console.log(uploadProgress);
// Start coding here
