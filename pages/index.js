import Head from 'next/head'
import React from 'react'
import ButtonAppBar from '../component/AppBar'
import ActionAreaCard from '../component/ActionAreaCard'
import {Container, Grid} from '@mui/material'
// import Script from 'next/script'

export default function Homepage({posts}) {
  console.log(posts)
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>
      <ButtonAppBar titleAppBar={"สถานที่ท่องเที่ยว"}/>
      <Container style={{paddingTop:"30px",height:"3000px"}} maxWidth="lg">
      <Grid container spacing={2}>
        {posts.Search.map((post, index)=>{
          return  <Grid id={"d"+index} key={index} item md={4}>
                    <ActionAreaCard post={post}/>
                  </Grid>
        })}
      </Grid>
        
      </Container>
      {/* <Script>
        {
          `
            window.onscroll = () => {
              console.log('scrolling');
            }

            console.log(document.getElementById('d1'));
          `
        }
      </Script> */}
    </div>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
      "x-rapidapi-key": "af55480055msh2c545823556b905p1d8e49jsnb9002af628ce"
    }
  })
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}