const users = [
  { name: 'Alice', age: 25, isActive: true },
  { name: 'Bob', age: 17, isActive: true },
  { name: 'Charlie', age: 70, isActive: false },
  { name: 'David', age: 45, isActive: true },
  { name: 'ADMIN', age: 99, isActive: true },
  { name: 'Eve', age: 33, isActive: true }
];

function processUserData(userArray) {
    const usersName = [];
    
    for (const user of userArray) { 
        if (user.name === 'ADMIN') {
            break;
        }
        if (user.isActive === false) {
            continue;
        }
        if (user.age < 18) {
            console.log(`${user.name} is a minor`);
        }
        else if (user.age >= 18 && user.age <= 65) {
            console.log(`${user.name} is an adult`);
        } 
        else {
            console.log(`${user.name} is a senior`);
        }
        usersName.push(user.name);
    }
    return usersName;
}

console.log(processUserData(users));
