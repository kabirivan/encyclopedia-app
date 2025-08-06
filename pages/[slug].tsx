import { useRouter } from 'next/router';
import { entries } from '../data/entries';

export default function EntryPage() {
  const router = useRouter();
  const { slug } = router.query;

  const entry = entries.find((e) => e.slug === slug);
  if (!entry) return <p>Entrada no encontrada</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{entry.title}</h1>
      <p>{entry.content}</p>
    </div>
  );
}