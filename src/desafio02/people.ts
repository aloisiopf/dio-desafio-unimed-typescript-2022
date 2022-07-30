/*
 * O objetivo deste desafio é usar typescript para
 * refatorar o trecho de código em javascript abaixo
 *
 * let person = {};
 * person.name = "Maria";
 * person.age = 29;
 * person.occupation = "Atriz"
 * 
 * let person1 = {
 *  name = "Carlos",
 *  age = 19,
 *  occupation = "Padeiro"
 * }
 */

//Solução: Utilização do enum para definir profissões
enum occupation {
    'Analista de Sistemas',
    Atriz,
    Padeiro,
    Professor,
}

type Person = {
    name: string,
    age: number,
    occupation: occupation
}

let person: Person = {
    name: 'Maria',
    age: 29,
    occupation: occupation.Atriz
};

let person1: Person = {
    name: 'Carlos',
    age: 19,
    occupation: occupation.Padeiro
};