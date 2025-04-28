// GANTI PAKE LINK FOTO QRIS LU
const qrisURL = "https://files.catbox.moe/7r2zfw.jpg";

// GANTI PAKE LINK FOTO QRIS LU
const feemcURL = "https://files.catbox.moe/wijbtr.jpg";

// GANTI PAKE LINK FOTO QRIS LU
const tahapanmcURL = "https://files.catbox.moe/y9z53q.jpg";

// GANTI PAKE FOTO BACKGROUND LU
const backgroundURL = "https://files.catbox.moe/icb9u7.jpg";

// Data pembayaran yang bisa diubah
const paymentData = {
    Dana: "082317950014", // NOPE DANA LU
    Ovo: "gada", // NOPE OVO LU
    Gopay: "082254603842" // NOPE GOPAY LU
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
