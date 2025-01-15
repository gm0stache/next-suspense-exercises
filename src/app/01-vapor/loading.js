import LibraryGameCardSkeleton from "@/components/LibraryGameCardSkeleton";
import { range } from "@/utils";

function VaporExerciseLoading() {
  const games = range(12);

  return (
    <section className="max-width-wrapper">
      <header className="library-header">
        <h1>My games</h1>
        <p>
          <span className="num-of-games">{games.length}</span> games in library
        </p>
      </header>
      <div className="game-grid">
        {games.map((_, index) => {
          return <LibraryGameCardSkeleton key={index} />;
        })}
      </div>
    </section>
  );
}

export default VaporExerciseLoading;
