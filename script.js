function validasi() {
  // Validasi nama
  var nama = document.forms["ppdbform"]["nama"].value;
  if (!/^[a-zA-Z\s]+$/.test(nama)) {
    alert("Nama harus berupa huruf dan spasi.");
    document.getElementById("nama").focus();
    document.ppdbform.nama.value = "";
    return false;
  }

  // Validasi NISN
  var nisn = document.forms["ppdbform"]["nisn"].value;
  if (!/^\d+$/.test(nisn)) {
    alert("NISN harus berupa angka.");
    document.getElementById("nisn").focus();
    document.ppdbform.nisn.value = "";
    return false;
  }
  //validasi alamat
  var alamat = document.forms["ppdbform"]["alamat"].value;
  if (!/^[a-zA-Z\s]+$/.test(nama)) {
    alert("Alamat Harus diisi dengan benar.");
    document.getElementById("alamat").focus();
    document.ppdbform.alamat.value = "";
    return false;
  }

  // Validasi nomor
  var nomor = document.forms["ppdbform"]["nomor"].value;
  if (!/^\d+$/.test(nisn)) {
    alert("Nomor harus berupa angka.");
    document.getElementById("nomor").focus();
    document.ppdbform.nomor.value = "";
    return false;
  }

  var email = document.forms["ppdbform"]["email"].value;
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    alert("Nama harus berupa huruf,angka,dan @");
    document.getElementById("nama").focus();
    document.ppdbform.nama.value = "";
    return false;
  }

  alert("Pendaftaran telah terkirim");

  return true; // Mengembalikan true jika semua validasi lolos
}
