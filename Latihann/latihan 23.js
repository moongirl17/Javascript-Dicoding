const state = {
    stock: {
        coffebeans: 250,
        water: 1000,
    }, 
    isCoffeMachineBusy: false,
}

const checkAvailability = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!state.isCoffeMachineBusy) {
                resolve("Mesin kopi siap digunakan.");
            } else {
                reject("Maaf, mesin sedang sibuk.");
            }
        }, 1000);
    });
};

const checkstock = () => {
    return new Promise((resolve, reject) => {
        state.isCoffeMachineBusy = true;
        setTimeout(() => {
            if ( state.stock.coffebeans >= 16 && state.stock.water >= 250) {
                resolve("stock cukup. bisa membuat kopi.");
            } else {
                reject("stock tidak cukup!");
            }
        }, 1500);
        });
};

const brewcoffee = () => {
    console.log("membuat Kopi anda..");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("kopi sudah siap");
        }, 2000);
    })
 };

 
const boilWater = () => {
    return new Promise((resolve, reject) => {
        console.log('Memanaskan air...');
        setTimeout(() => {
          resolve('Air panas sudah siap!');
        }, 2000);
      });
    };
     
    const grindCoffeeBeans = () => {
      return new Promise((resolve, reject) => {
        console.log('Menggiling biji kopi...');
        setTimeout(() => {
          resolve('Bubuk kopi sudah siap!');
        }, 1000);
      });
    };

const makeEspresso = () => {
    checkAvailability()
    .then((value) => {
        return checkstock();
    })
    .then((value) => {
        console.log(value);
        const Promises = [boilWater(), grindCoffeeBeans()];

        return Promise.all(Promises);
    })
    .then((value) => {
        console.log(value)
         return brewcoffee();
    })
    .then(value => {
        console.log(value);
        state.isCoffeeMachineBusy = false;
    })
    .catch(rejectreason => {
        console.log(rejectreason);
        state.isCoffeMachineBusy = false;
    });
}



makeEspresso();