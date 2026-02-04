import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api"
});

export const submitTranscript = (transcript: string) =>
  API.post("/graph", { transcript });

export const getJobStatus = (jobId: string) =>
  API.get(`/graph/${jobId}`);
