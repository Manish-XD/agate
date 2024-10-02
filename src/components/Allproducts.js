import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
} from '@chakra-ui/react';
import { useState } from 'react';

import "../styles/allproducts.css";
import Card from './Card';
import Button from './Button';

const data = [
    {
        id: 1,
        img: "/food.png",
        title: "CRYSTAL AGATE PHONE GRIP",
        price: 18.99
    },
    {
        id: 2,
        img: "/food.png",
        title: "CRYSTAL AGATE PHONE GRIP",
        price: 18.99
    },    
    {
        id: 3,
        img: "/food.png",
        title: "CRYSTAL AGATE PHONE GRIP",
        price: 18.99
    },
    {
        id: 4,
        img: "/food.png",
        title: "CRYSTAL AGATE PHONE GRIP",
        price: 18.99
    },    
    {
        id: 5,
        img: "/food.png",
        title: "CRYSTAL AGATE PHONE GRIP",
        price: 18.99
    },
    {
        id: 6,
        img: "/food.png",
        title: "CRYSTAL AGATE PHONE GRIP",
        price: 18.99
    },    
    {
        id: 7,
        img: "/food.png",
        title: "CRYSTAL AGATE PHONE GRIP",
        price: 18.99
    },
    {
        id: 8,
        img: "/food.png",
        title: "CRYSTAL AGATE PHONE GRIP",
        price: 18.99
    },    
    {
        id: 9,
        img: "/food.png",
        title: "CRYSTAL AGATE PHONE GRIP",
        price: 18.99
    },
    {
        id: 10,
        img: "/food.png",
        title: "CRYSTAL AGATE PHONE GRIP",
        price: 18.99
    },    
    {
        id: 11,
        img: "/food.png",
        title: "CRYSTAL AGATE PHONE GRIP",
        price: 18.99
    },
    {
        id: 12,
        img: "/food.png",
        title: "CRYSTAL AGATE PHONE GRIP",
        price: 18.99
    },    
    {
        id: 13,
        img: "/food.png",
        title: "CRYSTAL AGATE PHONE GRIP",
        price: 18.99
    },
    {
        id: 14,
        img: "/food.png",
        title: "CRYSTAL AGATE PHONE GRIP",
        price: 18.99
    },    
]

function Allproducts({ isOpen, onOpen, onClose }) {
    const [filter, setFilter] = useState("All Products");
    const [sort, setSort] = useState("Best Selling");
    const [readMore, setReadMore] = useState(false);
    return (
        <div className='allproducts'>
            <div className='allproducts__heading'>
                <h1>All product</h1>
                <hr />
            </div>
            <div className="filterOptions">
                <div className="filter">
                    <span>Filter:</span>
                    <Popover>
                        <PopoverTrigger>
                            <div className='filter__popover'>
                                <span>{filter}</span>
                                <img src="/triangle.svg" alt="triangle svg"/>
                            </div>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverBody>
                                <div style={{padding: "0.5rem 1rem", borderBottom: "1px solid #f2f2f2"}}>
                                    <button onClick={()=>setFilter("Latest")} style={{width: "100%", color: "black"}}>Latest</button>
                                </div>
                                <div style={{padding: "0.5rem 1rem", borderBottom: "1px solid #f2f2f2"}}>
                                    <button onClick={()=>setFilter("Oldest")} style={{width: "100%", color: "black"}}>Oldest</button>
                                </div>
                                <div style={{padding: "0.5rem 1rem"}}>
                                    <button onClick={()=>setFilter("All Products")} style={{width: "100%", color: "black"}}>All Products</button>
                                </div>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </div>
                <div className="sort">
                    <span>Sort:</span>
                    <Popover>
                        <PopoverTrigger>
                            <div className='sort__popover'>
                                <span>{sort}</span>
                                <img src="/triangle.svg" alt="triangle svg"/>
                            </div>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverBody>
                            <div style={{padding: "0.5rem 1rem", borderBottom: "1px solid #f2f2f2"}}>
                                    <button onClick={()=>setSort("Price")} style={{width: "100%", color: "black"}}>Price</button>
                                </div>
                                <div style={{padding: "0.5rem 1rem", borderBottom: "1px solid #f2f2f2"}}>
                                    <button onClick={()=>setSort("Release Date")} style={{width: "100%", color: "black"}}>Release Date</button>
                                </div>
                                <div style={{padding: "0.5rem 1rem"}}>
                                    <button onClick={()=>setSort("Best Selling")} style={{width: "100%", color: "black"}}>Best Selling</button>
                                </div>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
            <div className='allproducts__grid'>
                {!readMore && data.slice(6).map((item)=>{
                    return(
                        <div key={item.id}>
                            <Card {...item} onOpen={onOpen}/>
                        </div>
                    )
                })}
                {readMore && data.map((item)=>{
                    return(
                        <div key={item.id}>
                            <Card {...item}/>
                        </div>
                    )
                })}
            </div>
                <div style={{display: "flex", justifyContent: "center", marginTop: "54px"}}>
                <Button title={readMore?"View Less":"View All"} onClick={()=>setReadMore(!readMore)}/>
                </div>
        </div>
    )
}

export default Allproducts