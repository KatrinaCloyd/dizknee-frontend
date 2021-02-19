import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Header2 extends Component {
    render() {
        return (
            <div className='sub-header'>
                <NavLink exact activeClassName="selected" to="/" className='link'>
                    Home </NavLink>

                <NavLink exact activeClassName="selected" to="/search" className='link'>
                    Search </NavLink>

            </div>
        )
    }
}
