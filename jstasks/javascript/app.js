"use strict"

// 1) Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir funksiya

// function division(n) {
//     if (n % 3 === 0 || n % 7 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// let n = 42
// console.log(division(n))


// // 2) Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir.
// function factorial(n) {
//     if (n === 0) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }

//console.log(factorial(n))


// // 3) Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir funksiya
// function even_sum_of_squares(arr) {
//     let cem = 0;
//     for (let num of arr) {
//         if (typeof num === 'number' && num % 2 === 0) {
//             cem += num ** 2;
//         }
//     }
//     return cem;
// }
// console.log(even_sum_of_squares(cem))

// // 4) Funtiona-a mail ve password gelir. Mail beraberdirse cavid@code.edu.az -a ve password beraberdirse 12345 -e, ekranda "Girish olundu" yazilsin, eks halda "Mail ve yaxud password sehvdir" yazilsin.
// function cheack_input(mail, password) {
//     if (mail === "cavid@code.edu.az" && password === "12345") {
//         console.log("Giriş olundu");
//     } else {
//         console.log("Mail və/ya şifrə səhvdir");
//     }
// }

// cheack_input("cavid@code.edu.az", "12345");


// // 5) Functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini qaytarmalidir.


// function tekEdedlerinCemi(arr) {
//     let cem = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             cem += arr[i];
//         }
//     }
//     return cem;
// }


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(tekEdedlerinCemi(arr)); 


// // 6) Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir.
// function cutEdedlerinCemi(arr) {
//     let cem = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             cem += arr[i];
//         }
//     }
//     return cem;
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(cutEdedlerinCemi(arr)); 



// //8) Icerisinde name, surname, age, email olan bir nece student objectleriniz var. Ashagida elave etdiklerimi functionlar sekilinde yazin, functionlar objectlerden ibaret array qebul edecek.
// //1) Yashi 18-25 araliginda olan telebelerin sayi.
// //2) Emailinde "c" herfi olan studentlerin sayi.

// // 9) Function yazacaqsiz, Functiona parametr olaraq string gelecek. Hemin function gelen parametrin ilk herfini boyuk herf edib geri qaytarsin.
// function capitalize_first_letter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }


