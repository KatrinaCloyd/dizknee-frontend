import React, { Component } from 'react'
import Loading from './Loading.js';
import { fetchSingleChar } from './apiUtils.js';

export default class DetailPage extends Component {
    state = {
        chosenCharacter: {},
        loading: false
    }

    componentDidMount = async () => {
        await this.setState({
            loading: true
        });
        const data = await fetchSingleChar(this.props.match.params.name);

        await this.setState({
            chosenCharacter: data.body,
            loading: false
        });
    }

    render() {
        return (
            <div>
                <h2>Welcome to the Detail Page</h2>
                {this.state.loading && <Loading />}
                <div className='detail-block' >
                    <div className='char-name'>{this.state.chosenCharacter.name} </div>
                    <img className='detail-img' alt='character' src={this.state.chosenCharacter.gif} />
                    <div>Movie: {this.state.chosenCharacter.movie}</div>
                    <div>Year of Movie: {this.state.chosenCharacter.movie_year}</div>
                    <div>Species: {this.state.chosenCharacter.species_type}</div>
                    <div>Role: {this.state.chosenCharacter.role}</div>
                    <div>Special Power: {this.state.chosenCharacter.unique_power}</div>
                    <div> {this.state.chosenCharacter.hand_drawn ? 'This character was hand drawn!' : ''}</div>
                </div>

            </div>
        )
    }
}
