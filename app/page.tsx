
import React from 'react'
import Hero from './components/Hero'
import TodaySection from './components/TodaySection'
import BestSellingProduct from './components/BestSellingProduct'
import BillBoard from './components/BillBoard'
import OurProductSection from './components/OurProductSection'
import BrowseByCategory from './components/BrowseByCategory'
import NewArrival from './components/NewArrival'
import Services from './components/Services'


export default function Home() {
  return (
    <main>
      <Hero/>
      <TodaySection/>
      <BestSellingProduct/>
      <BillBoard/>
      <OurProductSection/>
      <BrowseByCategory/>
      <NewArrival/>
      <Services/>
    </main>
  )
}
