import React from 'react';

export default function (props){
    return <div>
        <div>
            Name: {props.user.name}
        </div>
        <div>
            Email: {props.user.email}
        </div>
    </div>;
}