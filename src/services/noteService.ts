import axios from 'axios';
import type { Note } from '../types/note';

const TOKEN = import.meta.env.VITE_NOTEHUB_TOKEN;

axios.defaults.baseURL = 'https://notehub-public.goit.study/api';

interface NoteResponse {
  notes: Note[];
  totalPages: number;
}

export const fetchNotes = async (search: string): Promise<NoteResponse> => {
  const response = await axios.get<NoteResponse>('/notes', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    params: {
      search,
      perPage: 12,
    },
  });

  return response.data;
};
