import Fetch from "@/utils/Fetch";
import axios from "_axios@0.26.1@axios";

export default {
  getToken(params){
    return Fetch({
      url:'https://cbec.91hiwork.com/oauth/oauth/token',
      method:'post',
      data:params,
      transformRequest:[function(data){
        let req = ''
        for(var i in data){
          req += encodeURIComponent(i) + '=' + encodeURIComponent(data[i]) + '&'
        }
        console.log(req,'000000=====')
        return req;
      }],
      headers:{
        'Authorization': 'Basic aGlsaWZlQnVkZ2V0OjlkMmNjNTljYjUzMjcyMTVkMGY3M2VhYzcwZGFhYjFj',
        'Content-Type':'application/x-www-form-urlencoded'
      }
    })
  },
  findProceedsRule(params,url){
    return Fetch({
      url,
      method:'post',
      data:params
    })
  },
}
