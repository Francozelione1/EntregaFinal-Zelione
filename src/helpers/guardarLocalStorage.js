export const GuardarLocal = (clave, valor) => {
    localStorage.setItem(clave, JSON.stringify(valor));
}

export const TraerDeLocal = (clave) => {
    localStorage.getItem(JSON.parse(clave));
}