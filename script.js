const d = document.getElementById('display');

const buttonClick = val => {
    d.value += val;
    return d;
}

const clearDisplay = () => {
    return d.value = '';
}


const del = () => {
    d.value = d.value.slice(0, -1);
}


function result() {
    d.value = eval(d.value);
}