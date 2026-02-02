// import fetch from "node-fetch";
import { VercelRequest, VercelResponse } from '@vercel/node';


const { APIKEY } = process.env;

export default async function handler(request: VercelRequest, response: VercelResponse) {
 const body = typeof request.body === 'string' ? JSON.parse(request.body) : request.body || {};
    const { title, page = 1, id } = body;

  const url = id
    ? `https://www.omdbapi.com/?apikey=${APIKEY}&i=${id}&plot=full`
    : `https://www.omdbapi.com/?apikey=${APIKEY}&s=${title}&page=${page}`;

  const res = await fetch(url);
  const json = await res.json();

  response.status(200).json(json);
}
