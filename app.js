import { serve } from "./deps.js";

const handleRequest = (request) => {
  return new Response("Hello omniaaaaa!");
};

serve(handleRequest, { port: 7777 });