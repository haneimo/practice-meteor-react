import React from 'react';
import { Card } from 'react-bootstrap';

export const Lane = (props) => {
    return (
        <div className="col">
            <div className="card center-block">
                <h2 className="title">{props.title}</h2>
                {[...Array(5)].map((i)=>{
                    return(
                        <Card contentEditable="true" style={{margin: '2px', padding: '2px'}}>カード{i}</Card>
                    );
                })}
            </div>
        </div>
    );
}