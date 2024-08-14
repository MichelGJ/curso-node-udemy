// const { getAge, getId, http } = require('./plugins');

// const {emailTemplate} = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// const {getUserById} = require('./js-foundation/03-callbacks');
// const {getUserById} = require('./js-foundation/04-arrow');
// const {buildMakePerson} = require('./js-foundation/05-factory');
// const getPokemonById = require('./js-foundation/06-promises');
import { buildLogger } from "./plugins/logger-plugin";
import { getPokemonById } from './js-foundation/06-promises';
import { getAge, getId, httpClient } from "./plugins";

console.log(getAge("08/12/1994"));

const logger = buildLogger('app.js');
logger.log('HOLAMUNDO');
logger.error('algo malo')

// console.log(emailTemplate)

// !CALLBACKS Y ARROWS
// const id = 1

// getUserById(id, (error,user)=>{
//     if(error){
//         throw new Error(error);
//     }
//     console.log(user);
// });


// !Referencia a la funcion factory uso
// const makePerson = buildMakePerson({getId,getAge});

// const obj = {name: 'John', birthdate: '1985-10-21'};

// const john = makePerson(obj);
// console.log(john);

getPokemonById("1")
    .then((pokemon) => console.log({ pokemon }))
    .catch((err) => console.error(err))
    .finally(() => console.log('Fin'))
