import React from 'react'
import NewsCategoryNavbar from './NewsCategoryNavbar'
import IndianNews from './IndianNews'
import InternationalNews from './InternationalNews'
import LocalNews from './LocalNews'

const AllNews = () => {
  return (
    <>
    {/* <NewsCategoryNavbar/> */}
    <IndianNews/>
    <InternationalNews/>
    <LocalNews/>
    </>
  )
}

export default AllNews