// find index
// 1)Massiv ichida 5 ga karrali bo‘lgan birinchi elementni toping.

// let arr = [12,32,35,21,25]
// let res = arr.find(value =>{
//     return value % 5 ==0
// })
// console.log(res);

// 2)Massiv ichida 20 dan kichik bo‘lgan birinchi toq sonning indeksini toping.

// let arr = [12,2,3,43,54,56]
// let res = arr.findIndex(value =>{
//     if(value % 2 == 1){
//         return value < 20
//     }
// })
// console.log(res);

// 3)Massiv ichida 0 bilan tugaydigan birinchi elementni toping.

// let arr = [12,3,40,23,20,43]
// let res = arr.find(value =>{
//     return value % 10 == 0
// })
// console.log(res);

// some metodiga oid 

// 1)Massivda 50 ga teng yoki undan katta elementlar bor-yo‘qligini aniqlang.

// let arr = [12,3,43,211,35,65,54]
// let res = arr.some(value =>{
//     return value >= 50
// })
// console.log(res);

// 2)Massivda manfiy sonlar bor-yo‘qligini aniqlang.

// let arr = [12,3,43,211,35,-65,54]
// let res = arr.some(value =>{
//     return value < 0
// })
// console.log(res);

// 3)Massivda 3 ga karrali bo‘lgan sonlar bor-yo‘qligini tekshiring.

// let arr = [21,343,54,55]
// let res = arr.some(value =>{
//     return value % 3 == 0
// })
// console.log(res);

// every ga oid 

// 1)Massivdagi barcha sonlar musbat ekanligini tekshiring.

// let arr = [12,3,43,211,35,5,54]
// let res = arr.every(value =>{
//     return value > 0
// })
// console.log(res);

// 2)Massivdagi barcha sonlar 10 dan katta ekanligini tekshiring.


// let arr = [12,3,43,211,35,65,54]
// let res = arr.every(value =>{
//     return value > 10
// })
// console.log(res);

// 3)Massivdagi barcha sonlar toq ekanligini aniqlang.

// let arr = [1,3,5,7,9]
// let res = arr.every(value =>{
//     return value % 2 == 1
// })
// console.log(res);

// string metodlari 

// charat 

// 1)Berilgan matnning uchinchi belgisi nima ekanligini aniqlang.

// let arr = "olma, nok "
// let res = arr.charAt(2)
// console.log(res);

// 2)Matnning oxiridan ikkinchi belgisini toping.

// let arr = "olma nok"
// let res = arr.charAt(arr.length - 2)
// console.log(res);

// charcodeAt ga oid 

// 1)Berilgan matnning birinchi belgisi uchun Unicode qiymatini aniqlang.

// let arr = 'apelsin'
// let res = arr.charCodeAt(0)
// console.log(res);

// 2)Matnning beshinchi belgisining Unicode qiymatini toping.

// let arr = 'mandarin'
// let res = arr.charCodeAt(5)
// console.log(res);

// slice ga oid 

// 1)Berilgan matndan birinchi 5 ta belgini ajratib oling.

// let arr = 'qwertyuiop'
// let res = arr.slice(0, 5)
// console.log(res);

// 2) Matnning oxirgi 3 ta belgisini ajratib oling.

// let arr = 'qwertyuiop'
// let res = arr.slice(-3)
// console.log(res);

// substring ga oid 

// 1)Matnning 2-pozitsiyadan boshlab 6-pozitsiyagacha bo‘lgan qismini ajrating.

// let arr = 'hello Joni'
// let res = arr.substring(2, 6)
// console.log(res);

// 2)Matnning oxirgi uchta belgisini substring yordamida oling.

// let arr = 'hello'
// let res = arr.substring(arr.length -3)
// console.log(res);

// substr ga oid 

// 1)Matnning 4-pozitsiyadan boshlab 5 ta belgisini oling.

// let arr = 'qwwertyuiop'
// let res = arr.substr(4, 5)
// console.log(res);

// 2)Berilgan matnning boshidan 7 ta belgisini substr yordamida ajrating.

// let arr = 'qwwertyuiop'
// let res = arr.substr(0, 7)
// console.log(res);

// touppercase tolowercase ga oid 

// 1)Berilgan matnni faqat katta harflar bilan yozing.

// let arr = 'hebfhbf'
// let res = arr.toUpperCase()
// console.log(res);

// 2)Matnning birinchi yarmidan kichik harflar, ikkinchi yarmidan katta harflar yarating.

// let arr = 'HHGAFHAF'
// let res = arr.toLowerCase()
// console.log(res);

// concat ga oid 

// 1)Berilgan ikkita matnni birlashtiring.

