import { useCallback } from 'react';
import ReactFlow, {
  // MiniMap, // Removed
  // Controls, // Removed
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';

import CustomNode from './CustomNode'; // Import custom node

import 'reactflow/dist/style.css';

// Define node types
const nodeTypes = { custom: CustomNode };

const initialNodes = [
  { id: '1', type: 'custom', position: { x: 100, y: 150 }, data: { label: 'TEXT' } }, // Adjusted position & type
  { id: '2', type: 'custom', position: { x: 450, y: 150 }, data: { label: 'IMAGE' } }, // Adjusted position & type
  { id: '3', type: 'custom', position: { x: 800, y: 150 }, data: { label: 'VIDEO' } }, // Adjusted position & type
];

// Updated edges for smoothstep and styling
const initialEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    type: 'smoothstep',
    style: { strokeWidth: 2, stroke: '#888' },
    markerEnd: { type: 'arrowclosed', color: '#888' },
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    type: 'smoothstep',
    style: { strokeWidth: 2, stroke: '#888' },
    markerEnd: { type: 'arrowclosed', color: '#888' },
  },
];

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ ...params, type: 'smoothstep', style: { strokeWidth: 2, stroke: '#888' }, markerEnd: { type: 'arrowclosed', color: '#888' } }, eds)),
    [setEdges],
  );

  return (
    // Set dark background for the container
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#1a1a1a' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes} // Pass node types
        fitView // Fit the view to the nodes
        attributionPosition="top-right"
      >
        {/* <Controls /> */}
        {/* <MiniMap /> */}
        <Background variant="dots" gap={16} size={1} color="#444" /> {/* Darker dots */}
      </ReactFlow>
    </div>
  );
}

export default App;
