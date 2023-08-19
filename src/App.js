import {Component} from "react";
import logo from './logo.svg';
import './App.css';
import './components/cardd-list/card-list.component'
import './components/search-box/Search-box.component'
import CardListComponent from "./components/cardd-list/card-list.component";
import SearchBoxComponent from "./components/search-box/Search-box.component";
class App extends Component{

    constructor(){
        console.log("1")
        super();
        this.state = {
            monsters:[],
            searchFeild:""
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
    onSearchchange = (event)  => {
        console.log(event.target.value)

        const searchFeild = event.target.value.toLocaleLowerCase();


        this.setState(()=>{
            console.log("Updating the SearchFeild ");
            return {searchFeild}
        })
    }
    render(){
        const  filterdUser = this.state.monsters.filter((monster)=>{
            return monster.name.toLocaleLowerCase().includes(this.state.searchFeild);
        })
        console.log(filterdUser);

        console.log("2");
    return (


        <div className="App">
            <h1 className="heading">Monsters Rolodex</h1>
            <SearchBoxComponent onSerachHandler={this.onSearchchange} placeholder="search monsters" className="monsters-search-box" />


            <CardListComponent monster={filterdUser} />

        </div>
    );
  }

}

export default App;
