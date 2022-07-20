import React from 'react'
import './Component Styles/DP_Items.css'
import { useNavigate } from "react-router-dom";
import {Format_Money} from "./Utils.js"

function DP_Items({item})
{
  const navigate = useNavigate();
  const see_details = () =>
  {
    window.value=item.key;
    let _path = '/details';
    navigate(_path);
  }

  const alert_no_page = () =>
  {
    var _itemweb = item.adress;
    alert("'"+_itemweb+"'"+" adlı siteye ulaşılamıyor.");
  }
  return (
    <div id='dealsandopts' className='deals-and-opts'>
      <div className='items-list'>
       <p className='items-instructons'><span>Teklif Kodu: {item.key}</span></p> <hr />
       <p className='items-instructons'><span>Website İsmi:</span> {item.name}</p>
       <p className='items-instructons'><span>Web Adresi:</span> <a href="#" onClick={alert_no_page}>{item.adress}</a></p>
       <p className='items-instructons'><span>Aranılan İş:</span> {item.job_type}</p>
       <p className='items-instructons'><span>Website Güncel Teklif:</span> {Format_Money(item.amount)}</p>
       <p className='items-instructons'><span>Aktiflik Durumu:</span> {item.state}</p> <hr />
       <button className='btn-details' onClick={see_details}>Detaylar</button>
      </div>
    </div>
  )
}

export default DP_Items;