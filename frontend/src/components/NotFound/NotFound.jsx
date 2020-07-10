import React from 'react';
import { useHistory } from 'react-router-dom';
import { Result, Button } from 'antd';
import './NotFound.scss';

const NotFound = () => {
    const history = useHistory();

    const goHome = () => {
        history.push('/movies');
    }

    return (
        <div className="not-found-container">
            <Result 
                status="404"
                title="404" 
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary" onClick={goHome}>Back Home</Button>}
            />
        </div>
    )
}

export default NotFound;