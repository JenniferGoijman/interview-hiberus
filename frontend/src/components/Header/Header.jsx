import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import './Header.scss';
import { Menu } from 'antd';

import { getAll } from '../../redux/actions/genres';
import { getMyUser, logout } from '../../redux/actions/users';
import Search from '../Search/Search';

const { SubMenu } = Menu;

const Header = props => {
    const history = useHistory();
    const [current, setCurrent] = useState();
    useEffect(() => {
        getAll();
        getMyUser();
    }, [])
    
    const handleClick = e => {    
        setCurrent(e.key);
    };

    const handleSignOut = () => {
        logout();
        setTimeout(() => {
            history.push('/movies')
        }, 1500);
    }
    
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

            { 
                !props.myUser && 
                    <Menu.Item key="login" style={{position:'absolute', right:50}}>
                        <NavLink to='/login' exact>
                            Iniciar sesión
                        </NavLink>
                    </Menu.Item>
            }
            
            {
                props.myUser && 
                    <SubMenu title={"Hi " + props.myUser?.username} style={{position:'absolute', right:50}}>
                        <Menu.Item key={"user"} onClick={handleSignOut}>
                            Sign out
                        </Menu.Item>
                    </SubMenu>
            }
        </Menu>
    )
}

const mapStateToProps = ({genre, user}) => ({ genres: genre.genres, myUser: user.myUser });
export default connect(mapStateToProps)(Header);