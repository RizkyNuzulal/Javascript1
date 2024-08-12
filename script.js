function validasi() {

    var konfirmasi = confirm('Apakah akan dilanjutkan untuk mengirim pesan?');

    if (konfirmasi == true) {
        var nama = document.forms["ppdbform"]["nama"].value;
        var nisn = document.forms["ppdbform"]["nisn"].value;
        var alamat = document.forms["ppdbform"]["alamat"].value;
        var nomor = document.forms["ppdbform"]["nomor"].value;
        var email = document.forms["ppdbform"]["email"].value;
        var tgl_lahir = document.forms["ppdbform"]["tgl_lahir"].value;

        console.log(nama);
        console.log(nisn);
        console.log(alamat);
        console.log(nomor);
        console.log(email);
        console.log(tgl_lahir);

        if (nama == '') {
            alert('nama harus dimasukan');
        }
        if (nisn == '') {
            alert('nisn harus diisi dengan angka');
        }
        if (alamat == '') {
            alert('alamat harus dimasukan');
        }
        if (nomor == '') {
            alert('nomor harus dimasukan');
        }
        if (email == '') {
            alert('email harus dimasukan');
        }
        if (tgl_lahir == '') {
            alert('Tanggal lahir harus dimasukan');
        }
    } else {
        alert('kirim pesan dibatalkan');
    }
}