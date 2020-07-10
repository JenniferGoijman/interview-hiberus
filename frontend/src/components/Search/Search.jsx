import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Select, Input } from 'antd';
import { useHistory } from "react-router-dom";

import { getAll }  from '../../redux/actions/movies'
import { SearchOutlined } from '@ant-design/icons';

const { Option } = Select;

const Search = props => {
    const history = useHistory();
    const defaultValue = history.location.pathname.replace('/movies', '').replace('/', ''); //parameter from url
    
    useEffect(() => { 
        getAll();
    }, []);
    
    const handleChange = event => {
        const value = event.target.value;
        if (value) {
            history.push('/movies/' + value);
        } else {
            history.push('/movies');
        }
    };
    
    return (
        <Input 
            placeholder="Search by movie title" 
            prefix={<SearchOutlined />}
            defaultValue={defaultValue}
            style={{ width:200, position:'absolute', right:20, marginTop:9 }}
            onChange={handleChange}
        />
    )
}

const mapStateToProps = ({movie}) => ({ movies: movie.movies });
export default connect(mapStateToProps)(Search);