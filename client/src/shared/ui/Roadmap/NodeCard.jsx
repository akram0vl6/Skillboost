import React from 'react'

export const NodeCard = ({ left, top, width, height, text, fontSize = 17, type, onClick }) => {
    const isHeader = type === "header";
    const bg = isHeader ? "transparent" : type === "topic" ? "#80e09a" : "#d9e8a5";
    const border = isHeader ? "none" : type === "topic" ? "2.7px solid #000" : "2px solid #000";
    const borderRadius = isHeader ? 0 : type === "topic" ? 5 : 8;
    const Tag = isHeader ? "h2" : "span";
    const colorText = isHeader ? "text-[var(--color-text)]" : "#020420"
  
  
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