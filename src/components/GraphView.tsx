import ReactFlow, { Background } from "reactflow";
import "reactflow/dist/style.css";

export default function GraphView({ tasks }: any) {

  const nodes = tasks.map((t: any, i: number) => ({
    id: t.id,
    data: { label: t.description },
    position: { x: i * 200, y: 0 }
  }));

  const edges = tasks.flatMap((t: any) =>
    t.dependencies.map((d: string) => ({
      id: `${d}-${t.id}`,
      source: d,
      target: t.id
    }))
  );

  return (
    <div style={{ height: 400 }}>
      <ReactFlow nodes={nodes} edges={edges}>
        <Background />
      </ReactFlow>
    </div>
  );
}
