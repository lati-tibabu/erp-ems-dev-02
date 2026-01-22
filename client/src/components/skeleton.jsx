import React from 'react';
import './skeleton.css';

const Skeleton = ({ width, height, borderRadius, style }) => {
  return (
    <div
      className="skeleton-loader"
      style={{
        width: width || '100%',
        height: height || '20px',
        borderRadius: borderRadius || '4px',
        ...style,
      }}
    />
  );
};

export default Skeleton;
