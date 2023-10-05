import React from 'react'
import Header from '../components/Header'
import PDFComponent from '../components/PDF_Component'


function PDFPage() {
  return (
    <div>
        <Header prop={true} />
        <PDFComponent />
    </div>
  )
}

export default PDFPage