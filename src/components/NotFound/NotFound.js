import React from 'react';

const NotFound = () => {
    const style404 = {
        minHeight:'60vh', 
        display:'flex', 
        flexDirection:'column', 
        justifyContent:'center', 
        alignItems:'center',
        lineHeight: '50px'
    }

    return (
        <div style={style404}>
            <h1>Sorry page not Found</h1>
            <h3>404 Error occured !!!</h3>
        </div>
    );
};

export default NotFound;