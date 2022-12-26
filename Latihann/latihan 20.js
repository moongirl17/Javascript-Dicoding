const oderCoffe = callback => {
    let coffe = null;
    console.log("Sedang membuat kopi, silahkan tunggu...");
    setTimeout(() => {
        coffe= "kopi sudah jadi!";
        callback(coffe);
    },3000);
}

oderCoffe(coffe => {
    console.log(coffe);
});
