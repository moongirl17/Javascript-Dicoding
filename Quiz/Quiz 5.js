const minimal = (a,b) =>{

    if (a <b){

        console.log(a);

    } else if (b<a){

        console.log(b)

    } else if (a==b){

        console.log(a)

    }

}



const power = (a,b) => a ** b;



/**

 * Jangan hapus kode di bawah ini

 */



module.exports = { minimal, power };