
import axios from "axios"

const basisUrl="https://library-backend-91wt.onrender.com"



const instance=axios.create({
    baseURL:basisUrl
})

export default instance


