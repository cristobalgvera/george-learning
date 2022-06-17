export function iterate(number) {
  for (let index = 1; index <= number; index++) {
    console.log(`${index} of ${number}`);
  }
}

export function forEach(arrayOfNumber) {
  arrayOfNumber.forEach((number) => {
    console.log(number * 2);
  });

  for (let index = 0; index < arrayOfNumber.length; index++) {
    console.log(arrayOfNumber[index]);
  }

  for (const number of arrayOfNumber) {
    console.log(number * 2);
  }
}

export function forObject(obj) {
  for (const key in obj) {
    if (key === "address") continue;

    const value = obj[key];

    console.log(`${key}: ${value}`);
  }
}

// TODO: Next task
const array = [
  { name: "Cris", surname: "Gajardo" },
  { name: "Marcela", surname: "Ruiz" },
  // (...)
];