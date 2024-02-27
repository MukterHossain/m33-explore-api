const user = {id: 1, name: 'Gorib', job: 'actor'}
// JavaScript Object Notation (JSON)
const stringified = JSON.stringify(user)
// console.log(user)
// console.log(stringified)

/*
  print:
{ id: 1, name: 'Gorib', job: 'actor' }
{"id":1,"name":"Gorib","job":"actor"}
*/

const shop = {
    owner: 'Alia', 
    address: {
        street : 'kochukhet voot er goli',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 450000,
    isOpen :true,
    isNew: false
}
console.log(shop)

const shopJSON = JSON.stringify(shop)
console.log(shopJSON)
const shopObject = JSON.parse(shopJSON);
console.log(shopObject)