var nameVar = 'Taylor'
var nameVar = 'Andrew'
console.log('nameVar', nameVar)

let nameLet = 'Taylor'
nameLet = 'Andrew'
console.log('nameLet', nameLet)

const nameConst = 'Taylor'
console.log('nameConst', nameConst)

// block scoping

const fullName = 'Taylor Stauss'
let firstName

if (fullName) {
  let firstName = fullName.split(' ')[0]
  console.log(firstName)
}
console.log(firstName)