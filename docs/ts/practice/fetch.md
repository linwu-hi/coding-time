
# TypeScript封装Fetch

### 1. 安装与配置TypeScript

首先，你的电脑上安装TypeScript。在命令行中输入以下命令:

```bash
npm install -g typescript
```

在你的项目根目录中，生成一个 `tsconfig.json` 文件来配置TypeScript的编译选项。在命令行中输入以下命令:

```bash
tsc --init
```

编辑 `tsconfig.json` 文件。这个文件配置了TypeScript的编译选项。确保以下设置已经开启:

```json
{
  "compilerOptions": {
    "target": "ES2015",
    "module": "commonjs",
    "strict": true
  }
}
```

### 2. 创建Fetch服务

在`src`文件夹中创建一个新的 `FetchService.ts` 文件。我们将在这个文件中封装fetch API:
当然，下面我们会将`put`和`delete`方法也添加到我们的`FetchService`中：

```typescript
export class FetchService {
  async get<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data: T = await response.json();
    return data;
  }

  async post<T>(url: string, body: any): Promise<T> {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data: T = await response.json();
    return data;
  }

  async put<T>(url: string, body: any): Promise<T> {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data: T = await response.json();
    return data;
  }

  async delete<T>(url: string): Promise<T> {
    const response = await fetch(url, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data: T = await response.json();
    return data;
  }
}
```

这样我们就成功地创建了一个`FetchService`类，它封装了 `fetch` API的 `GET`, `POST`, `PUT` 和 `DELETE` 方法。每个方法都返回一个Promise，该Promise解析为一个泛型 `T`，这意味着你可以指定返回数据的类型。

### 3. 使用FetchService类


```typescript
import { FetchService } from './FetchService';

const fetchService = new FetchService();

// GET request
const fetchData = async () => {
  try {
    const data = await fetchService.get<{ message: string }>('https://api.example.com/data');
    console.log(data.message);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// POST request
const sendData = async () => {
  try {
    const data = await fetchService.post<{ message: string }>('https://api.example.com/data', {
      key: 'value'
    });
    console.log(data.message);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// PUT request
const updateData = async () => {
  try {
    const data = await fetchService.put<{ message: string }>('https://api.example.com/data', {
      key: 'new-value'
    });
    console.log(data.message);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// DELETE request
const deleteData = async () => {
  try {
    const data = await fetchService.delete<{ message: string }>('https://api.example.com/data');
    console.log(data.message);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

fetchData();
sendData();
updateData();
deleteData();
```

以上代码首先导入了我们创建的 `FetchService` 类，并实例化了一个新的 `fetchService` 对象。然后，我们定义了四个异步函数，每个函数都执行一个网络请求，并在请求成功时打印出返回数据中的 `message` 字段。这四个函数分别对应 `GET`, `POST`, `PUT` 和 `DELETE` 请求。

我们使用了 `<{ message: string }>` 来指定返回数据的类型，这样我们就可以得到TypeScript的类型检查和自动补全功能。如果你的数据类型更复杂，你可以定义一个接口来描述它，然后在这里使用那个接口。

如果请求失败，我们在 `catch` 块中捕获错误并打印错误消息。如果服务器返回的HTTP状态码不是200-299，`fetch` API会认为请求成功，不会抛出错误。因此，我们在 `FetchService` 类的每个方法中都检查了 `response.ok` 属性，如果请求未成功，我们抛出一个包含状态文本的错误。


### 4.拦截器实现

> 在这个版本的 FetchService 中，我们把公共的请求逻辑放到了 _request 方法中。我们把方法（GET、POST、PUT、DELETE），URL和可能的请求体传递给 _request 方法，然后它处理所有的共享逻辑，包括运行拦截器，发送请求，处理响应和解析JSON。


```ts
export class FetchService {
  private requestInterceptors: Array<(url: string, options: RequestInit) => void> = [];
  private responseInterceptors: Array<(response: Response) => void> = [];

  async get<T>(url: string): Promise<T> {
    return this._request('GET', url);
  }

  async post<T>(url: string, body: any): Promise<T> {
    return this._request('POST', url, body);
  }

  async put<T>(url: string, body: any): Promise<T> {
    return this._request('PUT', url, body);
  }

  async delete<T>(url: string): Promise<T> {
    return this._request('DELETE', url);
  }

  addRequestInterceptor(interceptor: (url: string, options: RequestInit) => void) {
    this.requestInterceptors.push(interceptor);
  }

  addResponseInterceptor(interceptor: (response: Response) => void) {
    this.responseInterceptors.push(interceptor);
  }

  private async _request<T>(method: string, url: string, body?: any): Promise<T> {
    let options: RequestInit = {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      }
    };
    if (body) {
      options.body = JSON.stringify(body);
    }
    this.runRequestInterceptors(url, options);
    const response = await fetch(url, options);
    this.runResponseInterceptors(response);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data: T = await response.json();
    return data;
  }

  private runRequestInterceptors(url: string, options: RequestInit) {
    this.requestInterceptors.forEach(interceptor => interceptor(url, options));
  }

  private runResponseInterceptors(response: Response) {
    this.responseInterceptors.forEach(interceptor => interceptor(response));
  }
}
```

示例:


```ts
const fetchService = new FetchService();

// 添加一个请求拦截器
fetchService.addRequestInterceptor((url, options) => {
  options.headers = {
    ...options.headers,
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  };
});

// 添加一个响应拦截器
fetchService.addResponseInterceptor(response => {
  if (response.status === 401) {
    console.error('Unauthorized!');
  }
});
```

## 总结

这是一个基础的实现，其它可以根据你的需求来进行修改或扩展