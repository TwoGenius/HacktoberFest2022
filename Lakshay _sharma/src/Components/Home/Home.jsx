import React, { useEffect, useState } from 'react'
import './Home.scss'
import Row from '../Row/Row'
import { Link } from 'react-router-dom'
import axios from 'axios'
import bgposter from '../../982360.jpg'
import bglogo from '../../Stranger-Things-logo-500x281.png'
import { BiPlay } from 'react-icons/bi'
import { AiOutlinePlus } from "react-icons/ai"
const imgUrl = "https://image.tmdb.org/t/p/original";

const apiKey = "824b1a7ea523007ee5ededda82b8cb0d"
const url = "https://api.themoviedb.org/3"
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const popular = "popular"
const topRated = "top_rated"
const Home = () => {

  const [upcomingMovies, setUpcomingMovies] = useState([])
  const [nowPlayingMovies, setNowPlayingMovies] = useState([])
  const [popularMovies, setPopularMovies] = useState([])
  const [topRatedMovies, setTopRatedMovies] = useState([])
  const [genre, setGenre] = useState([])

  useEffect(() => {
    const fetchUpcoming = async () => {
      const { data: { results } } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`)
      setUpcomingMovies(results)
    };

    const fetchNowplaying = async () => {
      const { data: { results } } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`)
      setNowPlayingMovies(results)
    };

    const fetchPopular = async () => {
      const { data: { results } } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`)
      setPopularMovies(results)
    };

    const fetchtopRated = async () => {
      const { data: { results } } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`)
      setTopRatedMovies(results)
    };

    const getAllGenre = async () => {
      const { data: { genres } } = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`)
      setGenre(genres);
    };



    fetchPopular()
    fetchNowplaying()
    fetchUpcoming()
    fetchtopRated()
    getAllGenre()
  }, []);
  return (
    <section className='home'>
      <div className='banner'>
        <img className='bglogo2' src={bglogo} alt="logo" />
        <p>This is not yours to fix alone. You act like you're all alone out there in the world, but you're not. You're not alone.</p>

        <div>

          <button> <BiPlay /> Play</button>
          <button>My List <AiOutlinePlus /></button>
        </div>


      </div>

      <Row title={'Upcoming Movies'} arr={upcomingMovies} />
      <Row title={'Popular on Netflix'} arr={popularMovies} />
      <Row title={'Now Playing'} arr={nowPlayingMovies} />
      <Row title={'Top rated'} arr={topRatedMovies} />

      <div className='genrebox'>
        {genre.map((item) => (
          <Link key={item.id} to={`/ genre / ${item.id}`}>{item.name}</Link>
        ))}
      </div>


    </section>
  )
}

export default Home