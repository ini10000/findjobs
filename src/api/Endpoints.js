const base_url = `https://api.jobboard.tedbree.com/v1`;

// Authentication
export const REGISTER = `${base_url}/register`;
export const LOGIN = `${base_url}/login`;
export const LOGOUT = `${base_url}/logout`;

// User
export const USER = `${base_url}/user`;

//Jobs
export const JOBS = `${base_url}/jobs`;
export const JOBID = (job_id) => `${base_url}/jobs/${job_id}`;
export const APPLYJOB = (job_id) => `${base_url}/jobs/${job_id}/apply`;
export const MYJOBS = `${base_url}/my/jobs`;
export const SEARCHJOBS = `${base_url}/my/jobs?q=keyword`;
export const MYJOBID = (job_id) => `${base_url}/my/jobs/${job_id}`;
