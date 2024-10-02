import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react';

import React from 'react';
import { useDisclosure } from '@chakra-ui/react';

import {useSelector} from "react-redux";
import {getItemsSelector} from "../redux/slices/cartSlice";


import "../styles/navbar.css";
import Button from './Button';

function Navbar({ isOpen, onOpen, onClose }) 
{
    // const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const items = useSelector(getItemsSelector);
  var cartItems = items.length;
    return (
        <div className="nav_container">
            <div className="nav_container__left">
                <img src="/logo.png" alt="logo"/>
                <span>Pop Rock Crystal</span>
            </div>
            <div className="nav_container__right">
                <div className="nav_container__links">
                    <ol>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Help</a></li>
                    </ol>
                </div>
                <div className="nav_container__cart">
                    <div className="nav_container__cartQuantity">
                        <span>{cartItems == 0?'00':cartItems}</span>
                    </div>
                    <button onClick={onOpen}>
                        <svg style={{width: "2rem", height: "2rem", fill: "white"}}>
                            <path d="m17.21 9-4.38-6.56c-.19-.28-.51-.42-.83-.42s-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1zM9 9l3-4.4L15 9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2">
                            </path>
                        </svg>
                    </button>
                    <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Cart</DrawerHeader>

          <DrawerBody>
            {items.map((item)=>{
                return(
                    <div key={item.id} style={{border: "1px solid black", marginTop: "1rem", padding: "0.5rem 1rem", borderRadius: "8px", display: "flex"}}>
                        <div>
                        <p>{item.title}</p>
                        <p>{item.price}$</p>
                        </div>
                        <img src={item.img} alt={item.title} style={{height: "3rem"}}/>
                    </div>
                )
            })}
          </DrawerBody>

          <DrawerFooter>
            <Button title={"Checkout"}/>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
                </div>
            </div>
        </div>
    );
}

export default Navbar;