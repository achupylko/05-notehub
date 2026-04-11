import css from './App.module.css';
import NoteList from '../NoteList/NoteList';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { fetchNotes } from '../../services/noteService';
import Pagination from '../Pagination/Pagination';
import { useState } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isSuccess } = useQuery({
    queryKey: ['notes', searchQuery, currentPage],
    queryFn: () => fetchNotes(searchQuery, currentPage),
    placeholderData: keepPreviousData,
  });

  const totalPages = data?.totalPages ?? 0;

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        {/* Компонент SearchBox */}
        {isSuccess && totalPages > 1 && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        )}
        {/* Кнопка створення нотатки */}
      </header>
      {data && <NoteList items={data.notes} />}
    </div>
  );
}

export default App;
