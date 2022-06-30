import React from 'react';
import './Button.scss';
import classNames from 'classname';

const Buttons = ({children, size, color}) => {
    return (
        // <button className={`Button ${size}`}>{children}</button>
        <button className={classNames('Button', size, color)}>{children}</button>
    );
};

export default Buttons;