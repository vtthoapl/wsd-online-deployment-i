import { serve } from "./deps.js";

const handleRequest = (request) => {
  return new Response(`
  <h1> ONLINE DEPLOYMENT I </h1>
  <p> I wish you all be successfull finishing the web software development course and finding the job </p>
  <p> Kiitos, vtthoapl </p>
  `);
};

serve(handleRequest, { port: 7777 });