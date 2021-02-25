import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Loading from './Loading.js';
import './search.css';
import { fetchChars } from './apiUtils.js';

export default class SearchPage extends Component {
    state = {
        chars: [],
        loading: false,
        sortBy: 'name'
    }

    componentDidMount = async () => {
        await this.setState({ loading: true, });
        const data = await fetchChars();
        await this.setState({
            chars: data.body,
            loading: false
        });
    }

    handleSortChange = (e) => this.setState({ sortBy: e.target.value });

    render() {
        const sortArray = (arr) => {
            arr.sort((a, b) => a[this.state.sortBy].localeCompare(b[this.state.sortBy]))
            return arr;
        }

        const sortedArray = sortArray(this.state.chars);

        const character = sortedArray.map(char =>
            <Link to={`search/${char.name}`} className='item-block' key={char.name}>
                <img className='char-img' alt='character' src={char.image} />
                <div className='name'>Name: {char.name} </div>
                <div>Movie: {char.movie}</div>
                <div>Role: {char.role}</div>
                <div>Species: {char.species_type}</div>
            </Link>
        );
        return (
            <div>
                <div className='sort'>
                    <label>
                        Sort All Characters By:
                        <select onChange={this.handleSortChange}>
                            <option value='name'>Name</option>
                            <option value='movie'>Movie</option>
                            <option value='role'>Role</option>
                            <option value='species_type'>Species</option>
                        </select>
                    </label>
                </div>
                <div className='item-list'>
                    {this.state.loading && <Loading />}
                    {character}
                </div>
            </div>
        )
    }
}
