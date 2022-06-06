import React, { useState } from "react";

const TodoList = () => {
  
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(()=>{
    const storageJob = JSON.parse(localStorage.getItem("jobs"));
    return storageJob ?? []
  });
  const handleSubmit = () => {
    setJobs((pre) => {
      const newJobs = [...pre, job];

      //save local storage
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);
      return newJobs;
    });
    setJob("");
  };
  return (
    <div style={{ padding: 32 }}>
      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
