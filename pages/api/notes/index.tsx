import { NextApiRequest, NextApiResponse } from 'next'

interface Note {
  id: number
  content: string
}

const notes: Note[] = [
  {
    id: 1,
    content: 'Note 1'
  },
  {
    id: 2,
    content: 'Note 2'
  }
]

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<Note[]>
): void {
  /**
   * Handle a request to retrieve notes.
   *
   * @param {NextApiRequest} req - The request object.
   * @param {NextApiResponse<Note[]>} res - The response object.
   * @returns {void}
   */
  res.status(200).json(notes)
}