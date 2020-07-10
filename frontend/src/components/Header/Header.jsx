import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './Header.scss';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { getAll } from '../../redux/actions/genres';

const { SubMenu } = Menu;

const Header = props => {
    const [current, setCurrent] = useState();

    useEffect(() => {
        getAll()
    }, [])
    
    const handleClick = e => {    
        setCurrent(e.key);
      };
    
    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="movies">
                <NavLink to='/' exact>
                    Movies
                </NavLink>
            </Menu.Item>
            <SubMenu title="Genres">
                {props.genres.map(genre =>
                    <Menu.Item key={"genre:" + genre.id}>{genre.name}</Menu.Item>
                )}
            </SubMenu>
      </Menu>
    )
}

const mapStateToProps = ({genre}) => ({ genres: genre.genres });
export default connect(mapStateToProps)(Header);