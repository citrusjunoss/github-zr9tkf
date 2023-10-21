const http = $fetch.create({
  onRequest({ options }) {
    options.baseURL = process.env.VITE_API_APP;
  },
  onResponse({ response, options }) {
    return response._data;
  },
});

/**
 * @description 请求代码
 * @param url string
 * @param opt 选项
 * @returns promise
 */
function fetch<T>(url: string, opt: any): Promise<T> {
  const data = {
    ...opt,
    method: opt.method || undefined,
    params: opt.params || undefined,
    body: opt.data ? JSON.stringify(opt.data) : undefined,
  };
  return http<T>(url, { ...data });
}

export default fetch;
