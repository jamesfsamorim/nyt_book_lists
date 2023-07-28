"use client";
import { useContext, useEffect, useState } from "react";
import {
  Container,
  CreatedBy,
  Footer,
  Header,
  HeaderLogo,
  SocialMediaInfo,
  HomeTitle,
  HomeSubtitle
} from "./page.style";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { List } from "@/components/lists/list";
import { nytApi } from "@/config/api.config";
import { BestSellersBookList } from "@/models/booklist.model";
import { HomeFilter } from "@/components/filters/home/home.filter";
import { ResponseHandlerContext } from "@/contexts/response_handler/response.handler.context";
import { Error } from "@/models/error.model";

export default function Home() {
  const [bookLists, setBookLists] = useState<BestSellersBookList[]>([]);
  const [genre, setGenre] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [nextPublishedDate, setNextPublishedDate] = useState("");
  const [previousPublishedDate, setPreviousPublishedDate] = useState("");
  const { setErrorMessage } = useContext(ResponseHandlerContext)

  useEffect(() => {
    const fetchBookLists = async () => {
      try {
        const { data } = await nytApi.get('books/v3/lists/full-overview.json')
        setBookLists(data.results.lists)
        setPublishedDate(data.results.published_date)
        setNextPublishedDate(data.results.next_published_date)
        setPreviousPublishedDate(data.results.previous_published_date)
      }
      catch (error: any) {
        const { errors }: Error = error.response.data
        const [message, title] = errors

        setErrorMessage(title, message)
      }
    }

    fetchBookLists()
  }, [])

  const fetchBookLists = async () => {
    try {
      const { data } = await nytApi.get('books/v3/lists/full-overview.json')
      setBookLists(data.results.lists)
      setPublishedDate(data.results.published_date)
      setNextPublishedDate(data.results.next_published_date)
      setPreviousPublishedDate(data.results.previous_published_date)
    }
    catch (error: any) {
      const { errors }: Error = error.response.data
      const [message, title] = errors

      setErrorMessage(title, message)
    }
  }

  const fetchBookListsByGenreWithPublishedDate = async (genre_list: string) => {
    try {
      const { data } = await nytApi.get(`books/v3/lists/${publishedDate}/${genre_list}.json`)
      setBookLists([data.results])
      setPublishedDate(data.results.published_date)
      setNextPublishedDate(data.results.next_published_date)
      setPreviousPublishedDate(data.results.previous_published_date)
      setGenre(genre_list)
    }
    catch (error: any) {
      const { errors }: Error = error.response.data
      const [message, title] = errors

      setErrorMessage(title, message)
    }
  }

  const fetchBookListsByGenrePublishedDate = async (published_date: string) => {
    try {
      const { data } = await nytApi.get(`books/v3/lists/${published_date}/${genre}.json`)
      setBookLists([data.results])
      setPublishedDate(data.results.published_date)
      setNextPublishedDate(data.results.next_published_date)
      setPreviousPublishedDate(data.results.previous_published_date)
    }
    catch (error: any) {
      const { errors }: Error = error.response.data
      const [message, title] = errors

      setErrorMessage(title, message)
    }
  }

  const fetchBookListsByPublishedDateWithoutGenre = async (new_published_date: string) => {
    try {
      const { data } = await nytApi.get('books/v3/lists/full-overview.json', {
        params: {
          'published-date': new_published_date
        }
      })
      setBookLists(data.results.lists)
      setPublishedDate(data.results.published_date)
      setNextPublishedDate(data.results.next_published_date)
      setPreviousPublishedDate(data.results.previous_published_date)
    }
    catch (error: any) {
      const { errors }: Error = error.response.data
      const [message, title] = errors

      setErrorMessage(title, message)
    }
  }

  const fetchBookListsByPublishedDate = async (published_date: string) => {
    genre === "" ? await fetchBookListsByPublishedDateWithoutGenre(published_date) : await fetchBookListsByGenrePublishedDate(published_date)
  }

  const fetchBookListsByGenre = async (genre_list: string) => {
    (nextPublishedDate === "" && genre_list === "") ? await fetchBookLists() : await fetchBookListsByGenreWithPublishedDate(genre_list)
  }

  return (
    <div>
      <Header data-testid="header">
        <HeaderLogo src="/nyt.svg" alt="NYT Logo" />
      </Header>

      <Container>
        <HomeTitle>The New York Times Best Sellers</HomeTitle>
        <HomeSubtitle>Authoritatively ranked lists of books sold in the United States, sorted by format and genre.</HomeSubtitle>

        <HomeFilter
          fetchBookListsByGenre={fetchBookListsByGenre}
          fetchBookListsByPublishedDate={fetchBookListsByPublishedDate}
          publishedDate={publishedDate}
          previousPublishedDate={previousPublishedDate}
          nextPublishedDate={nextPublishedDate}
        />

        {bookLists.map((list: BestSellersBookList, index: number) =>
          <div data-testid="book-list" key={`div-list-item-${index}`}>
            <List {...list} key={`list-item-${index}`} /> {index === bookLists.length - 1 ? '' : <hr />}
          </div>
        )}
      </Container>

      <Footer data-testid="footer">
        <CreatedBy>Created by James Amorim</CreatedBy>
        <SocialMediaInfo>
          <a href="https://www.github.com/jamesfsamorim" target="_blank"><GitHubIcon /></a>
          <a href="https://www.linkedin.com/in/james-fernando-silva-amorim-48290a117/" target="_blank"><LinkedInIcon /></a>
        </SocialMediaInfo>
      </Footer>
    </div>
  )
}
