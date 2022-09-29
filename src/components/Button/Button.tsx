/* eslint-disable react/display-name */
import "./Button.scss";
import React, { PropsWithChildren, useMemo } from 'react';
import { ButtonProps } from './Button.types';

/**
 * @description Button component
 * @returns React forwardref component
 */
const Button = React.forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(({type="button", text, className, ...rest}: ButtonProps, ref) => {

  // this method memorizes class value not to recalculate at every render 
  const buttonClass = useMemo(()=> {
        return (`btn ${className ? className : ""}`).trim();
  },[className]);

  return (
    <button ref={ref} className={buttonClass} type={type} {...rest}>
      {text}
    </button>
  );
});

export { Button };