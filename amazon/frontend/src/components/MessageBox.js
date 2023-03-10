import React from 'react';

export default function MessageBox(props) {
  return (
    <div className={`alert alert-${props.variant || 'info'}`} role="alert">
      {props.children}
    </div>
  );
}
