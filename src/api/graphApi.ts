import axios from "axios";

export const api = axios.create({
  baseURL: "https://insightboard-backend-57ed.vercel.app/"
});

export const submitTranscript = (transcript: string) =>
  API.post("/graph", { transcript });

export const getJobStatus = (jobId: string) =>
  API.get(`/graph/${jobId}`);
