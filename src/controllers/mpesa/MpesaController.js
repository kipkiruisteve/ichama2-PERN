import request from 'request'
import responseHandler from '../../helpers/responsehandler'
export default class MpesaController {
    static async getAccessToken(req,res){
        let url = ""
        let auth = ""
        request(
            {
                url: url,
                headers: {
                    "Authorization": "Basic " + auth
                }
            },
            (error, response, body) => {
                if (error) {
                    console.log(error)
                }
                else {
                    return responseHandler(res,)
                //    return JSON.parse(body).access_token
                }
            }
        )
    }
}