// let arr = 'olma'
// let arr1 = 'uzum'
// let res = arr.concat(' ', arr1)
// console.log(res);

// 2)Matnga qo‘shimcha qilib "!" belgisi qo‘shing va yangi matn yarating.

// let arr = 'salom'
// let arr1 = '!'
// let res = arr.concat(' ', arr1)
// console.log(res);

// trim trimStart trimEnd

// 1)Matnning boshidagi va oxiridagi bo‘sh joylarni olib tashlang.

// let arr = ' hello '
// let res = arr.trim()
// console.log(res);

// 2)Matnning faqat boshidagi bo‘sh joylarni olib tashlang.

// let arr = ' hello'
// let res = arr.trimStart()
// console.log(res);

// padStart , padEnd

// 1)Berilgan matnni boshidan 10 belgiga to‘ldiring, “*” belgisi bilan.

// let arr = 'hello'
// let res = arr.padStart(16 , '*')
// console.log(res);

// 2)Matnni oxiridan 15 belgiga “#” bilan to‘ldiring.

// let arr = 'hello'
// let res = arr.padEnd(21, '*')
// console.log(res);

// repeat ga oid 

// 1)Matnni 3 marta takrorlab yangi matn yarating.

// let arr = 'salom'
// let res = arr.repeat(3)
// console.log(res);

// 2)Belgini 5 marta takrorlab, string yaratib oling.

// let arr = 'hello'
// let res = arr.repeat(5)
// console.log(res);

// replace, replaceAll

// 1)Matnning ichidagi birinchi "a" harfini "o" harfiga almashtiring.

// let arr = 'salom'
// let res = arr.replace('a', 'o')
// console.log(res);

// 2)Matnning barcha “ ” (bo‘sh joy) belgilarini “_” belgilariga almashtiring.

// let arr = ' hello '
// let res = arr.replaceAll('', '_')
// console.log(res);

// split ga oid 

// 1)Matnni har bir so‘zdan ajratib massivga aylantiring.

// let arr = 'hello'
// let res = arr.split(' ')
// console.log(res);

// 2)Matnni har bir belgidan ajratib massiv yarating.

// function massiv(matn){
//     return matn.split('')

// }
// let matn = 'salom'
// let res = massiv(matn)
// console.log(res);

// indexOf, lastIndexOf ga oid 

// 1)Matndagi "a" harfi birinchi marta qayerda uchrayotganini aniqlang.

// let arr = 'salom'
// let res = arr.indexOf('a')
// console.log(res);

// 2)Matndagi "e" harfi oxirgi marta qayerda uchrayotganini toping.

// let arr = 'byeBye'
// let res = arr.lastIndexOf('e')
// console.log(res);

// include ga oid 

// 1)Matn ichida "hello" so‘zi bor-yo‘qligini tekshiring.

// let arr = 'hello Joni'
// let res = arr.includes('hello')
// console.log(res);

// 2)Matn ichida "!" belgisi mavjudligini aniqlang.

// let arr = '!kwnwaje'
// let res = arr.includes("!")
// console.log(res);

// search ga oid 

// 1)Matn ichida birinchi "good" so‘zi qayerda joylashganini aniqlang.

// let arr = 'qwert uio good asdf good'
// let res = arr.search('good')
// console.log(res);

// startsWith, endsWith ga oid 

// 1)Matn "Hello" so‘zi bilan boshlanadimi yoki yo‘qmi, tekshiring.

// let arr = 'qwhelloerty'
// let res = arr.startsWith('hello')
// console.log(res);

// 2)Matn oxirida "bye" so‘zi borligini aniqlang.

// let arr  = 'bbye'
// let res = arr.endsWith('bye')
// console.log(res);







// Massiv ichida obyektlar 

// 1)users massivida age qiymati 25 dan katta bo‘lgan foydalanuvchilarni toping.

// let users = [
//     { id: 1, name: "Ali", age: 25, isActive: true },
//     { id: 2, name: "Bobur", age: 30, isActive: false },
//     { id: 3, name: "Zara", age: 22, isActive: true }
// ];

// let res = users.filter(value =>{
//     return value.age > 25
// })
// console.log(res);

// 2)products massivida price qiymati 500 dan kichik bo‘lgan mahsulotlarni aniqlang.

// let products = [
//     { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
//     { id: 102, name: "Phone", price: 500, rating: 4.2 },
//     { id: 103, name: "Tablet", price: 300, rating: 4.8 }
// ]; 
// let res = products.filter(value =>{
//     return value.price < 500
// })
// console.log(res);

// 3)tasks massivida status qiymati "pending" bo‘lgan vazifalarni boshqa massivga ajrating.

