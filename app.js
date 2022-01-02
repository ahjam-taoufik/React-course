
// let number=0
// function render(){

//     const element=
//    <div> 
//         <h1>
//              salam alikoum 
//             <span>{number}</span> 
//         </h1>
//         <div>
//              salam alikoum 
//         </div>
//     </div>

//     ReactDOM.render(element,document.querySelector('#app'))
// }

// window.setInterval(()=>{
//     number++
//     render()
// },1000)




let number=0
const tasks=['task1','task2','task3']

function render(){
    const items=tasks.map((item,key)=><li key={key}>{item}</li>)

    const element=
   <div> 
        <h1>
             salam alikoum 
            <span>{number}</span> 
        </h1>
        <ul>
           {items}
        </ul>
    </div>

    ReactDOM.render(element,document.querySelector('#app'))
}

render()
window.setInterval(()=>{
    number++
    render()
},1000)