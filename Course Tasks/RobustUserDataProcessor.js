const users = [
  { name: 'Alice', age: 25},
  { name: 'Bob', age: -17}
]

function processUserData (userArray) {
    for (const user of userArray) {
        try {
            if (typeof user.name !== 'string' || user.name === "") {
                throw new Error('Invalid user name.')
            }
            if (typeof user.age !== 'number' || user.age < 0) {
                throw new Error('Invalid user age.')
            }
            console.log(`Processing user: ${user.name}`);
        }
        catch (error) {
            console.error('Error processing data:', error.message);
        } 
        finally {
            console.log('User processing cycle complete.');
        }
    }
}
processUserData(users);