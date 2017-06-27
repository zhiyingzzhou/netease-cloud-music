import axios from 'axios';

const CancelToken = axios.CancelToken;
let cancel = [];

// let instance = axios.create({
//     timeout: 25000,
//     headers: {'Content-Type': 'application/json;charset=utf-8'},
// });

export const cancelRequest = function() {
    cancel.forEach(item=>{
        Object.keys(item).forEach(key=>{
            item[key]('cancel request by change page!');
        });
    });
    cancel = [];
}

export const cancelRequestByKey = function(key) {
    cancel.forEach(item=>{
        item[key] && item[key](`cancel request: ${key}!`);
    });
}

export const AjaxByGet = uri => {
    return new Promise(function(resolve, reject){
        axios({
            url: uri,
            method: 'get',
            cancelToken: new CancelToken(function (c) {
                cancel.push({
                    [uri]: c
                });
            })
        })
        .then(response=>{
            console.log(response);
        })
    })
}

export const AjaxByPost = (uri, data) => {
    return new Promise(function(resolve, reject) {
        axios({
            url: uri,
            method: 'post',
            data: data,
            header: {
                contentType: 'application/json;charset=utf-8'
            },
            cancelToken: new CancelToken(function (c) {
                cancel.push({
                    [uri]: c
                });
            }),
            transformResponse(data,b){
                try{
                    return JSON.parse(data);
                }catch(err){
                    // console.log(err);
                }
                
            }
        })
        .then(response => {
            const {data} = response;
            console.log(data);
        })
        .catch(function(response,e) {
            // console.log(response.config);
            if (response instanceof Error) {
                // Something happened in setting up the request that triggered an Error
                // console.log('Error', response.message);
                // reject(response);
                console.error('网络错误',response.message);
            } else if(axios.isCancel(response)) {
                // console.info(response.message);
            } else {
                // The request was made, but the server responded with a status code
                // that falls out of the range of 2xx
                // console.log(response.data);
                // console.log(response.status);
                // console.log(response.headers);
                // console.log(response.config);
            }
        })
    });
    
}

export const AjaxByToken = (uri, data) => {
    return AjaxByPost(uri, data);
}