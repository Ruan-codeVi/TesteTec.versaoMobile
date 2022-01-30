import React from 'react'
import Header from '../../components/Header'
import SectionChairs from '../../components/SectionCadeiras'
import SecionBanner from '../../components/SectionBanner'
import Footer from '../../components/Footer'

export default function Home() {
    return (
        <div>
            <Header/>
            <SectionChairs/>
            <SecionBanner/>
            <Footer/>
        </div>
    )
}
