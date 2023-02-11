import React from 'react';

export const Lane = () => {

    return (
        <div className="col">
            <ul className="nes-list is-disc">
                <li>Item1</li>
            </ul>
            <div className="nes-container with-title">
                <h2 className="title">メモ</h2>
                <div className="nes-textarea">メモ１</div>
                {[...Array(5)].forEach((i)=>{
                    return(
                        <div>カード{i}</div>
                    );
                })}
            </div>
        </div>
    );
}