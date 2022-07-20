import React from 'react'
import "./Component Styles/DP_Header.css";
import './DP_Items'

export default function ({count,item}) {
    const show_notice = () => {
        if(document.getElementById("search").value === "")
        {
          document.getElementById("search-notice").style.visibility = "visible";
        }
      };
    
      const remove_notice = () => {
        document.getElementById("search-notice").style.visibility = "hidden";
      };
    
      var divsToBlock = document.getElementsByClassName("deals-and-opts");
      var selected_index;
      const search_deal = () => {
        document.getElementById("search").readOnly=true;
        document.getElementById("search").style.cursor = "no-drop";
        if (document.getElementById("search").value === "") {
          alert("Arama çubuğun değerler girmelisiniz.");
        } else {
          document.getElementById("search-notice").style.visibility = "hidden";
          document.getElementById("srch").style.display = "none";
          document.getElementById("rmw-srch").style.display = "block";
    
          for (var i = 0; i < divsToBlock.length; i++) {
            if (item[i].key !== document.getElementById("search").value) {
              divsToBlock[i].style.display = "none";
            } else {
              selected_index = i;
            }
          }
    
          if (selected_index == null) {
            document.getElementById("not-found-notice").style.visibility ="visible";
          } else {
            document.getElementById("found-notice").style.visibility = "visible";
          }
        }
      };
    
      const remove_search_deal = () => {
        document.getElementById("search").readOnly=false;
        document.getElementById("search").style.cursor = "auto";
        document.getElementById("found-notice").style.visibility = "hidden";
        document.getElementById("not-found-notice").style.visibility = "hidden";
        document.getElementById("srch").style.display = "block";
        document.getElementById("rmw-srch").style.display = "none";
        document.getElementById("search").value = "";
    
        if (selected_index == null) {
          for (var i = 0; i < divsToBlock.length; i++) {
            divsToBlock[i].style.display = "block";
          }
          divsToBlock[selected_index].style.display = "none";
        } else {
          divsToBlock[selected_index].style.display = "none";
          for (var i = 0; i < divsToBlock.length; i++) {
            divsToBlock[i].style.display = "block";
          }
        }
      };
  return (
    <div>
            <form className="search-form">
        <input
          id="search"
          placeholder="Arama Bölümü"
          type="text"
          onFocus={show_notice}
          onBlur={remove_notice}
        />
        <p
          id="search-notice"
          style={{
            fontWeight: 5,
            position: "absolute",
            color: "black",
            marginTop: 100,
            marginLeft: -470,
            visibility: "hidden",
          }}
        >
          <b>Hatırlatma:</b> Teklif kodları üzerinden arama yapabilirsiniz.
        </p>
        <p
          id="not-found-notice"
          style={{
            fontWeight: 5,
            position: "absolute",
            color: "black",
            marginTop: 100,
            marginLeft: -470,
            visibility: "hidden",
          }}
        >
          <b>Bilgilendirme:</b> Belirlenen kodda bir teklif bulunamamıştır.
        </p>
        <p
          id="found-notice"
          style={{
            fontWeight: 5,
            position: "absolute",
            color: "black",
            marginTop: 100,
            marginLeft: -470,
            visibility: "hidden",
          }}
        >
          <b>Bilgilendirme:</b> Belirlenen kodda teklif bulunmuştur.
        </p>
      </form>
      <button id="srch" className="srch-btn" onClick={search_deal}>
        Ara
      </button>
      <button
        id="rmw-srch"
        className="srch-btn"
        onClick={remove_search_deal}
        style={{ display: "none" }}
      >
        Arama Bitir
      </button>
    </div>
  )
}
