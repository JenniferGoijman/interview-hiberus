import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import { Menu } from 'antd';

import { getAll } from '../../redux/actions/genres';
import { getMyUser } from '../../redux/actions/users';
import Search from '../Search/Search';

const { SubMenu } = Menu;

const Header = props => {
    const [current, setCurrent] = useState();
    useEffect(() => {
        getAll();
        getMyUser();
    }, [])
    
    const handleClick = e => {    
        setCurrent(e.key);
    };
    
    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="movies">
                <NavLink to='/movies' exact>
                    Movies
                </NavLink>
            </Menu.Item>
            <SubMenu title="Genres">
                {props.genres?.map(genre =>
                    <Menu.Item key={"genre:" + genre.id}>
                        <NavLink to={'/genre/'+ genre.id} exact>
                            {genre.name}
                        </NavLink>
                    </Menu.Item>
                )}
            </SubMenu>
            <SubMenu title="Sort by">
                <Menu.Item key={"title:az"}>
                    <NavLink to={'/movies/sort/az'} exact>
                        Title A-Z
                    </NavLink>
                </Menu.Item>
                <Menu.Item key={"title:za"}>
                    <NavLink to={'/movies/sort/za'} exact>
                        Title Z-A
                    </NavLink>
                </Menu.Item>
            </SubMenu>
            <Search placeholder="Search by movies title"></Search>
            <SubMenu title={"Hi " + props.myUser?.username} style={{position:'absolute', right:50}}>
                    <Menu.Item key={"user"}>
                        Sign out
                    </Menu.Item>
            </SubMenu>
        </Menu>
    )
}

const mapStateToProps = ({genre, user}) => ({ genres: genre.genres, myUser: user.myUser });
export default connect(mapStateToProps)(Header);