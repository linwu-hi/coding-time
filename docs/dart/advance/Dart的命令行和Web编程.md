# Dart的命令行和Web编程

Dart是一个多平台的语言，它支持命令行编程和Web编程。下面是这两种编程方式的一些基础知识。

## Dart的命令行编程

在命令行编程中，我们主要使用`dart:io`库，这个库提供了一些与文件系统交互、网络编程、进程管理等功能的类和函数。

### 读取和写入文件

下面是一个例子，演示如何在Dart中读取和写入文件：

```dart
import 'dart:io';

void main() async {
  var file = File('test.txt');

  // 写入文件
  await file.writeAsString('Hello, Dart!');

  // 读取文件
  var contents = await file.readAsString();
  print(contents);  // 输出：Hello, Dart!
}
```

### 网络编程

`dart:io`库还提供了一些类来进行HTTP和WebSocket编程。下面是一个简单的HTTP客户端的例子：

```dart
import 'dart:io';

void main() async {
  var url = Uri.parse('https://dart.dev');
  var client = HttpClient();

  var request = await client.getUrl(url);
  var response = await request.close();

  await for (var data in response.transform(Utf8Decoder())) {
    print(data);
  }
}
```

## Dart的Web编程

Dart也可以用于构建高质量的Web应用。在Web编程中，我们通常使用`dart:html`库，这个库提供了一些与DOM交互、处理事件、创建HTML元素等功能的类和函数。

### 操作DOM

下面是一个例子，演示如何在Dart中操作DOM：

```dart
import 'dart:html';

void main() {
  // 获取一个元素
  var title = querySelector('#title');

  // 修改元素的内容
  title.text = 'Hello, Dart!';
}

// HTML文件：
// <h1 id="title">Welcome to Dart</h1>
```

### 处理事件

我们还可以在Dart中处理各种用户事件，例如点击事件：

```dart
import 'dart:html';

void main() {
  var button = querySelector('#button');

  button.onClick.listen((event) {
    print('Button clicked!');
  });
}

// HTML文件：
// <button id="button">Click me</button>
```
##  Dart编译成JavaScript

Dart语言可以被编译成JavaScript，这使得Dart能在所有的现代浏览器中运行，无论是桌面浏览器还是移动设备浏览器。Dart提供了`dart2js`和`dartdevc`两种编译工具，分别用于生产环境和开发环境。

### dart2js

`dart2js`是一个强大的工具，它可以将Dart代码编译成高效的、压缩的、部署就绪的JavaScript代码。通常我们在准备部署我们的Dart web应用到生产环境时使用`dart2js`。

下面是一个使用`dart2js`的例子：

```shell
dart2js -O2 -o main.dart.js main.dart
```

这个命令会将`main.dart`编译成`main.dart.js`，并且使用了`-O2`优化选项。

###  dartdevc

`dartdevc`（Dart Development Compiler）是另一个Dart到JavaScript的编译器，主要用于开发环境。相比于`dart2js`，`dartdevc`生成的JavaScript代码更易于调试，但是不如`dart2js`生成的代码运行效率高。

在开发环境中，我们通常使用`webdev serve`命令来运行我们的Dart web应用，这个命令会自动使用`dartdevc`来编译我们的代码：

```shell
webdev serve
```

然后你就可以在浏览器中打开你的应用，地址通常是`localhost:8080`。