// let tasks = [
//     { id: 1, title: "Do homework", status: "completed" },
//     { id: 2, title: "Clean room", status: "pending" },
//     { id: 3, title: "Go shopping", status: "pending" }
// ];

// let res = tasks.filter(value =>{
//     return value.status == 'pending'
// })
// console.log(res);

// 4). users massivida isActive qiymati true bo‘lgan foydalanuvchilar sonini hisoblang.

// let users = [
//     { id: 1, name: "Ali", age: 25, isActive: true },
//     { id: 2, name: "Bobur", age: 30, isActive: false },
//     { id: 3, name: "Zara", age: 22, isActive: true }
// ];
// let counter = 0;
// users.forEach(value =>{
//     if(value.isActive){
//         counter++
//     }
// })
// console.log(counter);

// 5) products massivida rating qiymati eng yuqori bo‘lgan mahsulotni toping.

// let products = [
//     { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
//     { id: 102, name: "Phone", price: 500, rating: 4.2 },
//     { id: 103, name: "Tablet", price: 300, rating: 4.8 }
// ];
// let max = products[0].rating;
// let maxproduct =products[0]
// products.forEach(value =>{
//     if(value.rating > max){
//         max = value.rating
//         maxproduct = value
//     }
// })
// console.log(maxproduct);

// 6)users massividagi har bir foydalanuvchining faqat name va age qiymatlarini ajratib oling.

// let users = [
//     { id: 1, name: "Ali", age: 25, isActive: true },
//     { id: 2, name: "Bobur", age: 30, isActive: false },
//     { id: 3, name: "Zara", age: 22, isActive: true }
// ];
// let res = users.map(value =>{
//     delete value.isActive;
//     delete value.id;
//     return value;
// })
// console.log(res);

// 8)tasks massivida title qiymati "Clean room" bo‘lgan vazifaning indeksini aniqlang.

// let tasks = [
//     { id: 1, title: "Do homework", status: "completed" },
//     { id: 2, title: "Clean room", status: "pending" },
//     { id: 3, title: "Go shopping", status: "pending" }
// ];
// let res = tasks.findIndex(value =>{
//     return value.title == 'Clean room'
// })
// console.log(res);

// 9) users massivida barcha foydalanuvchilarning age qiymatlari yig‘indisini hisoblang.

// let users = [
//     { id: 1, name: "Ali", age: 25, isActive: true },
//     { id: 2, name: "Bobur", age: 30, isActive: false },
//     { id: 3, name: "Zara", age: 22, isActive: true }
// ];
// let sum = 0
// users.forEach(value =>{
//     sum += value.age
// })
// console.log(sum);

// 10)products massividagi har bir mahsulotning price qiymatini 10% ga kamaytirib yangi massiv yarating.

// let products = [
//     { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
//     { id: 102, name: "Phone", price: 500, rating: 4.2 },
//     { id: 103, name: "Tablet", price: 300, rating: 4.8 }
// ];
// let res = products.map(product =>{
//     product.price = product.price - product.price / 10
//     return product
// })
// console.log(res);

// 11)users massivida name qiymati "Ali" bo‘lgan foydalanuvchini toping.

// let users = [
//     { id: 1, name: "Ali", age: 25, isActive: true },
//     { id: 2, name: "Bobur", age: 30, isActive: false },
//     { id: 3, name: "Zara", age: 22, isActive: true }
// ]
// let res = users.find(value =>{
//     return value.name == 'Ali'
// })
// console.log(res);

// 12)tasks massivida barcha status qiymatlari "completed" ekanligini tekshiring.

// let tasks = [
//     { id: 1, title: "Do homework", status: "completed" },
//     { id: 2, title: "Clean room", status: "completed" },
//     { id: 3, title: "Go shopping", status: "completed" }
// ];
// let res = tasks.every(task =>{
//     return task.status == 'completed'
// })
// console.log(res);

// 13)products massivida rating qiymati 4 dan katta bo‘lgan mahsulotlar sonini hisoblang.

// let products = [
//     { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
//     { id: 102, name: "Phone", price: 500, rating: 3.9 },
//     { id: 103, name: "Tablet", price: 300, rating: 4.8 }
// ];
// let counter = 0
// products.forEach(value =>{
//     if(value.rating > 4){
//         counter++;
//     }
// })
// console.log(counter);

// 15)tasks massivida har bir title qiymatini bosh harfini katta qilib yangi massiv yarating.

// let tasks = [
//     { id: 1, title: "do homework", status: "completed" },
//     { id: 2, title: "clean room", status: "pending" },
//     { id: 3, title: "go shopping", status: "pending" }
// ];  
// let res = tasks.map(task =>{
//     task.title = task.title[0].toUpperCase() + task.title.slice(1)
//     return task
// })
// console.log(res);













