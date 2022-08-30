// you order tomato soup 
// Meanwhile continue doing what you're doing
// RESOLVE your sever brings you soup
// REJECTED no soup today

// const orderSoup =() => console.log(`soup is ready`);

// console.log(`1`)
// setTimeout(orderSoup ,2000);
// console.log(`3`)


const promise1 = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        isReady = [true, false][(Math.floor(Math.random()*2))]
        isReady ? resolve('✅ soup is ready 🥣'): reject(`❌ No soup today`)}, 2000 )
})


console.log(promise1
    .then (success => console.log({success}))
    .catch (error => console.log({error}))
)