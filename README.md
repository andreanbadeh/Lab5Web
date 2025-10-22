# Modul Praktikum Pemrograman Web
Nama : ANDREAN PUTRA ARYA

NIM : 312410341

KELAS : TI.24.A.4

# 1. Awalan :
Contoh code nya :
```<!DOCTYPE html>
<html lang="en">
<head>
    <title>Mengenal Javascript</title>
</head>
<body>
    <h1>Pengenalan Javascript</h1>
    <h3>Contoh document.write dan console.log</h3>
    <script>
        document.write("Hello Word")
        console.log("Hello Word")
    </script>
</body>
</html>
```

Outputnya :

![gambar](https://github.com/andreanbadeh/Lab5Web/blob/74ac15cf89891d4dbbaf30a888a4f5891af7a2b4/image/Screenshot%20from%202025-10-22%2019-28-29.png)

# 2. Menggunakan Alert
```
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Alert Box</title>
</head>
<body>
    <script>
        alert("Hafilla seorang engineer");
    </script>
</body>
</html>

```

Outputnya :

![gambar](https://github.com/andreanbadeh/Lab5Web/blob/f9431659113305d5e3b71207d9cc31d83203051b/image/Screenshot%20from%202025-10-22%2019-55-35.png)

# 3. Pemakaian Method
```
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Skrip JavaScript</title>
</head>
<body>
    <p>Percobaan memakai JavaScript:</p>
    <script>
        document.write("Selamat Mencoba JavaScript!<br>");
        document.write("Semoga Sukses!");
    </script>
</body>
</html>
```

Outputnya :

![gambar](https://github.com/andreanbadeh/Lab5Web/blob/6c53a6068c5a264c90af2bb5c6754c9224baa036/image/Screenshot%20from%202025-10-22%2019-33-30.png)

# 4. Pemakaian Prompt
```
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Pemasukan Data</title>
</head>
<body>
    <script>
        const nama = prompt("Siapa nama Anda?", "Masukkan nama Anda");
        document.write(`Hai, ${nama}`);
    </script>
</body>
</html>
```

Outputnya :

![gambar](https://github.com/andreanbadeh/Lab5Web/blob/f3fb06a4a2726f03ba54529d2f06137248b2db0f/image/Screenshot%20from%202025-10-22%2019-36-22.png)

# 5. Operasi Dasar Aritmatika
```
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Contoh Pemrograman JavaScript</title>
    <script>
        function test(val1, val2) {
            document.write(`<p>Perkalian: ${val1 * val2}</p>`);
            document.write(`<p>Pembagian: ${val1 / val2}</p>`);
            document.write(`<p>Penjumlahan: ${val1 + val2}</p>`);
            document.write(`<p>Pengurangan: ${val1 - val2}</p>`);
            document.write(`<p>Modulus: ${val1 % val2}</p>`);
        }
    </script>
</head>
<body>
    <button onclick="test(9, 4)">Klik untuk menjalankan fungsi JavaScript</button>
</body>
</html>
```


Outputnya :

![gambar](https://github.com/andreanbadeh/Lab5Web/blob/68e4d9a7aa9d83974b5a517c469df51f4bc16673/image/Screenshot%20from%202025-10-22%2019-38-14.png)

# 6. Seleksi Kondisi
```
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Contoh If-Else</title>
</head>
<body>
    <script>
        const nilai = parseInt(prompt("Masukkan nilai (0-100):", 0));
        const hasil = nilai >= 60 ? "Lulus" : "Tidak Lulus";
        document.write(`Hasil: ${hasil}`);
    </script>
</body>
</html>
```

Outputnya :

![gambar](https://github.com/andreanbadeh/Lab5Web/blob/1731d43d15c874818e4fde57ba8a56a921a42a19/image/Screenshot%20from%202025-10-22%2019-40-09.png)

# 7. Penggunaan Operator Switch Untuk Seleksi Kondisi
```
<html>
<head>
    <title>contoh program javascript</title>
    <script language="javascript">
        function test() {
            val1 = window.prompt("input nilai (1-5):");
            switch (val1) {
                case "1":
                    document.write("bilangan satu");
                    break;
                case "2":
                    document.write("bilangan dua");
                    break;
                case "3":
                    document.write("bilangan tiga");
                    break;
                case "4":
                    document.write("bilangan empat");
                    break;
                case "5":
                    document.write("bilangan lima");
                    break;
                default:
                    document.write("bilangan lainnya");
            }
        }
    </script>
</head>
<body>
    <input type="button" name="button1" value="switch" onclick="test()">
</body>
</html>
```
Outputnya :

![gambar](https://github.com/andreanbadeh/Lab5Web/blob/7336d929cc0d6b2c29c0ea785ad2adc5c4c05c64/image/Screenshot%20from%202025-10-22%2019-42-06.png)

# 8. Form Input
```
<html>
<head>
    <script language="javascript">
        function test() {
            var val1 = document.kirim.T1.value;
            if (val1 % 2 == 0)
                document.kirim.T2.value = "bilangan genap";
            else
                document.kirim.T2.value = "bilangan ganjil";
        }
    </script>
</head>
<body>
    <form method="POST" name="kirim">
        <p>
            BIL <input type="text" name="T1" size="20">
            MERUPAKAN BIL <input type="text" name="T2" size="20">
        </p>
        <p>
            <input type="button" value="TEBAK" name="B1" onclick="test()">
        </p>
    </form>
</body>
</html>
```

Outputnya : 

![gambar](https://github.com/andreanbadeh/Lab5Web/blob/7aadfa50ba4d7ad5d11dbbac448578e89a5307a6/image/Screenshot%20from%202025-10-22%2019-45-00.png)

# 9. Form Button
```
<html>
<head>
    <title>Objek document</title>
</head>
<body>
    <script language="javascript">
        <!--
        function ubahWarnaLB(warna) {
            document.bgColor = warna;
        }
        function ubahWarnaLD(warna) {
            document.fgColor = warna;
        }
        //-->
    </script>

    <h1>Objek Document</h1>
    <form>
        <input type="button" value="Latar Belakang Hijau" onClick="ubahWarnaLB('GREEN')">
        <input type="button" value="Latar Belakang Putih" onClick="ubahWarnaLB('WHITE')">
        <input type="button" value="Teks Kuning" onClick="ubahWarnaLD('YELLOW')">
        <input type="button" value="Teks Biru" onClick="ubahWarnaLD('BLUE')">
    </form>

    <script language="javascript">
        <!--
        document.write("Dimodifikasi terakhir pada " + document.lastModified);
        //-->
    </script>
</body>
</html>
```

Outputnya :

![gambar](https://github.com/andreanbadeh/Lab5Web/blob/a0cad58ccfdd3b434f436406b5f90975d173338c/image/Screenshot%20from%202025-10-22%2019-46-48.png)

# 10. Pilihan menggunakan checkBox dengan perhitungan otomatis
```
<html>
  <head>
    <title>Daftar Menu</title>
    <script>
      function hitung(ele) {
        var total = document.getElementById('total').value;
        total = (total ? parseInt(total) : 0);

        var harga = 0;

        if (ele.checked) {
          harga = ele.value;
          total += parseInt(harga);
        } else {
          harga = ele.value;
          if (total > 0)
            total -= parseInt(harga);
        }

        document.getElementById('total').value = total;
      }
    </script>
  </head>

  <body>
    <h1>Daftar menu makanan</h1>
    <label>
      <input type="checkbox" value="5000" id="menu1" onclick="hitung(this);">
      Ayam goreng Rp.5.000
    </label><br/>
    <label>
      <input type="checkbox" value="500" id="menu2" onclick="hitung(this);">
      Tempe goreng Rp.500
    </label><br/>
    <label>
      <input type="checkbox" value="2500" id="menu3" onclick="hitung(this);">
      Telur dadar Rp.2.500
    </label><br/>
    <strong>Total Bayar: Rp. <input id="total" type="text"/></strong>
  </body>
</html>
```

Outputnya :

![gambar](https://github.com/andreanbadeh/Lab5Web/blob/7075a5d9b2bcee56502844b0cbe49901df9918dd/image/Screenshot%20from%202025-10-22%2019-49-34.png)

# Pertanyaan & Tugas
1. Buat script untuk melakukan validasi pada isian form.
   Contoh kodenya :
```
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Validasi Form dengan JavaScript</title>

  <link rel="stylesheet" href="index.css">

  <script src="index.js" defer></script>
</head>

<body>
  <h2>Form Validasi JavaScript</h2>
  <form name="formValidasi" onsubmit="return validasiForm()">
    <label for="nama">Nama Lengkap</label>
    <input type="text" id="nama" name="nama" placeholder="Masukkan nama kamu">

    <label for="email">Alamat Email</label>
    <input type="text" id="email" name="email" placeholder="nama@email.com">

    <label for="password">Kata Sandi</label>
    <input type="password" id="password" name="password" placeholder="Minimal 6 karakter">

    <label class="show-pass">
      <input type="checkbox" id="showPassword" onclick="togglePassword()"> Tampilkan Password
    </label>

    <button type="submit">Kirim</button>
  </form>
</body>
</html>
```

Outputnya :

![gambar](https://github.com/andreanbadeh/Lab5Web/blob/7d82f97e2ec1cbe77ce81aaca4779294e2a8fe3e/image/Screenshot%20from%202025-10-22%2019-53-28.png)
