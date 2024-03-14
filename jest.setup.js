// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
import {config} from 'dotenv'

jest.setTimeout(30000);

config({
    path: '.env.test'
})
/*
require('dotenv').config({
    path: '.env.test'
});


jest.mock('./src/helpers/getEnviroments', () => {
    getEnviroments: () => ({...process.env})
});
*/