module.exports = (objetoParamns) => {
    for (let propriedade in objetoParamns) {
        if (/Id|id/.test(propriedade)) {
            objetoParamns[propriedade] = Number(objetoParamns[propriedade]);
        }
    }
    return objetoParamns
};
