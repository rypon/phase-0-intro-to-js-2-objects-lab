// Write your solution in this file!
// const employee = {
//     name: 'Ryan',
//     streetAddress: '1 Havemeyer'
// };

let employee = {
    name: '',
    streetAddress: '',
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, { [key]: value })
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign(employee, { [key]: value })
}

function deleteFromEmployeeByKey(employee, key) {
    const newObject = Object.assign({}, employee)
    delete newObject[key]
    return newObject;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // const newObject = Object.assign(employee, key)
    // newObject[employee] = ''
    // return newObject[key];
    delete employee[key];
    return employee;
}
