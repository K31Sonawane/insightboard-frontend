import { useState } from "react";
import { submitTranscript } from "../api/graphApi";

export default function TranscriptForm({ onJobCreated }: any) {
  const [text, setText] = useState("");

  async function handleSubmit() {
    const res = await submitTranscript(text);
    onJobCreated(res.data.jobId);
  }

  return (
    <div>
      <textarea
        rows={6}
        placeholder="Paste meeting transcript..."
        value={text}
        onChange={e => setText(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Generate Tasks
      </button>
    </div>
  );
}
