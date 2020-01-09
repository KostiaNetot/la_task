'use strict';
// Fetch 10 users from the array
// Call processUser(users[i].id)
// Process those 10 users in parallel
// Wait for those 10 to finish processing
// Then sum the result of the promise
// Then recursivly run the next 10 users...
// Until the `users` array is empty

// Then finally spit out total collect sum .
// Your response should be "Total: 4950"


let total = 0;

function processUser(id) {
  let random = (Math.floor(Math.random() * 10) + 1) * 100;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Waited: ', random);

      resolve(id);
    }, random);
  });
}

async function processForTen(arr) {
  let sum = 0;
  for (let user of arr) {
    sum += await processUser(user.id);
  }
  return sum;
}

async function startRecursive() {
  const tenUsers = users.splice(0, 10);
  const sumOfTen = await processForTen(tenUsers);
  total += sumOfTen;
  console.log('Current ten users processed');

  if (users.length != 0) {
    await startRecursive();
  }
  if (users.length === 0) {
    return total;
  }
}

startRecursive()
  .then(total => {
    console.log('Total: ', total);
  });

