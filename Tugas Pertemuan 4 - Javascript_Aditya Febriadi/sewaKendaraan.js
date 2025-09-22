//class Kendaraan
class Kendaraan {
    constructor(jenis, merek, nomorPolisi) {
        this.jenis = jenis;
        this.merek = merek;
        this.nomorPolisi = nomorPolisi;
    }
}

// Definisikan class Pelanggan
class Pelanggan {
    constructor(nama, nomorTelepon) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = [];
    }

    /**
    @param {Kendaraan} kendaraan
     */
    sewaKendaraan(kendaraan) {
        this.kendaraanDisewa.push(kendaraan);
        console.log(`${this.nama} berhasil menyewa ${kendaraan.jenis} ${kendaraan.merek}.`);
    }

    lihatKendaraanDisewa() {
        console.log(`\n--- Kendaraan yang Disewa oleh ${this.nama} ---`);
        if (this.kendaraanDisewa.length === 0) {
            console.log("Tidak ada kendaraan yang sedang disewa.");
        } else {
            this.kendaraanDisewa.forEach((kendaraan, index) => {
                console.log(`${index + 1}. Jenis: ${kendaraan.jenis}, Merek: ${kendaraan.merek}, No. Polisi: ${kendaraan.nomorPolisi}`);
            });
        }
    }
}

// Sistem untuk mengelola dan menampilkan daftar pelanggan
class SistemManajemenPenyewaan {
    constructor() {
        this.daftarPelanggan = [];
    }

    /**
    @param {Pelanggan} pelanggan
     */
    tambahPelanggan(pelanggan) {
        this.daftarPelanggan.push(pelanggan);
        console.log(`\nPelanggan baru ditambahkan: ${pelanggan.nama}`);
    }

    tampilkanSemuaPelangganMenyewa() {
        console.log("\n==============================================");
        console.log("      DAFTAR PELANGGAN YANG MENYEWA");
        console.log("==============================================");

        if (this.daftarPelanggan.length === 0) {
            console.log("Belum ada pelanggan yang terdaftar.");
            return;
        }

        this.daftarPelanggan.forEach(pelanggan => {
            if (pelanggan.kendaraanDisewa.length > 0) {
                console.log(`\nNama Pelanggan: ${pelanggan.nama}`);
                console.log(`Nomor Telepon : ${pelanggan.nomorTelepon}`);
                console.log("Kendaraan yang Disewa:");
                pelanggan.kendaraanDisewa.forEach(k => {
                    console.log(`  - ${k.jenis} ${k.merek} (${k.nomorPolisi})`);
                });
            }
        });
    }
}

// 1. sistem manajemen
const sistemPenyewaan = new SistemManajemenPenyewaan();

// 2. Buat beberapa objek kendaraan
const mobil1 = new Kendaraan("Mobil", "Avanzah", "B 1234 ADT");
const motor1 = new Kendaraan("Motor", "Vario Kzr", "B 5678 FBR");
const mobil2 = new Kendaraan("Mobil", "Pakjero", "D 4321 PTR");

// 3. Buat objek pelanggan baru
const pelanggan1 = new Pelanggan("Budi Doremi", "081234567890");
const pelanggan2 = new Pelanggan("Muhamad Sumbul", "087654321098");

// 4. Tambahkan pelanggan ke dalam sistem
sistemPenyewaan.tambahPelanggan(pelanggan1);
sistemPenyewaan.tambahPelanggan(pelanggan2);

// 5. Lakukan transaksi penyewaan
pelanggan1.sewaKendaraan(mobil1);
pelanggan1.sewaKendaraan(motor1);
pelanggan2.sewaKendaraan(mobil2);

// 6. Tampilkan daftar semua pelanggan yang sedang menyewa
sistemPenyewaan.tampilkanSemuaPelangganMenyewa();

// melihat kendaraan yang disewa oleh pelanggan spesifik
pelanggan1.lihatKendaraanDisewa();