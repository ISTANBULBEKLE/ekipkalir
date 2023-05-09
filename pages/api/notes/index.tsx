import {notes} from '../../../notes' 

export default function handler (req, res) {
    res.status(200).json(notes)
}