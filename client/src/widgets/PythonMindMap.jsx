import React, { useState } from 'react';
import { EDGES, NODES } from '../shared/data/graphData';



// === ВСПОМОГАТЕЛЬНЫЕ КОМПОНЕНТЫ ===
const EdgePath = ({ d, dashed }) => (
  <path 
    d={d} 
    fill="none" 
    stroke="#2B78E4" 
    strokeWidth={3.5} 
    strokeLinecap="round" 
    strokeDasharray={dashed ? "0.8, 8" : undefined} 
  />
);

const NodeCard = ({ left, top, width, height, text, fontSize = 17, type, onClick }) => {
  const isHeader = type === "header";
  const bg = isHeader ? "transparent" : type === "topic" ? "#80e09a" : "#d9e8a5";
  const border = isHeader ? "none" : type === "topic" ? "2.7px solid #000" : "2px solid #000";
  const borderRadius = isHeader ? 0 : type === "topic" ? 5 : 8;
  const Tag = isHeader ? "h2" : "span";
  const colorText = isHeader ? "text-[var(--color-text)]" : "#020420"

  const renderContent = () => {
    
  }

  return (
    <div
    onClick={onClick} 
    style={{
      position: 'absolute', left, top, width, height, background: bg,
      border, borderRadius, fontSize, textAlign: 'center', display: 'flex',
      alignItems: 'center', justifyContent: 'center', cursor: isHeader ? 'default' : 'pointer'
    }}>
      <Tag style={{ width: '100%', margin: 0, color: colorText }} className={colorText} >{text}</Tag>
    </div>
  );
};

// === ОСНОВНОЙ КОМПОНЕНТ ===
export default function PythonMindMap({isModal, setIsModal, setSelectedNode}) {

    // 2. Обработчик клика
    const handleNodeClick = (node) => {
      setSelectedNode(node);
      setIsModal(true) 
    };
    
    return (
      <div style={{ width: '100vw', height: '100vh', overflow: 'auto', position: 'relative' }}>
        <div style={{ transform: 'translate(518.33px, 161.232px) scale(0.710993)', position: 'absolute', top: 0, left: 0 }}>
          
          {/* Связи (Edges) */}
          <svg style={{ position: 'absolute', top: 0, left: 0, zIndex: 0, pointerEvents: 'none', overflow: 'visible' }}>
            {EDGES.map((edge, i) => <EdgePath key={`edge-${i}`} {...edge} />)}
          </svg>
  
          {/* Узлы (Nodes) */}
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