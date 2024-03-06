const readline = require('readline');

// Fungsi utama
async function main() {
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});


// Fungsi meminta input
function askQuestion(rl, question) {
return new Promise(resolve => {
    rl.question(question, resolve);
});
}

// Fungsi menghitung rata-rata
function calculateAverage(grades) {
if (grades.length === 0) {
    return 0;
}
const sum = grades.reduce((total, nilai) => total + nilai, 0);
return sum / grades.length;
}

  
const listNilai = []; 

// Input
console.log("Masukkan nilai : (Jika sudah selesai ketik 'sudah'");
while (true) {
const input = await askQuestion(rl, 'Masukkan nilai: ');
if (input.toLowerCase() === 'sudah') {
    break;
}
const nilai = parseFloat(input);
if (!isNaN(nilai)) {
    listNilai.push(nilai);
} else {
    console.log("Input tidak valid, masukkan angka.");
}
}

// Menghitung rata-rata nilai
const average = calculateAverage(listNilai);
console.log(`Rata-rata nilai adalah: ${average}`);

rl.close();
}

// Fungsi untuk meminta input pengguna
function askQuestion(rl, question) {
return new Promise(resolve => {
rl.question(question, resolve);
});
}

// Fungsi untuk menghitung rata-rata
function calculateAverage(grades) {
if (grades.length === 0) {
return 0;
}
const sum = grades.reduce((acc, grade) => acc + grade, 0);
return sum / grades.length;
}

// Memanggil fungsi utama
main();
