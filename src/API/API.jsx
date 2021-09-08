import * as axios from 'axios'

let instance = axios.create({
    baseURL: 'http://ventis-pay-admin-api-test.eba-ucd32mtn.eu-central-1.elasticbeanstalk.com/',
})


export const login = async (email, password, grant_type = "password", store = "VENTIS" )=>{
    return await instance.post('api/p/admin/oauth/token', `grant_type=${grant_type}&username=${email}&password=${password}&store=${store}`)
}

