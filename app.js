// function Compose(props){return <h1>Welcome {props.name}</h1>}
// ReactDOM.render(<Compose name='ali'/>,document.querySelector('#app'))

// function Compose(props){return <h1>Welcome {props.name}  </h1>}
// ReactDOM.render(<div><Compose name='ali'/><Compose name="taoufik" /><Compose name="aicha" /></div>,document.querySelector('#app'))



function Compose({name,children}){return <h1>Welcome {name} {children}  </h1>}
ReactDOM.render(
    <Compose name='ali'> to your class</Compose>
,document.querySelector('#app'))

