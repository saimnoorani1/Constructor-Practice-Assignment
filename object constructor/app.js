function Shoes(name , price , color , size){
    this.brandName = name
    this.shoesPrice = price
    this.shoesColor = color
    this.shoesSize = size
}

let shoe1 = new Shoes("Nike" , 12000 , "Blue" , 43)
let shoe2 = new Shoes("Addidas" , 15000 , "White" , 44)

console.log("Shoes Details Are Here : ",shoe1);
console.log("Shoes Details Are Here : ",shoe2);




function Shirt(name , price , color , size){
    this.brandName = name
    this.Price = price
    this.Color = color
    this.Size = size
}

let shirt1 = new Shirt("Badnam" , 4500 , "Blue" , "Medium")
let shirt2 = new Shirt("Badnam" , 5500 , "White" , "Large")

console.log("Shirt Details Are Here : ",shirt1);
console.log("Shirt Details Are Here : ",shirt2);




function Soda(name , price , flavor , size){
    this.brandName = name
    this.Price = price
    this.flavor = flavor
    this.Size = size
}

let s1 = new Soda("pepsico" , 160 , "pepsi" , "1 liter")
let s2 = new Soda("pakola" , 210 , "pakola" , "1.5 liter")

console.log("Coldrink Details Are Here : ",s1);
console.log("Coldrink Details Are Here : ",s2);






// Without Prototype Keyword

// function UserData(name , age , email , password){
//     this.Name = name
//     this.age = age
//     this.email = email
//     this.password = password

//     this.displayfunction = function (){
//         console.log("User Name Is ", this.Name);
//         console.log("User Age Is ", this.age);
//         console.log("User Email Is ", this.email);
//         console.log("User Password Is ", this.password);
        
//     }
// }

// let U1 = new UserData("Saim" , 18 , "saimnoorani2007@gmail.com" , 12345678)
// let U2 = new UserData("Basil" , 19 , "Basil@gmail.com" , 12345678)

// U1.displayfunction()
// U2.displayfunction()

// console.log("User 1 Details Are Here : ",U1);
// console.log("User 2 Details Are Here : ",U2);




// With Prototype Keyword


function UserData(name , age , email , password){
    this.Name = name
    this.age = age
    this.email = email
    this.password = password

}

UserData.prototype.displayfunction = function (){
        console.log("User Name Is ", this.Name);
        console.log("User Age Is ", this.age);
        console.log("User Email Is ", this.email);
        console.log("User Password Is ", this.password);
        
    }

let U1 = new UserData("Saim" , 18 , "saimnoorani2007@gmail.com" , 12345678)
let U2 = new UserData("Basil" , 19 , "Basil@gmail.com" , 12345678)

U1.displayfunction()
U2.displayfunction()

console.log("User 1 Details Are Here : ",U1);
console.log("User 2 Details Are Here : ",U2);

console.log("---------- Has Own Property ----------");

console.log("User 1 " , U1 , U1.hasOwnProperty("displayfunction"));

console.log("--------------------");

console.log("---------- In Keyword ----------");


console.log("User 1 " , U1 , "displayfunction()" in U1);

console.log("--------------------");