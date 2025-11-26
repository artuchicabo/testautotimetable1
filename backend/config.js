const admin = require("firebase-admin");
const serviceAccount = require("D:/autotable/backend/autotimetabelai.json");
const fs = require("fs");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://autotimetabelai-default-rtdb.asia-southeast1.firebasedatabase.app"
});

const data = JSON.parse(fs.readFileSync("../backend/data.json", "utf8"));
const ref = admin.database().ref();

ref.set(data)
.then(() => {
  console.log("ข้อมูลไปดาต้าเบลดแล้ว");
})
.catch(error => {
  console.error(" ดับ:", error);
});
