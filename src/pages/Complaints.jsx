import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'


export default function Complaints() {
  return (
    <div>
      <Header />
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdDJsEOqRtgcKe_ZGzQMknJQoWcziqYq27WgsvMTuYBdGuGXw/viewform?embedded=true" width="640" height="1366" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>
      <Footer />
    </div>
  )
}
