import css from './App.module.css';
import NoteList from '../NoteList/NoteList';
import { useQuery } from '@tanstack/react-query';
import { fetchNotes } from '../../services/noteService';

function App() {
  const { data } = useQuery({
    queryKey: ['notes'],
    queryFn: () => fetchNotes('asdasdasdas'),
  });

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        {/* Компонент SearchBox */}
        {/* Пагінація */}
        {/* Кнопка створення нотатки */}
      </header>
      {data && <NoteList items={data.notes} />}
    </div>
  );
}

export default App;
