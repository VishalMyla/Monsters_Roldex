import {Component} from "react";
import './search-box.styles.css'
class SearchBoxComponent extends Component {
    render() {
    return(
        <input
            className={` search-box  ${this.props.className}`}
            type="search"
            placeholder={this.props.placeholder}
            onChange = {this.props.onSerachHandler}

        />
    );

    }


}
export default SearchBoxComponent;