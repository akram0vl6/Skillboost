import React, { useState, useEffect, useRef, useMemo } from 'react';

import { EDGES, NODES } from '../shared/data/graphData';
import { NodeCard } from '../shared/ui/Roadmap/NodeCard';
import { EdgePath } from '../shared/ui/Roadmap/EdgePath';






export default function PythonMindMap({ isModal, setIsModal, setSelectedNode }) {
  const containerRef = useRef(null);
  const [transform, setTransform] = useState({ scale: 0.71, x: 518.33, y: 161.23 });

  // Вычисляем границы контента один раз
  const contentBounds = useMemo(() => {
    const xs = NODES.flatMap(n => [n.left, n.left + n.width]);
    const ys = NODES.flatMap(n => [n.top, n.top + n.height]);
    return {
      minX: Math.min(...xs) - 50,
      maxX: Math.max(...xs) + 50,
      minY: Math.min(...ys) - 50,
      maxY: Math.max(...ys) + 50,
    };
  }, []);

  useEffect(() => {
    const updateTransform = () => {
      if (!containerRef.current) return;
      
      const { clientWidth: cw, clientHeight: ch } = containerRef.current;
      const contentW = contentBounds.maxX - contentBounds.minX;
      const contentH = contentBounds.maxY - contentBounds.minY;
      
      const scale = Math.min(
        (cw * 0.9) / contentW,
        (ch * 0.9) / contentH,
        1 
      );
      
      const x = (cw - contentW * scale) / 2 - contentBounds.minX * scale;
  
      let y;
      if (cw <= 600) {
         y = 10 - contentBounds.minY * scale; 
      } else {

        y = (ch - contentH * scale) / 2 - contentBounds.minY * scale;
      }
      
      setTransform({ scale, x, y });
    };
  
    updateTransform();
    window.addEventListener('resize', updateTransform);
    return () => window.removeEventListener('resize', updateTransform);
  }, [contentBounds]);
  
  const handleNodeClick = (node) => {
    setSelectedNode(node);
    setIsModal(true);
  };

  return (
    <div 
      ref={containerRef}
      style={{ 
        height: '100vh', 
        overflow: 'auto', 
        position: 'relative',
      }}
    >
      <div 
        style={{ 
          transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`,
          transformOrigin: 'top left',
          position: 'absolute',
          top: 0,
          left: 0,
          willChange: 'transform'
        }}
      >
        {/* Edges */}
        <svg 
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            zIndex: 0, 
            pointerEvents: 'none',
            overflow: 'visible'
          }}
        >
          {EDGES.map((edge, i) => <EdgePath key={`edge-${i}`} {...edge} />)}
        </svg>

        {/* Nodes */}
        <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
          {NODES.map((node, i) => (
            <NodeCard 
              key={`node-${node.id || i}`} 
              onClick={() => handleNodeClick(node)} 
              {...node} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}