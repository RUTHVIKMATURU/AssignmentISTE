import React from 'react'
import Card from './Card'
import './Cards.css'
function Cards() {
  const Data = [
    {
      brand: "Carnival",
      name: "Premium Brand Square Watch Analog Multi Dial Quartz",
      price: "₹17,147",
      originalPrice: "₹18,675",
      discount: "8% off",
      image: "https://m.media-amazon.com/images/I/71VcCbl8sTL._SX679_.jpg",
    },
    {
      brand: "Casio",
      name: "Resin Analog-Digital Black Dial Green Strap Men's Watch",
      price: "₹31,046",
      originalPrice: "₹40,850",
      discount: "24% off",
      image: "https://m.media-amazon.com/images/I/71D9VfP+qqL._SX679_.jpg",
    },
    {
      brand: "Casio",
      name: "G-Shock GA-140GB-1A1DR Black & Gold Analog-Digital",
      price: "₹8,399",
      originalPrice: "₹11,999",
      discount: "30% off",
      image: "https://m.media-amazon.com/images/I/71mVQp3R08L._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      brand: "Lenovo",
      name: "Lenovo ThinkPad 8th Gen Intel Core i5 Thin & Light HD Laptop",
      price: "₹17,498",
      originalPrice: "₹32,501",
      discount: "65% off",
      image: "https://m.media-amazon.com/images/I/71mVQp3R08L._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      brand: "Fastrack",
      name: "Fastrack Vyb Quartz Analog Navy Blue Dial Gun",
      price: "₹1,995",
      originalPrice: "₹2,850",
      discount: "30% off",
      image: "https://m.media-amazon.com/images/I/713hAiJdNpL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      brand: "boAt",
      name: "Lunar Discovery w/ 1.39'' (3.5 cm) HD Display, Turn-by-Turn Navigation",
      price: "₹1,499",
      originalPrice: "₹8,499",
      discount: "82% off",
      image: "https://m.media-amazon.com/images/I/71gUAu2MwZL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      "brand": "MSI",
      "name": "Crosshair 16 HX, Intel 14th Gen. i7-14700HX, 41CM QHD+ 240Hz Gaming Laptop",
      "price": "₹1,32,990",
      "originalPrice": "₹1,62,990",
      "discount": "18% off",
      "image": "https://m.media-amazon.com/images/I/71iWEMpnwCL._AC_UY327_FMwebp_QL65_.jpg"
    },
    {
      "brand": "Lenovo",
      "name": "IdeaPad Slim 1 AMD Ryzen 5 5500U 15.6\" HD Thin and Light Laptop",
      "price": "₹40,990",
      "originalPrice": "₹58,390",
      "discount": "30% off",
      "image": "https://m.media-amazon.com/images/I/611AaVzaCQL._AC_UY327_FMwebp_QL65_.jpg"
    },
    {
      brand: "TIMEWEAR",
      name: "Analog Day Date Functioning Stainless Steel Chain Watch",
      price: "₹319",
      originalPrice: "₹1,799",
      discount: "82% off",
      image: "https://m.media-amazon.com/images/I/81nj6IlZpVL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      brand: "Casio",
      name: "Stainless Steel Men Vintage Digital Grey Dial Unisex",
      price: "₹1,695",
      originalPrice: "₹2,850",
      discount: "30% off",
      image: "https://m.media-amazon.com/images/I/71Iit7U1S+L._AC_UL480_FMwebp_QL65_.jpg",
    },
  ];
  
  return (
    <div>
      <div className="card-container">
      {
      Data.map((item) => (
        <Card key={item.id} item={item} />
      ))
      }
      </div>
    </div>
  )
}

export default Cards