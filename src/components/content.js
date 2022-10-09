import React from 'react';

// Content component
export class Content extends React.Component{
    render(){
        // Return is used to display HTML
        return(
            <div>

                <h1>Hello world!</h1>

                <h2>It is {new Date().toLocaleTimeString()}.</h2>

            </div>
        );
    }
}