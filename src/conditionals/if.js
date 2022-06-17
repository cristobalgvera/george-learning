export function isGreaterThanTen(number) {
  if (number > 10) {
    console.log(`${number} is greater than ten!`)
  } else {
    console.log(number + ' is lower than ten 😪')
  }
}

export function whatsYourRange(age) {
  if (age >= 18 && age < 50) {
    console.log('Adult');
  } else if (age >= 50) {
    console.log('Old man');
  } else {
    console.log('Child');
  }
}