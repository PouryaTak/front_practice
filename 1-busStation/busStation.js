'use strict'

const t = 12 // totall capacity of bus
const a = [4, 5, 6, 3, 2] // number of students in each group


function returnBestRoutes(arrayOfStudents, busCapacity) {
    let listOfCombinations_string = [];
    let listOfCombinations_array = [];

    //  create all possible combinations of student groups
    function  createCombinations(prefix, arrayOfStudents) {
        for (let i = 0; i < arrayOfStudents.length; i++) {
            listOfCombinations_string.push(prefix + arrayOfStudents[i]);
            createCombinations(prefix + arrayOfStudents[i], arrayOfStudents.slice(i + 1));
        }
    }
    createCombinations('', arrayOfStudents);

    // converting the array of strings to an array of arrays
    for (let item of listOfCombinations_string) {
        listOfCombinations_array.push(item.split(''))
    }

    // filter arrays that have the same capacity as the bus does
    const arraysWithBusCapacityEquality = listOfCombinations_array.filter((arr) => {
        return arr.reduce((sum, a) => sum + Number(a), 0) == busCapacity
    });

    return arraysWithBusCapacityEquality.sort()
}

console.log(returnBestRoutes(a, t)) // [["4", "5", "3"], ["4", "6", "2"]]