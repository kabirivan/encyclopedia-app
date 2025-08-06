import { entries } from '../data/entries';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Enciclopedia</h1>
      <ul>
        {entries.map((entry) => (
          <li key={entry.slug}>
            <Link href={`/${entry.slug}`}>
              <strong>{entry.title}</strong>: {entry.summary}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}