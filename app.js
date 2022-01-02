// document.querySelector('#app').innerHTML='<h1>salam alikoum</h1>'


//const element=React.createElement('h1',{},'Hello Word...','Hello every one....')
//console.log(element);
//===============================================================

// const element=React.createElement('h1',{},'Hello Word...')
// ReactDOM.render(element,document.body)
//=============================================================


// const element=React.createElement('h1',{},'Hello Word...')
// ReactDOM.render(element,document.querySelector('#app'))

//===========================================================

// const element=React.createElement('h1',{},'Hello Word...',
//             React.createElement('span',{},0))
// ReactDOM.render(element,document.querySelector('#app'))

//===========================================================


let number=0
function func1(){
    const element=React.createElement('h1',{},'Hello Word...',
                React.createElement('span',{},number))
    ReactDOM.render(element,document.querySelector('#app'))
}


// function func1(){
//     document.querySelector('#app').innerHTML='<h1>salam alikoum <span>'+number+'</span></h1>'
// }

func1()
window.setInterval(()=>{
    number++
    func1()
},1000)