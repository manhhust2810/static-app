import React from 'react';

function Symbol({onClearTeam}) {
    return (
        <div className="fa fa-trash-o" 
            onClick={onClearTeam}>
        </div>)
}

export default Symbol;
