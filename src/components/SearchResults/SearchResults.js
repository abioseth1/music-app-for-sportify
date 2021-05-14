import React from "react";
import "./Searchesults.css";
import TrackList from "../TrackList/TrackList";


class Searchesults extends React.Component {
    render() {
        return(
            <div className = "SearchResults">
                <h2> Results</h2>
                <TrackList tracks = {this.props.Searchesults} onAdd = {this.props.onAdd}/>
            </div>
        );

    }
}

export default SearchResults;
