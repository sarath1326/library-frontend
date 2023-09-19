



import React from 'react'
import "./Place_Products.css"
import axios from "../../Constant/Axios"
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function Place_Products(props) {

  const { cartid } = useParams();

  const [fetchdata, setfetchdata] = useState([]);


  useEffect(() => {

    axios("/user/plcepro?cartid=" + cartid).then((respo) => {

      if (respo.data.flag) {

        setfetchdata(respo.data.data);

      } else {

        console.log("plce pro empty");

      }

    }).catch(err => {

      props.failed(true);

    })

  }, [])



  return (
    <div>



      <div className='main-plcepro'>


        {

          fetchdata.map((obj) => (

            <div className='itembox-plcepro'>

              <div className='imgbox-plcepro'>
                <img className='proimg-plcepro' src={`data:${obj.prodata.contentType};base64,${obj.prodata.imageBase64}`} alt='lodig...' />

              </div>

              <div className='textbox-plcepro'>

                <p className='titile-plcepro' >{obj.prodata.name}</p>
                <p> Language : {obj.prodata.language}</p>
                <p> Quuntity : {obj.quantity}</p>
                <p> Price : {obj.prodata.price}/-</p>

              </div>

            </div>






          ))




        }


























      </div>











    </div>
  )
}

export default Place_Products
