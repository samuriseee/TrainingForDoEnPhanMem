// Cách khai báo biến trong JS
// Có 3 cách để khai báo:
// 1. var 2. let 3. const
// ví dụ
var a = 1; // XEM LẠI SỰ KHÁC NHAU GIỮA LET VÀ VAR => KHÁI NIỆM HOISTING
let b = 2;
const c = 3; // hằng số không thể thay đổi
console.log("Biến a", a); // cách in phổ biến trong js
// Biến JS là biến động nên sẽ không khai báo kiểu dữ liệu mà kiểu dữ liệu
// mà kiểu dữ liệu sẽ dựa vào dữ liệu mà biến đang được chứa

// => Trong JS có 2 dạng kiểu dữ liệu:
// 1. Primitive type(kiểu dữ liệu nguyên thuỷ): String, Number, Boolean, Null, Undefined
let num = 1; // kiểu dữ liệu Number
let str = "1"; // kiểu dữ liệu String
let boo = true; // kiểu dữ liệu Boolean
let d = null; // kiểu dữ liệu Null
let e = undefined; // kiểu dữ liệu Undefined
// null khác undifined đó là null là "chắc chắn đang không có gì"
// undefined là "chưa biết có gì"

// 2. Kiểu dữ liệu tham chiếu: Array, Object, Function
let arr = [1, 2, 3, 4, 5]; // kiểu dữ liệu Array

let obj = { name: "Nguyễn Văn A", age: 18 }; // kiểu dữ liệu Object
console.log(obj.name); // truy cập đến thuộc tính của 1 object
obj.name = "Nguyễn Văn B"; // thay đổi giá trị của thuộc tính của 1 object

let func = function () {
  console.log("Hello");
}; // kiểu dữ liệu Function
// để kiểm tra kiểu dữ liệu của 1 biến có thể sử dụng câu lệnh typeof
console.log(typeof a);

// Kiểu dữ liệu tham chiếu trong JS tức là
// khi ta khai báo 1 biến kiểu dữ liệu tham chiếu
// thực ra nó chỉ là lưu một địa chỉ tham chiếu đến 1 vùng nhớ

