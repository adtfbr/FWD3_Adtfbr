// Tugas 1: Membuat array produkToko
let produkToko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

// Tugas 4: Membuat fungsi untuk menampilkan daftar produk
function tampilkanProduk() {
    console.log("\n--- Daftar Produk Toko ---");
    if (produkToko.length === 0) {
        console.log("Belum ada produk di toko.");
        return;
    }
    // Menggunakan forEach untuk menampilkan setiap produk
    produkToko.forEach(produk => {
        // Menggunakan toLocaleString untuk format harga yang lebih rapi
        console.log(`${produk.id}. ${produk.nama} - Harga: Rp${produk.harga.toLocaleString('id-ID')}, Stok: ${produk.stok}`);
    });
    console.log("--------------------------");
}

// Tugas 2: Membuat fungsi untuk menambahkan produk baru
function tambahProduk(nama, harga, stok) {
    // Membuat ID baru secara otomatis berdasarkan ID terakhir
    const idBaru = produkToko.length > 0 ? produkToko[produkToko.length - 1].id + 1 : 1;
    
    const produkBaru = {
        id: idBaru,
        nama: nama,
        harga: harga,
        stok: stok
    };
    
    produkToko.push(produkBaru);
    console.log(`\n-> Produk "${nama}" berhasil ditambahkan!`);
}

// Tugas 3: Membuat fungsi untuk menghapus produk berdasarkan id
function hapusProduk(id) {
    // Mencari index produk yang akan dihapus
    const indexProduk = produkToko.findIndex(produk => produk.id === id);
    
    // Jika produk ditemukan (index bukan -1), hapus produk
    if (indexProduk !== -1) {
        const namaProdukHapus = produkToko[indexProduk].nama;
        produkToko.splice(indexProduk, 1);
        console.log(`\n-> Produk "${namaProdukHapus}" (ID: ${id}) berhasil dihapus!`);
    } else {
        console.log(`\n-> Gagal! Produk dengan ID ${id} tidak ditemukan.`);
    }
}


// 1. Menampilkan daftar produk awal
console.log("Menampilkan kondisi awal toko:");
tampilkanProduk();

// 2. Menambahkan produk baru
console.log("\nMenambahkan produk baru: Monitor...");
tambahProduk("Monitor", 1500000, 8);

// 3. Menampilkan daftar produk setelah penambahan
tampilkanProduk();

// 4. Menghapus produk yang ada (misal: Mouse dengan ID 2)
console.log("\nMenghapus produk dengan ID 2...");
hapusProduk(2);

// 5. Menampilkan daftar produk setelah penghapusan
tampilkanProduk();

// 6. Mencoba menghapus produk dengan ID yang tidak ada
console.log("\nMencoba menghapus produk dengan ID 99...");
hapusProduk(99);

// 7. Menampilkan daftar produk akhir
tampilkanProduk();