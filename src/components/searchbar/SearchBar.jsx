import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' }


    onChangeHandler = (e) => {
        e.preventDefault();
        this.setState({ term: e.target.value })
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        this.props.onQuerySubmit(this.state.term);
    }

    render() { 
        return ( 
            <div className="searh-bar ui segment">
                <form className="ui form" onSubmit={this.onSubmitHandler}>
                    <div className="field">
                        <label>Search Video</label>
                        <input type="text"
                        value={this.state.term}
                        onChange={this.onChangeHandler}
                         />
                    </div>
                </form>
            </div>
         );
    }
}
 
export default SearchBar;   

 
