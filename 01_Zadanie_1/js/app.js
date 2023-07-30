const normalFunction = function () {
    console.log(this);
};
const arrowFunction = () => {
    console.log(this);
};

const user = {
    name: 'Dawid',
    methodNorm: normalFunction,
    methodArow: arrowFunction
};

user.methodNorm();
console.log('-------------');
user.methodArow();
