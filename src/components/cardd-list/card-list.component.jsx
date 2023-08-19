import {Component} from "react";
import './card-list.styles.css'
import CardComponent from "../card/card.component";

class CardListComponent extends Component {
 render() {
     console.log(this.props)
     console.log("Rendering from the CardList ")
     const {monster}= this.props;
    console.log(monster);
     return(
         <div className="card-list">
             {monster.map((monster)=>{
                 return( <CardComponent monster={monster} />);

             })}
         </div>
     );
 }


}
export default CardListComponent;