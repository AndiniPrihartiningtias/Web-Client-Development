# TUGAS-2 WEB CLIENT DEVELOPMENT 
Repository ini dibuat untuk Tugas-2 mata kuliah Web Client Development, dalam tugas ini berisi beberapa fungsi dalam JavaScript dan TypeScript untuk melakukan berbagai operasi matematika dan manipulasi string:
- Mengkonversi suhu dari Fahrenheit ke Celsius.
- Mengkonversi panjang dari centimeter ke kilometer.
- Mengecek apakah suatu angka adalah bilangan ganjil.
- Menghapus kemunculan pertama dari sebuah substring dalam string.
- Mengecek apakah suatu string adalah palindrome.

## Struktur Kode
### Konversi Fahrenheit ke Celsius
menggunakan rumus: C = (F - 32) × 5/9
Kode:
```typescript
function fahrenheitToCelsius(f: number): number {
    return (f - 32) * 5 / 9;
}
```
Fungsi ini mengonfersikan derajat farenheit ke celcium.

### Konversi Centimeter ke Kilometer
menggunakan rumus: km = cm / 100000
Kode:
```typescript
function cmToKm(cm: number): number {
   return cm / 100000;
}
```
Fungsi ini mengonversi panjang dalam centimeter ke kilometer.

### Cek Bilangan Ganjil
Mengembalikan true jika bilangan ganjil, false jika bilangan genap.
Kode:
```typescript
function isOdd(num: number): boolean {
   if (num % 2 !== 0) {
      return true;
   }
   return false;
}
```
- num % 2 → Menggunakan operator modulus (%) untuk mendapatkan sisa pembagian
- jika num % 2 !== 0 (artinya tidak habis dibagi 2), maka angka tersebut adalah ganjil → return true.
- Jika num % 2 === 0 (habis dibagi 2), maka angka tersebut adalah genap → return false.

### Menghapus Kemunculan Pertama dari Substring dalam String
Fungsi ini menghapus kemunculan pertama substring dalam string utama dan menambahkan teks tambahan di akhir.
Kode:
```typescript
function removeFirstOccurrence(str: string, search: string, append: string): string {
   return str.replace(search, '') + " " + append;
}
```
- str.replace(search, '')
Menghapus kemunculan pertama dari substring search dalam str.
+" "+ append
- Menambahkan spasi (" ") dan teks tambahan (append) setelah hasil penghapusan substring.

### Mengecek apakah string adalah palindrome
Palindrome adalah kata yang tetap sama jika dibaca dari depan maupun belakang. Fungsi ini membalik string dan membandingkannya dengan string asli.
Kode:
```typescript
function isPalindrome(str: string): boolean {
   let reversed = str.split('').reverse().join('');
   return str === reversed;
}
console.log(isPalindrome("malam")); // true
console.log(isPalindrome("pagi")); // false
```
- Menggunakan metode .split(''), .reverse(), dan .join('') untuk membalik string.
- Hasil akhirnya adalah true jika palindrome, dan false jika bukan.

## Cara Menjalankan
1. Pastikan Node.js telah terinstal di komputer.
2. Simpan kode dalam file index.ts.
3. Jalankan perintah berikut untuk mengompilasi TypeScript ke JavaScript: 
*tsc index.ts*
4. Jalankan file JavaScript yang dihasilkan menggunakan Node.js: 
*node index.js*

## Teknologi yang Digunakan
- Typescript *(bahasa pemprograman open-source superset dari javascript)*
- Javascript *(bahasa pemprograman yang dinamis yang digunakan dalam pengembangan web)*
- node.js *(perangkat lunak yang didesain untuk mengembangkan web)*
- git *(sistem kontrol untuk mengelolah kode dengan mudah dan efisien)*

## Kesimpulan
- README ini menjelaskan fungsi dan implementasi kode dalam TypeScript.
- Memberikan contoh penggunaan dan cara menjalankan kode.
- Memperjelas konsep-konsep seperti konversi satuan, bilangan ganjil/genap, manipulasi string, dan palindrome.

## Penulis
- Nama: Andini Prihartiningtias
- Nim: 24120510003
- Prodi: Science Data
- Email: andinipriha1005@gmail.com