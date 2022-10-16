// a = 34;
// b = [342, 4, 5];
// stuDetails = ['Ramu', 43567, 'Lucknow'];
// details = { name : 'Ramu', rolno : 4356, adress : 'Lucknow' };

const user = {
    name : 'Raju',
    email : 'raju@mail.com',
    password : '234@3'
};

console.log(user);

console.log(user.name);
console.log(user['email']);

// adding new key
user.city = 'Bangalore';
console.log(user);

user.password = '45678';
console.log(user);

// WAP to check whether 'age' exists in user object or not.
// and if doesn't exists add to object

let key = 'age';
let age = 38;

if( key in user ){
    console.log('it exists');
}else{
    console.log('it doesnt');
    user[key] = age;
}

console.log(user);

const [ brand, model, price, color, storage ] = 
[ 'Samsung', 'S22', 51999, 'black', 64 ];

const smartphone = { brand, model, price, color, storage };
console.log(smartphone);

console.log( Object.keys(smartphone) );
console.log( Object.values(smartphone) );