import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Header2 extends Component {
    render() {
        return (
            <div className='sub-header'>
                <NavLink exact activeClassName="active" to="/" className='link'>
                    Home </NavLink>

                <NavLink exact activeClassName="active" to="/search" className='link'>
                    List of Characters </NavLink>

                <NavLink exact activeClassName="active" to="/newItem" className='link'>
                    Add A Character </NavLink>

            </div>
        )
    }
}
