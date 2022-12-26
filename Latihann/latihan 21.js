const executeFunction = (resolve, reject) => {
    const isCoffeeMakerReady = true;
    if (isCoffeeMakerReady) {
        resolve("kopi berhasil dibut");
    }else {
        reject("Mesin kopi tidak bisa digunakan");

    }
}

 const makecoffe = () => {
    return new Promise(executeFunction);
 }

 const coffePromise = makecoffe();
 console.log(coffePromise);