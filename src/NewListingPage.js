import React, { Component } from 'react'
import './form.css'

export default class NewListingPage extends Component {
    render() {
        return (
            <div className='home'>
                <h3>Here YOU Can create a New Charcter and add it to our Character Listings!</h3>
                <form>
                    <label>
                        Character Name:
                        <input />
                    </label>
                    <label>
                        Species:
                        <select>
                            <option>Human</option>
                            <option>Animal</option>
                            <option>Talking Animal</option>
                            <option>Mythical Being</option>
                        </select>
                    </label>
                    <label>
                        Role:
                        <select>
                            <option>Hero</option>
                            <option>Villan</option>
                            <option>Sidekick</option>
                            <option>Henchman</option>
                        </select>
                    </label>
                    <label>
                        Unique Power:
                    <input />
                    </label>
                    <label>
                        Movie:
                    <input />
                    </label>
                    <label>
                        Year of Movie:
                    <input />
                    </label>
                    <label>
                        Was this character hand drawn?
                        <select>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </label>
                    <label>
                        Link to an Image of this Character:
                    <input />
                    </label>
                    <label>
                        Link to a GIF of this Character:
                    <input />
                    </label>
                    <button>Add Character!</button>
                </form>
            </div>
        )
    }
}
