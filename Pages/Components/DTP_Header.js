import React from 'react'

import './Component Styles/DTP_Header.css'

export default function DTP_Header({Detailed_Item}) 
{
  return (
    <div className='header-top'>
      {Detailed_Item[0].name} adlı şirketin detaylar sayfasında bulunmaktasınız.
    </div>
  )
}
