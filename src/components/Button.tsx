import React, { FunctionComponent } from "react";

interface ButtonProps {
  /**
   * Simple click handler
   */
  onClick?: () => void;
}

/**
 * The world's most _basic_ button
 */
export const Button: FunctionComponent<ButtonProps> = ({ children, onClick }) => (
  <button onClick={onClick} type="button">
    {children}
  </button>
);