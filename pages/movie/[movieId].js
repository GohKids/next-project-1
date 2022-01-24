import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function MovieDetail() {
  const router = useRouter();
  const movieId = router.query.movieId;
  return (
    <div>
      <h1>Movie Detail {movieId}</h1>
      <button
            type="button"
            onClick={() => {
              router.push({
                pathname: '/movie/[movieId]',
                query: { movieId: movieId }
              })
            }}
          >
            Click here to read more
          </button>
      <Link href={'/'}><a>Back Home</a></Link>
    </div>
  )
}
