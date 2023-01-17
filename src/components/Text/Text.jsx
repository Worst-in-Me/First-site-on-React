import styles from './Text.module.css';
import { createElement } from 'react';
import cn from 'classnames';

export const Text = ({headline, size, className, children, as='div'}) => 
    createElement(
        as, 
        {
            className:cn(
                className, styles[`text_headline_${headline}`], 
                styles[`text_size_${size}`])
        }, 
        children
    );