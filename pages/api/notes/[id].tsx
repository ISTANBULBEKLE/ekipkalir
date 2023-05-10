import { NextApiRequest, NextApiResponse } from 'next';

interface Note {
  id: number;
  content: string;
}

const notes: Note[] = [{ id: 1, content: 'Note 1' }];

/**
 * Handler function for fetching a note by id.
 * @param {NextApiRequest} request - The Next.js API request object.
 * @param {NextApiResponse<Note | { message: string }>} response - The Next.js API response object.
 * @returns {void}
 */
export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<Note | { message: string }>
): void {
  // Extract id from the query parameters
  const id = parseInt(request.query.id as string);

  // Filter the notes array to get the note with the given id
  const filteredNote = notes.find((n) => n.id === id);

  // If note exists, send it in the response with a 200 status code
  if (filteredNote) {
    response.status(200).json(filteredNote);
  } else {
    // If note does not exist, send a 404 status code with an error message
    response.status(404).json({ message: `Note with id ${id} not found` });
  }
}
