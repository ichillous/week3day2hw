console.log("Test")
var prices = {
   teeth : {
       price: 1,
       cost: 1
   },
   rustyScisors : {
       price : 5,
       cost : 5
   },
   lawnMower : {
        price: 25,
        cost: 50
    },
   fancyMower : { 
       price: 250,
       cost: 100,
       costTeam: 500
    },
    winAmounts : {
        first: 50,
        second: 100,
        third: 1000
    }
}
console.log(prices.teeth.price)
var inputValue = prompt("Whats your budget for this job")

var inputBar = () => {
    let total = inputValue
    if (inputValue >= prices.winAmounts.third) {
        alert("You are a great businessman my friend. You just made " + total)

    }
}
inputBar()