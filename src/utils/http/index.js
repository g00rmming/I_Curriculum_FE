import axios from 'axios';

// 타임아웃 30초
axios.defaults.timeout = 30000;
axios.interceptors.request.use(config => {
     // 토큰을 가져와서 Authorization 헤더에 추가
     const token = localStorage.getItem('authorization');
     if (token) {
       config.headers.Authorization = `${token}`;
     }
    console.log("요청 전 ", config.url);
    return config;
}, error => {
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log("응답이완료 ", response.config.url);
    return response;
}, async (error) => {
    // 프로그램 방식으로 컴포넌트 호출
    if(error.response.status===401) {
        alert(error.response.status)
        return Promise.reject(error);
    }
    if(error.response.status===400){
        // 로그인 access 토큰이 만료 되었을때
        return Promise.reject(error); 
    }
    if(error.response.status===406){
        // refresh token 만료
        return Promise.reject(error); 
    }
    // return Promise.reject(error);
});


const defaultHeader = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
}


// 토근을 받아와서 헤더를 생성할때의 기본 헤더
// const tokenHeader = (token) => {
//     return headers = {
//         'Content-Type': 'application/json',
//         'Authorization': `vRealizeOpsToken ${token}`,
//         'Accept': 'application/json'
//     };
// }
const httpApi = {
    get: function (url, opt) {
        const apiOpt = {
            url: url,
            params: opt?.params ?? {},
            headers: opt?.headers ?? defaultHeader
        }
        return new Promise((resolve, reject) => {
            axios.get(url, {
                params: apiOpt.params,
                headers: apiOpt.headers
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    },
    post: function (url, body, opt) {
        const apiOpt = {
            url: url,
            params: opt?.params ?? {},
            headers: opt?.headers ?? defaultHeader,
            body: body ?? {}
        }
        return new Promise((resolve, reject) => {
            axios.post(url, apiOpt.body, {
                params: apiOpt.params,
                headers: apiOpt.headers
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    },
    delete: function (url, opt) {
        const apiOpt = {
            url: url,
            params: opt?.params ?? {},
            headers: opt?.headers ?? defaultHeader
        }
        return new Promise((resolve, reject) => {
            axios.delete(url, {
                params: apiOpt.params,
                headers: apiOpt.headers
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    },
    put: function (url, body, opt) {
        const apiOpt = {
            url: url,
            params: opt?.params ?? {},
            headers: opt?.headers ?? defaultHeader,
            body: body ?? {}
        }
        return new Promise((resolve, reject) => {
            axios.put(url, apiOpt.body, {
                params: apiOpt.params,
                headers: apiOpt.headers
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    },
    patch: function (url, body, opt) {
        const apiOpt = {
            url: url,
            params: opt?.params ?? {},
            headers: opt?.headers ?? defaultHeader,
            body: body ?? {}
        }
        return new Promise((resolve, reject) => {
            axios.patch(url, apiOpt.body, {
                params: apiOpt.params,
                headers: apiOpt.headers
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    }
}

export default httpApi;