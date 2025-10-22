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

![gambar](https://github.com/andreanbadeh/Lab5Web/blob/62d89f5a918aa68743a06e0093185e74aad064b9/image/Screenshot%20from%202025-10-22%2019-30-22.png)

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

![gambar](https://raw.githubusercontent.com/M-Rakha/Lab5Web/39331631332ff0bdacd27538f930a2d088de9b00/code%2011.png)

Outputnya :

![gambar](https://raw.githubusercontent.com/M-Rakha/Lab5Web/39331631332ff0bdacd27538f930a2d088de9b00/code%2011.2.png)

# Pertanyaan & Tugas
1. Buat script untuk melakukan validasi pada isian form.
   Contoh kodenya :

![gambar](https://raw.githubusercontent.com/M-Rakha/Lab5Web/f93bf34531adf83235f730dbeca92c53408bf92f/tgs%201..png)

Outputnya :

![gambar](https://raw.githubusercontent.com/M-Rakha/Lab5Web/f93bf34531adf83235f730dbeca92c53408bf92f/Cuplikan%20layar%202025-10-22%20002213.png)
