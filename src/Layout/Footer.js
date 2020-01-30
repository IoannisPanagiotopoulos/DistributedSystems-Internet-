import React, { Component } from 'react';

class Footer extends Component {
    render() {
        var style = {
            backgroundColor: "#141618",
            borderTop: "1px solid #E7E7E7",
            textAlign: "center",
            padding: "20px",
            position: "fixed",
            left: "0",
            bottom: "0",
            height: "60px",
            width: "100%",
        }
        
        var phantom = {
          display: 'block',
          padding: '20px',
          height: '60px',
          width: '100%',
        }
        return(
            <div>
                <div style={phantom} />
                <div style={style}>
                    Harokopio @ 2020
                </div>
            </div>
        );
    }
}

export default Footer;