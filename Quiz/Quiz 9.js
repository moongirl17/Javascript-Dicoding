class NetworkError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NetworkError';
    }
}


const fetchingUserFromInternet = (isOffline) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (isOffline) {
                reject(new NetworkError('Gagal mendapatkan data dari internet'));
            } else {
                resolve({name: 'John', age: 18})
            }
        }, 500)
        });
}

async function gettingUserName() {
    try{
        const user = await fetchingUserFromInternet (false)
            return user.name;
    } catch (error) {
        return error.message;
    }
}

module. exports = { fetchingUserFromInternet, gettingUserName, NetworkError}