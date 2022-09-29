import "./Text.scss";
import React from "react";
import { TextProps } from './Text.types';

/**
/**
 * @description Text component
 * @param TextProps {id, type, state, message}
 * @returns React forwardref component
 */
const Text = ({id, type, state, message}: TextProps) => {
  return (
    <>
    <div className="text-item"><span>Id : </span>{id}</div>
    <div className="text-item"><span>Type : </span>{type}</div>
    <div className="text-item"><span>State : </span><span className="text-item__state">{state}</span></div>
    <div className="text-item"><span>Message : </span>{message}</div>
    <div className="text-item"><a href="#">Details</a></div>
    </>
  );
};

export { Text };