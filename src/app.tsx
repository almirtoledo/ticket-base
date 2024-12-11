import { Ticket } from './ticket';

export function App() {
  return (
    <main className="h-dvh flex flex-col items-center justify-center gap-10 select-none duration-500 overflow-hidden bg-stone-200">
      <Ticket serie="TICKET A" />
      <Ticket serie="TICKET B" />
    </main>
  );
}
