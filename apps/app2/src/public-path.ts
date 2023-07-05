// 解决子应用在微服务中打开无法加载自身的静态资源问题
// @ts-ignore
if (window.__POWERED_BY_QIANKUN__){
	// @ts-ignore
	__webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

export {}