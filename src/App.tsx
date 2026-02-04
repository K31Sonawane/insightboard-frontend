import { useState } from "react";
import TranscriptForm from "./components/TranscriptForm";
import JobStatus from "./components/JobStatus";
import GraphView from "./components/GraphView";

export default function App() {
  const [jobId, setJobId] = useState<string | null>(null);
  const [tasks, setTasks] = useState<any[]>([]);

  return (
    <div style={{ padding: 5 }}>
      <h3>InsightBoard AI</h3>

      {!jobId && <TranscriptForm onJobCreated={setJobId} />}

      {jobId && !tasks.length && (
        <JobStatus jobId={jobId} onDone={setTasks} />
      )}

      {tasks.length > 0 && <GraphView tasks={tasks} />}
    </div>
  );
}
