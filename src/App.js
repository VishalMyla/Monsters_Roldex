import {Component} from "react";
import logo from './logo.svg';
import './App.css';

class App extends Component{

    constructor(){
        console.log("1")
        super();
        this.state = {
            monsters:[]
        };
    }
    componentDidMount() {
        console.log("3")
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) =>
                this.setState(
                    ()=>{return {monsters:data}}, ()=>{console.log()}
                )
            )

    }

    render(){
        console.log("2");
    return (


        <div className="App">

            {this.state.monsters.map((monster)=>{
                return (<div key={monster.id}>
                    <h1>{monster.name}</h1>
                </div>);

            })}



        </div>
    );
  }

}

export default App;
