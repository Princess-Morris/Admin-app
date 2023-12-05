import { useEffect, useState } from "react";
import CardItem from "./CardItem";
import { Flex, SimpleGrid } from "@chakra-ui/react";

const CardList = () => {

const [cards, setCards] = useState([])  
const [isLoading, setIsLoading] = useState(true)  

useEffect(() => {
  const fetchCards = async() => {
    const fetchAdmin = await adminList()
    setCards(fetchAdmin)
    setIsLoading(false)
  }
  fetchCards()
  
}, [])

const adminList = async() => {
    const res = await fetch("http://localhost:5000/cards")

    const data = await res.json()
    console.log(data)
    return data
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
    
     {isLoading === true && <h1>List is loading</h1>}
     {cards.map((item) => (
       <CardItem item={item} />
    ))}
    </Flex>
   
  );
}

export default CardList;
