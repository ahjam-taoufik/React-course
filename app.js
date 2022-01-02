

class Compose extends React.Component{
    render(){
       // console.log(this.props);
        return <h1>Welcome {this.props.name}</h1>
    }
}


function Main(){
    return  <div>
           <Compose name='ali'> to your class</Compose>
           <Compose name='mostapha'> to your class</Compose>
          </div>
}

ReactDOM.render(
      <Main/>
,document.querySelector('#app'))

