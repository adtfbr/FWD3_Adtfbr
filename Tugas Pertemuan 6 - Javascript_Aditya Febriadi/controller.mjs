
import users from "./data.mjs";

const index = () => {
    // tampilkan data
    users.map((user, i) => {
        console.log(`${i+1}. Nama: ${user.nama}, Umur: ${user.umur}, Alamat: ${user.alamat}, Email: ${user.email}`);
    });
};

const store = () => {
    // tambahkan data
    users.push({nama: 'Rizky Rahmanto', umur: 23, alamat: 'Jl. Dahlia 56', email: 'rizky.rahmanto@mail.com'});
    users.push({nama: 'Danis Diaz', umur: 22, alamat: 'Jl. Cempaka 57', email: 'danis.diaz@mail.com'});
};

const destroy = () => {
    // hapus data terakhir
    users.pop();
};


export { index, store, destroy };

