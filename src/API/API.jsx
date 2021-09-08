import * as axios from 'axios'

let instance = axios.create({
    withCredentials: true,
    baseURL: 'http://ventis-pay-admin-api-test.eba-ucd32mtn.eu-central-1.elasticbeanstalk.com',
})


export const login = async (email, password, grant_type = "password", store = "VENTIS" )=>{
    return await instance.post('/api/p/admin/oauth/token', {email, password, grant_type, store })
}