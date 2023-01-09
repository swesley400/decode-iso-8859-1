let iconv = require('iconv-lite');

async function decodeIso8859I(buffer){
    if(buffer !== null || buffer !== undefined){
        let bufferInText = iconv.decode(buffer, "iso-8859-1");
        return bufferInText
    }
    else{
        return ""
    }
}
module.exports = decodeIso8859I;


