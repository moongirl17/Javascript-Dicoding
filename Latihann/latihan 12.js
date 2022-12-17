function Mail() {
    this.from = 'pengirim@dicoding.com';
  };
   
  Mail.prototype.sendMessage = function(msg, to) {
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
  };

// pemanggilan
const email1 = new Mail();
email1.sendMessage('hallo', 'penerima@dicoding.com');

// menggunakan prototype
const email = new Mail();
email.hasOwnProperty('sendMessage');
 
// tanpa prototype
const emaill = new Mail();
emaill.hasOwnProperty('sendMessage');

// Cara 2
class Mail1 {
    constructor() {
        this.from = 'pengirim@dicoding.com';
    }
 
    sendMessage(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
    };
}
 
const mail1 = new Mail1();
mail1.sendMessage('hallo', 'penerima@dicoding.com');