console.log("selamat datang!");
setTimeout(() => {
    console.log("Terima kasih sudah mampir, silahkan datang kembali!");
}, 3000);
console.log("Ada yang bisa dibantu?");


function oderCoffe() {

    let coffe = null;
    console.log("sedang membuat kopi, silahkan tunggu...");
    setTimeout(() => {
        coffe = "kopi sudah jadi!";
    }, 3000);
    return coffe;

}

 const coffe = oderCoffe();
 console.log(coffe);
