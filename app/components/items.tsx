import game_pad from "../../public/assets/images/game_pad.svg";
import lcd from "../../public/assets/images/lcd.svg";
import five_star from "../../public/assets/images/Five star.svg";
import keyboard from "../../public/assets/images/keyboard.svg";
import chair from "../../public/assets/images/chair.svg";

import coat from "../../public/assets/images/Coat.svg";
import bag from "../../public/assets/images/Bag.svg";
import cpu_cooler from "../../public/assets/images/Cpu_Cooler.svg";
import shelf from "../../public/assets/images/Shelf.svg";

import Dog_food from "../../public/assets/images/Dog_Food.svg";
import Camera from "../../public/assets/images/Camera.svg";
import GamingLaptop from "../../public/assets/images/Gaming Laptop.svg";
import Curology from "../../public/assets/images/curology.svg";
import ToyCar from "../../public/assets/images/Toy car.svg";
import Boots from "../../public/assets/images/Boots.svg";
import GamePad from "../../public/assets/images/GamePad.svg";
import Jacket from "../../public/assets/images/Jacket.svg";

import phone from "../../public/assets/images/Category-CellPhone.svg";
import computer from "../../public/assets/images/Category-Computer.svg";
import smartwatch from "../../public/assets/images/Category-SmartWatch.svg";
import headphone from "../../public/assets/images/Category-Headphone.svg";
import gamepad_icon from "../../public/assets/images/Category-Gamepad.svg";



interface DiscountedItem {
  discount:number,
  image: string,
  title:string,
  new_price:number,
  old_price:number,
  rating:string,
  review : number,
}

interface NonDiscountedItem {

  image: string,
  title:string,
  new_price:number,
  old_price:number,
  rating:string,
  review : number,
}

interface JustPriceItem{
  image: string,
  title:string,
  price:number,
  rating:string,
  review : number,
}
interface CategoryItem {
  image: string;
  title: string;
}


export const TodaysItems:DiscountedItem[] = [
  {
    discount: 40,
    image: game_pad,
    title: "HAVIT HV-G92 Gamepad",
    new_price: 120,
    old_price: 160,
    rating: five_star,
    review: 88,
  },
  {
    discount: 35,
    image: keyboard,
    title: "AK-900 Wired Keyboard",
    new_price: 960,
    old_price: 1160,
    rating: five_star,
    review: 75,
  },
  {
    discount: 30,
    image: lcd,
    title: "IPS LCD Gaming Monitor",
    new_price: 370,
    old_price: 400,
    rating: five_star,
    review: 99,
  },
  {
    discount: 25,
    image: chair,
    title: "S-Series Comfort Chair",
    new_price: 375,
    old_price: 400,
    rating: five_star,
    review: 95,
  },
];

export const BestSellingItems:NonDiscountedItem[] = [
  {
    image: coat,
    title: "The north coat",
    new_price: 260,
    old_price: 360,
    rating: five_star,
    review: 65,
  },
  {
    image: bag,
    title: "Gucci duffle bag",
    new_price: 960,
    old_price: 1160,
    rating: five_star,
    review: 65,
  },
  {
    image: cpu_cooler,
    title: "RGB liquid CPU Cooler",
    new_price: 160,
    old_price: 170,
    rating: five_star,
    review: 65,
  },
  {
    image: shelf,
    title: "Small BookSelf",
    new_price: 360,
    old_price: 450,
    rating: five_star,
    review: 65,
  },
];

export const OurProducts:JustPriceItem[] = [
  {
    image: Dog_food,
    title: "Breed Dry Dog Food",
    price: 100,
    rating: five_star,
    review: 35,
  },
  {
    image: Camera,
    title: "CANON EOS DSLR Camera",
    price: 360,
    rating: five_star,
    review: 95,
  },
  {
    image: GamingLaptop,
    title: "ASUS FHD Gaming Laptop",
    price: 700,
    rating: five_star,
    review: 325,
  },
  {
    image: Curology,
    title: "Curology Product Set",
    price: 500,
    rating: five_star,
    review: 145,
  },
  {
    image: ToyCar,
    title: "Kids Electric Car",
    price: 960,
    rating: five_star,
    review: 65,
  },
  {
    image: Boots,
    title: "Jr. Zoom Soccer Cleats",
    price: 1160,
    rating: five_star,
    review: 35,
  },
  {
    image: GamePad,
    title: "GP11 Shooter USB Gamepad",
    price: 660,
    rating: five_star,
    review: 55,
  },
  {
    image: Jacket,
    title: "Quilted Satin Jacket",
    price: 660,
    rating: five_star,
    review: 55,
  },
];

export const BrowseByCatItems:CategoryItem[] = [
  {
    image: phone,
    title: "Phones",
  },
  {
    image: computer,
    title: "Computers",
  },
  {
    image: smartwatch,
    title: "SmartWatch",
  },
  {
    image: smartwatch,
    title: "Camera",
  },
  {
    image: headphone,
    title: "HeadPhones",
  },
  {
    image: gamepad_icon,
    title: "Gaming",
  },
  {
    image: headphone,
    title: "HeadPhones",
  },
  {
    image: gamepad_icon,
    title: "Gaming",
  },
];

export const RelatedItems:DiscountedItem[] = [
  {
    discount: 40,
    image: game_pad,
    title: "HAVIT HV-G92 Gamepad",
    new_price: 120,
    old_price: 160,
    rating: five_star,
    review: 88,
  },
  {
    discount: 35,
    image: keyboard,
    title: "AK-900 Wired Keyboard",
    new_price: 960,
    old_price: 1160,
    rating: five_star,
    review: 75,
  },
  {
    discount: 30,
    image: lcd,
    title: "IPS LCD Gaming Monitor",
    new_price: 370,
    old_price: 400,
    rating: five_star,
    review: 99,
  },
  {
    discount: 0,
    image: cpu_cooler,
    title: "RGB liquid CPU Cooler",
    new_price: 375,
    old_price: 400,
    rating: five_star,
    review: 95,
  
}]
