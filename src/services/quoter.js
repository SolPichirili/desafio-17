const quoter = (precio) =>{
    let officialUSD = 110;
    let blueUSD = 212;

    let officialQuote = parseFloat(precio/officialUSD).toFixed(2);
    let blueQuote = parseFloat(precio/blueUSD).toFixed(2);

    return {officialQuote, blueQuote}
}

module.exports = {
    quoter
}