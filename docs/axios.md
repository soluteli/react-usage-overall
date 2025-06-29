## Axios 拦截器顺序
[Source Code](https://github.com/axios/axios/blob/ef36347fb559383b04c755b07f1a8d11897fab7f/lib/core/Axios.js#L65-L200)

1. Axios 拦截器是洋葱结构。 request interceptors 是**先进后出**，response interceptors 是**先进先出**
```js
request.interceptors.use(interceptor1); 
request.interceptors.use(interceptor2);
// log: interceptor2 -> interceptor 1

response.interceptors.use(interceptor3); 
response.interceptors.use(interceptor4);
// log: interceptor3 -> interceptor 4
```

2. 拦截器的 `onReject` 会在 `onResolve` 有错误时执行，并且后续的 `onReject` 都会执行(onReject 需要返回 `rejected Promise`)。

3. 其它 config
    - [withCredentials](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/withCredentials) - Add cookie to request header
    - withXSRFToken
        - xsrfCookieName?: string;
        - xsrfHeaderName?: string;
    ```js
        if (platform.hasStandardBrowserEnv) {
            withXSRFToken && utils.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));

            if (withXSRFToken || (withXSRFToken !== false && isURLSameOrigin(newConfig.url))) {
            // Add xsrf header
            const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies.read(xsrfCookieName);

            if (xsrfValue) {
                headers.set(xsrfHeaderName, xsrfValue);
            }
            }
        }
    ```