// you order tomato soup 
// Meanwhile continue doing what you're doing
// RESOLVE your sever brings you soup
// REJECTED no soup today

// const orderSoup =() => console.log(`soup is ready`);

// console.log(`1`)
// setTimeout(orderSoup ,2000);
// console.log(`3`)


// const promise1 = new Promise((resolve, reject)=> {
//     setTimeout(()=> {
//         isReady = [true, false][(Math.floor(Math.random()*2))]
//         isReady ? resolve('✅ soup is ready 🥣'): reject(`❌ No soup today`)}, 2000 )
// })


// console.log(promise1
//     .then (success => console.log({success}))
//     .catch (error => console.log({error}))
// )








// console.log(`fetch:`,
// fetch('https://dog.ceo/api/breeds/image/random')
// .then(response => response.json())
// .then(data => console.log(data))
// )


//Rules for async await
// 1 must create a function
// 2 must use keyword async & await


// const getDog = async () =>{
//     const response = await fetch(`https://dog.ceo/api/breeds/image/random`)
//     const data = await response.json()
//     console.log(data)
// }

// getDog()


const promise1 = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        isReady = [true, false][(Math.floor(Math.random()*2))]
        isReady ? resolve('✅ soup is ready 🥣'): reject(`❌ No soup today`)}, 2000 )
})



const getSoup = async () =>{
    const data = {rating: null, tip: null, pay: null, total: null, total: null, review: null}
   

    try{
         const soup = await promise1
         console.log({soup})
         data.rating = 5
         data.tip = 0.1
         data.pay = 10
         data.total = (data.pay+(data.pay*data.tip))
         data.review = `Very good, would come again`
         return data
         
    }catch (error) {
console.log({error})
        data.rating = 0.01
        data.tip = 0
        data.pay = 0.10
        data.total = (data.pay+(data.pay*data.tip))
        data.review = `Must try harder`
       return data
         }
         
        }
    
        
//********* IS THERE IS A PROMISE{} IN THE CONSOLE USE .THEN */
getSoup(). then(value => console.log(value))