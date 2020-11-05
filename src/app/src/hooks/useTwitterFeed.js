import { useEffect, useState } from "react";
import {useInterval} from './useInterval'

export function useTwitterFeed() {
  const [feed, setFeed] = useState('')

  // Remember the latest callback.
  const queryForTweet = () => {
    console.log('querying...')

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAIhaCwEAAAAAWZnqUtHBivYWscKCwy1PgGfPcP0%3Dg9xXYSNpdNR6cPTmmdvFnnLMJ7ti9di4FYlJ1dXh0U4JBp6H8b");


    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=NorthernTrust", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  // useInterval(queryForTweet, 10000)

  // useEffect(() => queryForTweet(), [])

  return {feed}
}
