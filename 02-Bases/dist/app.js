"use strict";
// const { getAge, getId, http } = require('./plugins');
Object.defineProperty(exports, "__esModule", { value: true });
// const {emailTemplate} = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// const {getUserById} = require('./js-foundation/03-callbacks');
// const {getUserById} = require('./js-foundation/04-arrow');
// const {buildMakePerson} = require('./js-foundation/05-factory');
// const getPokemonById = require('./js-foundation/06-promises');
const logger_plugin_1 = require("./plugins/logger-plugin");
const _06_promises_1 = require("./js-foundation/06-promises");
const plugins_1 = require("./plugins");
console.log((0, plugins_1.getAge)("08/12/1994"));
const logger = (0, logger_plugin_1.buildLogger)('app.js');
logger.log('HOLAMUNDO');
logger.error('algo malo');
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
(0, _06_promises_1.getPokemonById)("1")
    .then((pokemon) => console.log({ pokemon }))
    .catch((err) => console.error(err))
    .finally(() => console.log('Fin'));
