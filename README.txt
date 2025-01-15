Deskripsi Program
Program ini adalah aplikasi web untuk mengelola data transaksi. Aplikasi ini memungkinkan pengguna untuk:

Melihat semua data transaksi dalam tabel.
Menambah data transaksi baru.
Mengedit data transaksi yang sudah ada.
Melihat detail transaksi berdasarkan ID.
Menghapus data transaksi.
Program terdiri dari:

Frontend: Dibuat menggunakan React.js untuk antarmuka pengguna.
Backend: Dibuat menggunakan Node.js dan Express.js untuk API.
Database: Menggunakan MySQL untuk menyimpan data transaksi.

Fitur Utama
Tampilan Data:

Data ditampilkan dalam tabel yang rapi.
Data dapat dikelompokkan berdasarkan tahun dan bulan.
Tambah Data:

Pengguna dapat menambahkan data transaksi baru melalui form.
Edit Data:

Pengguna dapat memperbarui informasi transaksi.
Detail Data:

Pengguna dapat melihat informasi lengkap suatu transaksi.
Hapus Data:

Pengguna dapat menghapus data transaksi dari tabel.

Cara Menjalankan Program
Backend :
Pastikan MySQL sudah terinstal dan berjalan.
Buat database menggunakan file importData.js atau dengan menjalankan perintah SQL
Jalankan backend dengan node server.js
Backend berjalan di http://localhost:5000.

Frontend :
Pastikan sudah berada di folder frontend.
Jalankan perintah berikut untuk memulai aplikasi npm start
Frontend berjalan di http://localhost:3000.

Detail Web App
Frontend: React.js
Backend: Node.js, Express.js
Database: MySQL
Library:
axios (untuk komunikasi API)
react-router-dom (untuk routing di React)
cors, body-parser (middleware di backend)