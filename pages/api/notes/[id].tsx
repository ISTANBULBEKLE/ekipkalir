import {notes} from '../../../notes' 

export default function handler(request, response) {
    // Extract id from the query parameters
    const id = parseInt(request.query.id);
  
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

