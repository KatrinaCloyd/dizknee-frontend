import React, { Component } from 'react'
import { addNewChar } from './apiUtils.js';
import './form.css'

export default class NewListingPage extends Component {
    state = {
        name: '',
        species_id: 1,
        role: '',
        unique_power: '',
        movie: '',
        movie_year: '',
        hand_drawn: true,
        image: '',
        gif: ''
    }

    handleNameChange = (e) => this.setState({ name: e.target.value })
    handleSpeciesChange = (e) => this.setState({ species_id: Number(e.target.value) })
    handleRoleChange = (e) => this.setState({ role: e.target.value })
    handlePowerChange = (e) => this.setState({ unique_power: e.target.value })
    handleMovieChange = (e) => this.setState({ movie: e.target.value })
    handleMovieYrChange = (e) => this.setState({ movie_year: e.target.value })
    handleDrawnChange = (e) => this.setState({ hand_drawn: !this.state.hand_drawn })
    handleImageChange = (e) => this.setState({ image: e.target.value })
    handleGifChange = (e) => this.setState({ gif: e.target.value })

    render() {
        console.log(this.state);
        return (
            <div className='home'>
                <h3>Here YOU Can create a New Charcter and add it to our Character Listings!</h3>
                <form>
                    <label>
                        Character Name:
                        <input value={this.state.name} onChange={this.handleNameChange} />
                    </label>
                    <label>
                        Species:
                        <select value={this.state.species_id} onChange={this.handleSpeciesChange}>
                            <option value='1'>Human</option>
                            <option value='2'>Animal</option>
                            <option value='3'>Talking Animal</option>
                            <option value='4'>Mythical Being</option>
                        </select>
                    </label>
                    <label>
                        Role:
                        <select value={this.state.role} onChange={this.handleRoleChange} >
                            <option value='hero'>Hero</option>
                            <option value='villan'>Villan</option>
                            <option value='sidekick'>Sidekick</option>
                            <option value='henchman'>Henchman</option>
                        </select>
                    </label>
                    <label>
                        Unique Power:
                    <input value={this.state.unique_power} onChange={this.handlePowerChange} />
                    </label>
                    <label>
                        Movie:
                    <input value={this.state.movie} onChange={this.handleMovieChange} />
                    </label>
                    <label>
                        Year of Movie:
                    <input value={this.state.movie_year} onChange={this.handleMovieYrChange} />
                    </label>
                    <label>
                        Was this character hand drawn?
                        <select value={this.state.hand_drawn ? 'Yes' : 'No'} onChange={this.handleDrawnChange}>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </label>
                    <label>
                        Link to an Image of this Character:
                    <input value={this.state.image} onChange={this.handleImageChange} />
                    </label>
                    <label>
                        Link to a GIF of this Character:
                    <input value={this.state.gif} onChange={this.handleGifChange} />
                    </label>
                    <button>Add Character!</button>
                </form>
            </div>
        )
    }
}
