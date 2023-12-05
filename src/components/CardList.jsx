import { useEffect, useState } from "react";
import CardItem from "./CardItem";
import { Flex, SimpleGrid } from "@chakra-ui/react";
// import Spinner from "./Spinner";
import { Spinner } from "@chakra-ui/react";

const CardList = () => {

const [cards, setCards] = useState([])  
const [isLoading, setIsLoading] = useState(true)  

useEffect(() => {
  const fetchCards = async() => {
    try{
      const fetchedCards = await adminList()
      setCards(fetchedCards)
      setIsLoading(false)
    } catch (error){
      console.error('Error fetching cards', error)
    }
  }
  fetchCards()
  
}, [])

const adminList = async() => {
  try{
    const res = await fetch("http://localhost:5000/cards")

    // const data = await res.json()
    // console.log(data)
    // return data
    if(!res.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await res.json()
    console.log(data)
    return data
    
  } catch(error){
    console.log('Fetch error', error)
    throw error
  }
}

  return (
    <Flex
    wrap="wrap"
    gap='10'
    // columns={3}
    spacing={10} 
    // minChildWidth='110px'
    mt='8px'
    // templateColumns='repeat(2, 1fr)'
    >
    
     {isLoading  && <Spinner size="xl" />
     }
     {!isLoading && cards.map((item) => (
       <CardItem key={item.id} item={item} />
    ))}
    </Flex>
   
  );
}

export default CardList;
