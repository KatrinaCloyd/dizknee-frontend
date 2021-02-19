import React, { Component } from 'react'
import request from 'superagent';

export default class DetailPage extends Component {
    state = {
        chosenCharacter: {}
    }

    componentDidMount = async () => {
        const data = await request.get(`https://rocky-refuge-35369.herokuapp.com/characters/${this.props.match.params.name}`);

        await this.setState({
            chosenCharacter: data.body,
        });
    }

    render() {
        return (
            <div>
                <h2>Here is the detail page</h2>
                <div className='detail-block' >
                    <div className='char-name'>{this.state.chosenCharacter.name} </div>
                    <img className='detail-img' alt='character' src={this.state.chosenCharacter.gif} />
                    <div>Movie: {this.state.chosenCharacter.movie}</div>
                    <div>Year of Movie: {this.state.chosenCharacter.movie_year}</div>
                    <div>Species: {this.state.chosenCharacter.species}</div>
                    <div>Role: {this.state.chosenCharacter.role}</div>
                    <div>Special Power: {this.state.chosenCharacter.unique_power}</div>
                    <div> {this.state.chosenCharacter.hand_drawn ? 'This character was hand drawn!' : ''}</div>
                </div>

            </div>
        )
    }
}
