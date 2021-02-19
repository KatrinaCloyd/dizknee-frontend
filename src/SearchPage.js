import React, { Component } from 'react'
import request from 'superagent';
import { Link } from 'react-router-dom';
import './search.css';

export default class SearchPage extends Component {
    state = {
        chars: []
    }
    componentDidMount = async () => {
        await this.fetchChars();
    }

    fetchChars = async () => {
        const data = await request.get(`https://dizknee-express.herokuapp.com/characters`);

        await this.setState({
            chars: data.body.results,
        });
    }
    render() {
        console.log(this.state.chars);
        const character = this.state.chars.map(char =>
            <Link to={`search/${char.name}`} className='item-block' key={char.name}>
                <img className='char-img' alt='character' src={char.image} />
                <div className='name'>Name: {char.name} </div>
                <div>Movie: {char.movie}</div>
            </Link>
        );
        return (
            <div>
                <div className='item-list'>
                    {character}
                </div>
            </div>
        )
    }
}
