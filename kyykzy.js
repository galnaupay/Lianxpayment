// GANTI PAKE LINK FOTO QRIS LU
const qrisURL = "https://deposit.pictures/p/13a16c4ca5174e29b70dd5cebacadee6";

// GANTI PAKE LINK FOTO QRIS LU
const feemcURL = "https://deposit.pictures/p/a8c60795fb1d4166818786dc1a315aa5";

// GANTI PAKE LINK FOTO QRIS LU
const tahapanmcURL = "https://deposit.pictures/p/e8566c203d0e479f83abc324682177fb";

// GANTI PAKE FOTO BACKGROUND LU
const backgroundURL = "https://deposit.pictures/p/6f5572d01536484fa9a7efe1c7bc14b4";

// Data pembayaran yang bisa diubah
const paymentData = {
    Dana: "0881012391309", // NOPE DANA LU
    Ovo: "0881012391309", // NOPE OVO LU
    Gopay: "0881012391309" // NOPE GOPAY LU
}; //NOTE UBAH TAPI JAN APUS TANDA " NYA

//MAU UBAH NAMA NAMA WEB NOMOR SAMA EMAIL DI BAGIAN HUBUNGI SAYA? KE FILE INDEX.HTML 

// Set background gambar
document.getElementById("background-container").style.backgroundImage = `url('${backgroundURL}')`;

// Set QRIS link
document.getElementById("qris-link").href = qrisURL;

// Set QRIS link
document.getElementById("feemc-link").href = feemcURL;

// Set QRIS link
document.getElementById("tahapanmc-link").href = tahapanmcURL;

// Fungsi untuk menyalin nomor saat tombol ditekan
function copyToClipboard(paymentType) {
    if (paymentData[paymentType]) {
        navigator.clipboard.writeText(paymentData[paymentType]).then(() => {
            alert(paymentType + " nomor telah disalin: " + paymentData[paymentType]);
        }).catch(err => {
            console.error('Gagal menyalin:', err);
        });
    } else {
        alert("Nomor tidak ditemukan!");
    }
}
