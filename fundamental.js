// String Data Type
let namaDepan = "Rizky";
let namaBelakang = "Gusti";
let namaLengkap = namaDepan + " " + namaBelakang;
console.log("String:", namaLengkap);

// Boolean Data Type
let isOnline = true;
let isMember = false;
console.log("Boolean:", isOnline);
console.log("Boolean:", isMember);

// Number Data Type
let age = 22;
console.log("Number:", age);

// Array Data Type
let favoriteColors = ["White", "Black"];
console.log("Array:", favoriteColors);

// Object Data Type
let mahasiswa = {
    nama: "Rizky Gusti",
    umur: 22,
    jurusan: "Sistem Informasi",
    universitas: "Universitas Dinamika Bangsa Jambi"
};
console.log("Object:", mahasiswa);

// Function to display data in alerts
function showData() {
    alert("String: " + namaLengkap);
    alert("Boolean: " + isOnline);
    alert("Number: " + age);
    alert("Array: " + favoriteColors.join(", "));
    alert("Object: " + JSON.stringify(mahasiswa));
}
