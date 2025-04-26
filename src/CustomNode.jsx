import React from 'react';
import { Handle, Position } from 'reactflow';

// Basic custom node component matching the style (dark, rounded)
// We ignore the specific content for now as requested
function CustomNode({ data }) {
  return (
    <div className="react-flow__node-custom">
      {/* Handles for connections */}
      <Handle type="target" position={Position.Left} id="a" />
      <div>
        {/* Node title/label could go here */}
        {data.label && <strong>{data.label}</strong>}
        {/* Placeholder for content area */}
        <div className="custom-node-content-placeholder"></div>
      </div>
      <Handle type="source" position={Position.Right} id="b" />
    </div>
  );
}

export default React.memo(CustomNode); 