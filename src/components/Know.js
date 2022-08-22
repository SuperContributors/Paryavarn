import React,{useState,useEffect} from 'react'
import "../style/Know.css";
import axios from 'axios';
import Popup from './Popup';



const Know = () => {

  const API_ENDPOINT =`https://api.openweathermap.org/data/2.5/weather?`
  const API_KEY=`e85b203c44046e3fa81f40b789049178`
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [responseData,setResponseData] = useState({}) 
  useEffect(() => {
    navigator.geolocation.watchPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    })
    let finalAPIEndPoint = `${API_ENDPOINT}lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    axios.get(finalAPIEndPoint).then((res)=>{
      console.log(res.data)
      setResponseData(res.data)
      console.log(responseData.name);
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latitude,longitude]);

  // eslint-disable-next-line no-unused-vars
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("https://paryavarn-web-api.herokuapp.com/country")
      .then(response => {
        return response.json()
      })
      .then(data => {
        // console.log(data.find((c) => c.id === "India")
        // .states.filter((s) =>
        //   ["Haryana", "Uttar Pradesh"].includes(s.state)
        // )
        // .map((c) => c.cities)
        // .flat(3)
        // .find((c) => c.city === "Sonipat"))
        console.log(data.find((c) => c.id === "India").states.find((t) => t.state === "Haryana").cities.find((r) => r.city === responseData.name))
        setUsers(data.states)
        // console.log(data[5].states[27].cities)
      })
  }

  useEffect(() => {
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <div className="know">
        <h2 className="know_text">Know the forest cover of your area
          <span className="know_span">
            <button className="know_btn" onClick={() => fetchData()}>
              <input
                className="know_input"
                type="button"
                value="Click me"
                onClick={togglePopup}
              />
              {isOpen && <Popup
                content={<>
                  <div className="know_locate">{responseData.name}</div>
                  <a href=" " className="data-card"
                  style={{width:"60%" , margin:"5px auto"}}
                  >
                    <div className="data-cardbox"
                    style={{height:"40px"}}
                    >
                      <h3 style={{fontSize:"1.5rem"}}>16 km sq</h3>
                      <h4 style={{fontSize:"2rem"}}>Sonipat</h4>
                      <p style={{fontSize:"1.3rem"}}>Total Area : 1268 km sq</p>
                      <p style={{fontSize:"1.3rem"}}>Percentage of forest area : 1.26%</p>
                    </div>
                  </a>
                </>}
                handleClose={togglePopup}
              />} 
            </button>          
          </span>
        </h2>
      </div>
    </div>
  )
}

export default Know