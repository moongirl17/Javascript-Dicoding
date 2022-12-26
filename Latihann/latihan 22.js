const stock = {
    coffebeans: 250,
    water: 1000,
}

const checkstock = () => {
    return new Promise((resolve, reject) => {
        if (stock.coffebeans >= 16 && stock.water >= 250) {
            resolve("stock cukup. bisa membuat kopi");
        } else {
            reject("stock tidak cukup");
        }
    });
};

const handlesuccess = resolevedvalue => {
    console.log(resolevedvalue);
}

 const handlefailure = rejectreason => {
    console.log(rejectionreason);
 }

 checkstock().then(handlesuccess, handlefailure);