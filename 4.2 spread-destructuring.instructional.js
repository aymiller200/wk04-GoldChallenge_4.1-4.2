/*
    - With the given shoppingList array, use array destructuring to assign each array within the shoppingList array its own variable. Then, reinitialize the shoppingList array so it is a single array containing all of the values from the original array. 
    
    - after the shoppingList array has been reinitialized, using the array.prototype.map method, map over the newly initialized shoppingList array. You should do the following within the map method:
        - include a parameter for index
        - utilize the array.prototype.push method to push the current value being mapped over into the appropriate key/value pair in the obj variable
            - you will need to implement some sort of logic to check the index of the current item being mapped over.
*/

//NOTE: Write your code below and push back to your github branch.  SUBMIT YOUR GITHUB URL IN CANVAS

let shoppingList = [
    [ 'eggs', 'milk', 'butter' ], 
    [ 'cleaner', 'trash bags', 'detergent' ], 
    [ 'thank you card', 'pens', 'gift wrapping' ], 
    [ 'shoes', 't-shirt', 'slacks' ]
];
        //0            //1          //2         //3
const [coldStuff, houseStuff, giftStuff, clothesStuff] = shoppingList

console.log(coldStuff);
console.log(houseStuff);
console.log(giftStuff);
console.log(clothesStuff);

const oneList = [...coldStuff, ...houseStuff, ...giftStuff, ...clothesStuff]

console.log(oneList)
 
let obj = {
    cleaning: [],
    gifts: [],
    clothing: [],
    grocery: []
};


const newList = oneList.map(function(item, index){

    console.log(index + ' ' + item)

    if(index<=2){
        obj.grocery.push(item)
    }else if (index>2 && index<6){
        obj.cleaning.push(item)
    }else if(index>5 && index<9){
        obj.gifts.push(item)
    }else if(index>8){
        obj.clothing.push(item)
    }          
 })

 console.log(obj)



 

