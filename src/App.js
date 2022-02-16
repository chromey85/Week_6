import {useState, useEffect} from 'react'
import './image';

const App = () => {

  const [advice, setAdvice] = useState("");
  const [advice1, setAdvice1] = useState("");
  const [advice2, setAdvice2] = useState("");
  const [error, setError] = useState({
    error: false,
    message: ""
  });

  const collect = async () => {
    try {
      const response = await fetch("https://animechan.vercel.app/api/random")
      const data = await response.json()
      console.log(response);
      setAdvice(data) 

      if (response.status !== 200) {
        throw new Error('Soemthign Wnet Worng')
      }

      setAdvice(data)
      collect1()
      collect2()

    } catch(error) {
      setError({error: true, message: error.message})
    }
  }

    if (error.error){
      return <h1>An error has occurred: {error.message}</h1>
    }
  
  const collect1 = async () => {
    try {
      const response1 = await fetch("https://dog.ceo/api/breeds/image/random")
      const data1 = await response1.json()
      console.log(response1);
      setAdvice1(data1) 

      if (response1.status !== 200) {
        throw new Error('Soemthign Wnet Worng')
      }

      setAdvice1(data1)     
    } catch(error) {
      setError({error: true, message: error.message})
    }
  }
  const collect2 = async () => {
    try {
      const response2 = await fetch("https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random", {
        "method": "GET",
        "headers": {
          "accept": "application/json",
          "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
          "x-rapidapi-key": "0a8c3f093amsh845fa925a488a33p14d99djsn171b40e21246"
        }
      })
      const data2 = await response2.json()
      console.log(response2);
      setAdvice2(data2) 

      if (response2.status !== 200) {
        throw new Error('Soemthign Wnet Worng')
      }

      setAdvice2(data2)     
    } catch(error) {
      setError({error: true, message: error.message})
    }
  }

    // useEffect(() => {
    //   collect(),
    //   collect1()
    // }, [])

    if (error.error){
      return <h1>An error has occurred: {error.message}</h1>
    }
   
    if(!advice2.message){
      console.log("loading...")
    return ( <img src={'https://c.tenor.com/28DFFVtvNqYAAAAC/loading.gif'} alt='Loading...' />)
    }
  return (
    <>
      <div className='collect'>
        <h1>Random Anime Quotes</h1>
        <a>Anime: {advice.anime}</a><br />
        <a>Character: {advice.character}</a><br />
        <a>Quote: {advice.quote}</a><br />
        {/* <img src={advice.message} alt={advice.message} /> <br></br>    */}
        {/* <button onClick={collect}>fetch</button>  */}
      </div>
      <div className='collect1'>
        <h1>Doge Pics
        </h1>
        {/* <a>Anime: {advice.anime}</a><br />
        <a>Character: {advice.character}</a><br />
        <a>Quote: {advice.quote}</a><br /> */}
      <img src={advice1.message} alt={advice1.message} /> <br></br>
      <div className='collect2'>
        <h2>I make you Laugh</h2>
        <a>{advice2.message}</a><br />
      </div>   
        <button onClick={collect}>fetch</button> 
      </div>
    </>
  )
}

export default App;
