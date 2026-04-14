// Mock music library data
export const mockMusicLibrary = [
  {
    id: "1",
    title: "Bohemian Rhapsody",
    artist: "Queen",
    album: "A Night at the Opera",
    genre: "Rock",
    year: 1975,
  },
  {
    id: "2",
    title: "Imagine",
    artist: "John Lennon",
    album: "Imagine",
    genre: "Pop",
    year: 1971,
  },
  {
    id: "3",
    title: "Billie Jean",
    artist: "Michael Jackson",
    album: "Thriller",
    genre: "Pop",
    year: 1982,
  },
  {
    id: "4",
    title: "Smells Like Teen Spirit",
    artist: "Nirvana",
    album: "Nevermind",
    genre: "Rock",
    year: 1991,
  },
  {
    id: "5",
    title: "Hotel California",
    artist: "Eagles",
    album: "Hotel California",
    genre: "Rock",
    year: 1976,
  },
  {
    id: "6",
    title: "Hey Jude",
    artist: "The Beatles",
    album: "Hey Jude",
    genre: "Rock",
    year: 1968,
  },
  {
    id: "7",
    title: "What's Going On",
    artist: "Marvin Gaye",
    album: "What's Going On",
    genre: "Soul",
    year: 1971,
  },
  {
    id: "8",
    title: "Superstition",
    artist: "Stevie Wonder",
    album: "Talking Book",
    genre: "Funk",
    year: 1972,
  },
  {
    id: "9",
    title: "Like a Rolling Stone",
    artist: "Bob Dylan",
    album: "Highway 61 Revisited",
    genre: "Rock",
    year: 1965,
  },
  {
    id: "10",
    title: "Purple Haze",
    artist: "Jimi Hendrix",
    album: "Are You Experienced",
    genre: "Rock",
    year: 1967,
  },
  {
    id: "11",
    title: "Good Vibrations",
    artist: "The Beach Boys",
    album: "Smiley Smile",
    genre: "Pop",
    year: 1966,
  },
  {
    id: "12",
    title: "Respect",
    artist: "Aretha Franklin",
    album: "I Never Loved a Man",
    genre: "Soul",
    year: 1967,
  },
  {
    id: "13",
    title: "Stairway to Heaven",
    artist: "Led Zeppelin",
    album: "Led Zeppelin IV",
    genre: "Rock",
    year: 1971,
  },
  {
    id: "14",
    title: "Light My Fire",
    artist: "The Doors",
    album: "The Doors",
    genre: "Rock",
    year: 1967,
  },
  {
    id: "15",
    title: "Born to Run",
    artist: "Bruce Springsteen",
    album: "Born to Run",
    genre: "Rock",
    year: 1975,
  },
  {
    id: "16",
    title: "Sweet Child O' Mine",
    artist: "Guns N' Roses",
    album: "Appetite for Destruction",
    genre: "Rock",
    year: 1987,
  },
  {
    id: "17",
    title: "Africa",
    artist: "Toto",
    album: "Toto IV",
    genre: "Pop",
    year: 1982,
  },
  {
    id: "18",
    title: "Dream On",
    artist: "Aerosmith",
    album: "Aerosmith",
    genre: "Rock",
    year: 1973,
  },
  {
    id: "19",
    title: "Take on Me",
    artist: "a-ha",
    album: "Hunting High and Low",
    genre: "Pop",
    year: 1984,
  },
  {
    id: "20",
    title: "Wonderwall",
    artist: "Oasis",
    album: "(What's the Story) Morning Glory?",
    genre: "Rock",
    year: 1995,
  },
];

// Search function that filters by multiple attributes
export function searchSongs(query, library = mockMusicLibrary) {
  if (!query.trim()) {
    return library;
  }

  const searchTerm = query.toLowerCase();
  return library.filter(
    (song) =>
      song.title.toLowerCase().includes(searchTerm) ||
      song.artist.toLowerCase().includes(searchTerm) ||
      song.album.toLowerCase().includes(searchTerm) ||
      song.genre.toLowerCase().includes(searchTerm) ||
      song.year.toString().includes(searchTerm)
  );
}
