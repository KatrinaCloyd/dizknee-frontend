import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Loading from './Loading.js';
import './search.css';
import { fetchChars, fetchSpecies } from './apiUtils.js';

export default class SearchPage extends Component {
    state = {
        chars: [],
        species: [],
        loading: false,
        sortBy: 'name',
        filterBy: ''
    }

    componentDidMount = async () => {
        await this.setState({ loading: true, });
        const data = await fetchChars();
        const speciesArr = await fetchSpecies();
        await this.setState({
            chars: data.body,
            species: speciesArr.body,
            loading: false
        });
    }

    handleSortChange = (e) => this.setState({ sortBy: e.target.value });
    handleFilterChange = (e) => this.setState({ filterBy: e.target.value });
    filterCharacters = (sort, chars) => {
        if (sort === '') {
            return chars;
        } else {
            let filtChar = chars.filter(e => e.species_type === sort);
            return filtChar;
        };
    };

    render() {
        const sortArray = (arr) => {
            arr.sort((a, b) => a[this.state.sortBy].localeCompare(b[this.state.sortBy]))
            return arr;
        }

        const sortedArray = sortArray(this.state.chars);
        const filtArray = this.filterCharacters(this.state.filterBy, sortedArray);

        const character = filtArray.map(char =>
            <Link to={`search/${char.name}`} className='item-block' key={char.name}>
                <img className='char-img' alt='character' src={char.image} />
                <div className='name'>Name: {char.name} </div>
                <div>Movie: {char.movie}</div>
                <div>Role: {char.role}</div>
                <div>Species: {char.species_type}</div>
            </Link>
        );

        const spcOptions = this.state.species.map(spc =>
            <option key={spc.name} value={spc.name}>{spc.name}</option>
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
                    <label>
                        Show Only Characters That Are:
                        <select onChange={this.handleFilterChange}>
                            <option value=''> Show All Species </option>
                            {spcOptions}
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
