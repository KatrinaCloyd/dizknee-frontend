import React, { Component } from 'react'
import Loading from './Loading.js';
import { fetchSingleChar, deleteChar, updateChar, speciesTypetoId } from './apiUtils.js';

export default class DetailPage extends Component {
    state = {
        chosenCharacter: {
            name: '',
            species_id: 0,
            species_type: '',
            role: '',
            unique_power: '',
            movie: '',
            movie_year: '',
            hand_drawn: true,
            image: '',
            gif: ''
        },
        upDatedCharacter: {
            name: '',
            species_id: 0,
            species_type: '',
            role: '',
            unique_power: '',
            movie: '',
            movie_year: '',
            hand_drawn: true,
            image: '',
            gif: ''
        },
        loading: false
    }

    componentDidMount = async () => {
        await this.setState({
            loading: true
        });
        const data = await fetchSingleChar(this.props.match.params.name);

        await this.setState({
            chosenCharacter: data.body,
            upDatedCharacter: data.body,
            loading: false
        });
    }
    handleNameChange = (e) => this.setState({ upDatedCharacter: { ...this.state.upDatedCharacter, name: e.target.value } });
    handleSpeciesChange = (e) => this.setState({ upDatedCharacter: { ...this.state.upDatedCharacter, species_id: Number(e.target.value) } })
    handleRoleChange = (e) => this.setState({ upDatedCharacter: { ...this.state.upDatedCharacter, role: e.target.value } })
    handlePowerChange = (e) => this.setState({ upDatedCharacter: { ...this.state.upDatedCharacter, unique_power: e.target.value } })
    handleMovieChange = (e) => this.setState({ upDatedCharacter: { ...this.state.upDatedCharacter, movie: e.target.value } })
    handleMovieYrChange = (e) => this.setState({ upDatedCharacter: { ...this.state.upDatedCharacter, movie_year: e.target.value } })
    handleDrawnChange = (e) => this.setState({ upDatedCharacter: { ...this.state.upDatedCharacter, hand_drawn: !this.state.upDatedCharacter.hand_drawn } })
    handleImageChange = (e) => this.setState({ upDatedCharacter: { ...this.state.upDatedCharacter, image: e.target.value } })
    handleGifChange = (e) => this.setState({ upDatedCharacter: { ...this.state.upDatedCharacter, gif: e.target.value } })

    handleSubmit = async (e) => {
        e.preventDefault();
        await updateChar(this.state.upDatedCharacter.id, this.state.upDatedCharacter);
        this.props.history.push('/search');
    }

    handleDelete = async (e) => {
        e.preventDefault();
        await deleteChar(this.state.chosenCharacter.name);
        this.props.history.push('/search');
    }

    render() {
        console.log(this.state.upDatedCharacter);
        return (
            <div>
                <h2>Welcome to the Detail Page</h2>
                {this.state.loading && <Loading />}
                <div className='item-list'>
                    <div className='detail-block' >
                        <div className='char-name'> {this.state.chosenCharacter.name}</div>
                        <img className='detail-img' alt='character' src={this.state.chosenCharacter.gif} />
                        <div>Movie: {this.state.chosenCharacter.movie}</div>
                        <div>Year of Movie: {this.state.chosenCharacter.movie_year}</div>
                        <div>Species: {this.state.chosenCharacter.species_type}</div>
                        <div>Role: {this.state.chosenCharacter.role}</div>
                        <div>Special Power: {this.state.chosenCharacter.unique_power}</div>
                        <div> {this.state.chosenCharacter.hand_drawn ? 'This character was hand drawn!' : ''}</div>
                    </div>
                    <form className='detail-block' >
                        <p><em>Would you like to update {this.state.chosenCharacter.name}? </em></p>
                        <label>
                            Character Name:
                        <input value={this.state.upDatedCharacter.name} onChange={this.handleNameChange} />
                        </label>
                        <label>
                            Species:
                        <select onChange={this.handleSpeciesChange}>
                                <option value='1' selected={this.state.upDatedCharacter.species_type === 'human'}>Human</option>
                                <option value='2' selected={this.state.upDatedCharacter.species_type === 'animal'}>Animal</option>
                                <option value='3' selected={this.state.upDatedCharacter.species_type === 'talking animal'}>Talking Animal</option>
                                <option value='4' selected={this.state.upDatedCharacter.species_type === 'mythical being'} >Mythical Being</option>
                            </select>
                        </label>
                        <label>
                            Role:
                        <select onChange={this.handleRoleChange} >
                                <option value=''>Choose One</option>
                                <option value='hero' selected={this.state.upDatedCharacter.role === 'hero'}>Hero</option>
                                <option value='villan' selected={this.state.upDatedCharacter.role === 'villan'}>Villan</option>
                                <option value='sidekick' selected={this.state.upDatedCharacter.role === 'sidekick'}>Sidekick</option>
                                <option value='henchman' selected={this.state.upDatedCharacter.role === 'henchman'}>Henchman</option>
                            </select>
                        </label>
                        <label>
                            Unique Power:
                    <input value={this.state.upDatedCharacter.unique_power} onChange={this.handlePowerChange} />
                        </label>
                        <label>
                            Movie:
                    <input value={this.state.upDatedCharacter.movie} onChange={this.handleMovieChange} />
                        </label>
                        <label>
                            Year of Movie:
                    <input value={this.state.upDatedCharacter.movie_year} onChange={this.handleMovieYrChange} />
                        </label>
                        <label>
                            Was this character hand drawn?
                        <select value={this.state.upDatedCharacter.hand_drawn ? 'Yes' : 'No'} onChange={this.handleDrawnChange}>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </label>
                        <label>
                            Link to an Image of this Character:
                            <input value={this.state.upDatedCharacter.image} onChange={this.handleImageChange} style={{ width: "350px" }} />
                        </label>
                        <label>
                            Link to a GIF of this Character:
                            <input value={this.state.upDatedCharacter.gif} onChange={this.handleGifChange} style={{ width: "350px" }} />
                        </label>
                        <button onClick={this.handleSubmit} >Update {this.state.chosenCharacter.name}!</button>
                        <button onClick={this.handleDelete} className='danger' >- - - - - DANGER! - - - - -  DELETE {this.state.chosenCharacter.name} </button>
                    </form>
                </div>
            </div >
        )
    }
}
