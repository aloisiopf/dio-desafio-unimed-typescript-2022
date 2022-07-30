/*
 * O objetivo deste desafio é usar typescript para
 * refatorar o trecho de código em javascript abaixo
 *
 * let employee = {};
 * employee.code = 10;
 * employee.name = "John";
 */

// Solução 1
const employee1 = {
    code: 10,
    name: 'John'
};

// Solução 2 - Utilização de interfaces
interface Employee {
    code: number,
    name: string
};

const employee2: Employee = {
    code: 10,
    name: 'John'
}