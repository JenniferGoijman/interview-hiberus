import React, { useState } from 'react';
import './Header.scss';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';

const { SubMenu } = Menu;

const Header = () => {
    const [current, setCurrent] = useState();
    
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
            {/* <SubMenu title="Genres">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item> 
            </SubMenu> */}
      </Menu>
    )
}

export default Header;