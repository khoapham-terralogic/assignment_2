import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFoundLayout = () => {
    const history = useHistory()
    const goBack = () => { history.push("/") }
    return (
        <section className="notfound-layout">
            <div className="notfound-layout__container">
                404 not found
            <button onClick={goBack} className="btn">Back to home page</button>
            </div>
        </section>
    );
}

export default NotFoundLayout;
