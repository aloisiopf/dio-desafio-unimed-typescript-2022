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
var occupation;
(function (occupation) {
    occupation[occupation["Analista de Sistemas"] = 0] = "Analista de Sistemas";
    occupation[occupation["Atriz"] = 1] = "Atriz";
    occupation[occupation["Padeiro"] = 2] = "Padeiro";
    occupation[occupation["Professor"] = 3] = "Professor";
})(occupation || (occupation = {}));
var person = {
    name: 'Maria',
    age: 29,
    occupation: occupation.Atriz
};
var person1 = {
    name: 'Carlos',
    age: 19,
    occupation: occupation.Padeiro
};
