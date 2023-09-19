

import React, { useState } from 'react'
import "./Login.css"
import axios from "../../Constant/Axios";
import { PiWarningCircleBold } from "react-icons/pi";
import { message } from "antd";
import { useNavigate } from 'react-router-dom';
import Failed from '../../UserComponts/Failed/Failed';

function Login() {

  const navigate = useNavigate();

  const [email, setemail] = useState("");

  const [password, setpassword] = useState("");

  const [err, seterr] = useState(false);

  const [failed, setfailed] = useState(false);

  const login = (e) => {

    e.preventDefault();

    if (email && password) {

      seterr(false);

      const data = {

        email,
        password
      }


      axios.post("/admin/master/login", data).then((respo) => {


        const result = respo.data;

        if (result.flag) {

          navigate("/admin/signup");

        } else if (result.nomaster) {

          message.error("can't add new person. you are not master ");
          seterr(true);

        } else if (result.err) {

          message.error("somthing worng");

        } else {

          message.error("email and password does  not match");
          seterr(true);
        }

      }).catch(err => {

        setfailed(true);

      })

    } else {

      seterr(true);
    }

  }



  return (
    <div>

      {failed ? <Failed />

        :

        <div className='main-adminlog'>

          <div className='loginbox-adminlog' >

            <h2 className='title-adminlog'> Master Login</h2>

            <form className='form-adminlog' onSubmit={login} >

              <input type='text' name='emailid' placeholder='email id' onChange={(e) => { setemail(e.target.value) }} />

              {err ? <PiWarningCircleBold className='err-login' /> : null}  <br />     <br />

              <input type='password' name='password' placeholder='password' onChange={(e) => { setpassword(e.target.value) }} />

              {err ? <PiWarningCircleBold className='err-login' /> : null}   <br /><br />

              <button className='btn-adminlog'> Login </button>

            </form>

            <p className='p-adminlog'> are you master..?  master can only add new person !  </p>



          </div>





        </div>






      }

    </div>
  )
}

export default Login
