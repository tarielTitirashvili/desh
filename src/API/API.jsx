import * as axios from 'axios'

let instance = axios.create({
    baseURL: 'http://ventis-pay-admin-api-test.eba-ucd32mtn.eu-central-1.elasticbeanstalk.com/',
})

export const loginAPI = async (email, password, grant_type = "password", store = "VENTIS" )=>{
    return await instance.post('api/p/admin/oauth/token', 
    `grant_type=${grant_type}&username=${email}&password=${password}&store=${store}`, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic Y2xpZW50OjEyMzQ='
        }
    }
    )
}

export const checkAuthAPI = async (token = localStorage.getItem("access_token"))=>{
    return await instance.get('api/s/admin/my/user'
    , {
        headers: {
            'Authorization': `bearer ${token}`
        }
    }
    )
}

export const getUsersInfoAPI = async (token = localStorage.getItem("access_token"))=>{
    return await instance.get('api/s/admin/accounts/report'
    , {
        headers: {
            'Authorization': `bearer ${token}`
        }
    }
    )
}

export const getUsersAPI = async (page = 1, AccountID, email, name, token = localStorage.getItem("access_token"))=>{
    return await instance.get(`api/s/admin/accounts/search?${AccountID?`accountId=${AccountID}&`: '' }${email?`email=${email}&`:''}${name?`name=${name}&`:''}size=20&page=${page-1}`
    , {
        headers: {
            'Authorization': `bearer ${token}`
        }
    }
    )
}