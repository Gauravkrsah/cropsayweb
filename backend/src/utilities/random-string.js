const randomStringGenerator = (len) =>{
    const char = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMMNOPQRSTUVQXYZ";
    const lenght = char.length;
    let random = "";
    for(let i= 0 ;i<len; i++){
        const posn = Math.ceil(Math.random()*(lenght - 1))  // 0, 61
        random += char[posn];
    }
    return random;
}

module.exports = randomStringGenerator