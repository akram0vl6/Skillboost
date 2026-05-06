import React from 'react'

export const EdgePath = ({ d, dashed }) => (
    <path 
      d={d} 
      fill="none" 
      stroke="#2B78E4" 
      strokeWidth={3.5} 
      strokeLinecap="round" 
      strokeDasharray={dashed ? "0.8, 8" : undefined} 
    />
  );
