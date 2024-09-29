import MovieCard from "./MovieCard";

export default function MovieList() {
  return (
    <div className="px-12 mt-4 space-y-8">
      <div>
        <p className="text-black text-2xl font-semibold mb-4">Popular Shows</p>
        <div className="flex gap-2">
          <MovieCard
            title="The Office (US)"
            description="A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, tedium and romance."
            imageSrc="https://d3dh6of9cnaq4t.cloudfront.net/Pictures/1024x536/4/5/0/8450_theoffice1_97750.jpg"
            category="Comedy"
          />
          <MovieCard
            title="Breaking Bad"
            description="A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student to secure his family's future."
            imageSrc="https://m.media-amazon.com/images/M/MV5BMTJiMzgwZTktYzZhZC00YzhhLWEzZDUtMGM2NTE4MzQ4NGFmXkEyXkFqcGdeQWpybA@@._V1_.jpg"
            duration="14 hours"
            category="Drama"
          />
          <MovieCard
            title="Better Call Saul"
            description="The trials and tribulations of criminal lawyer Jimmy McGill in the years leading up to and into his fateful run-in with Walter White and Jesse Pinkman."
            imageSrc="https://news.newonnetflix.info/wp-content/uploads/2018/06/better-call-saul.jpg"
            duration="8 hours"
            category="Drama"
          />
          <MovieCard
            title="Stranger Things"
            description="In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries."
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdb0VGE6o-UdwBZoOZ4BwllSxg_El1JCrjng&s"
            duration="50 hours"
            category="Horror"
          />
        </div>
      </div>
    </div>
  );
}
