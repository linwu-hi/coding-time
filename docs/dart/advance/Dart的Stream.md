# Dart的Stream


Stream 是 Dart 中处理连续的异步事件的工具。例如，你可以使用 Stream 来读取文件的内容，或者监听用户的鼠标点击。

一个简单的 Stream 示例：

```dart
Future<void> main() async {
  var stream = Stream.fromIterable([1, 2, 3, 4, 5]);

  await for (var number in stream) {
    print(number);  // 输出：1, 2, 3, 4, 5
  }
}
```

在这个示例中，我们使用 `Stream.fromIterable` 创建了一个 Stream，它将连续地产生 1 到 5 这五个数字。然后我们使用 `await for` 循环来监听 Stream 的事件。

如果你需要在监听 Stream 的过程中处理错误，你可以使用 `try`/`catch`：

```dart
Future<void> main() async {
  var stream = Stream<int>.periodic(
    Duration(seconds: 1),
    (x) {
      if (x == 3) {
        throw Exception('Error!');
      } else {
        return x;
      }
    },
  ).take(5);

  try {
    await for (var number in stream) {
      print(number);
    }
  } catch (error) {
    print(error);
  }
}
```

##  创建 Stream

在 Dart 中，你可以使用多种方式来创建 Stream。前面我们已经见到了 `Stream.fromIterable`，下面是一些其他的方法：

* `Stream.empty`：创建一个不产生任何事件的 Stream。
* `Stream.error`：创建一个只产生一个错误事件的 Stream。
* `Stream.periodic`：创建一个周期性地产生事件的 Stream。
* `StreamController`：手动控制 Stream 的事件和错误。

例如，我们可以使用 `StreamController` 创建一个 Stream，并手动控制其事件和错误：

```dart
void main() async {
  var controller = StreamController<int>();

  controller.sink.add(1);
  controller.sink.add(2);
  controller.sink.addError('Oops!');
  controller.sink.add(3);
  controller.close();

  await for (var event in controller.stream) {
    print(event);
  }
}
```

在这个示例中，我们首先创建了一个 `StreamController`。然后我们使用 `sink.add` 方法添加了三个事件，使用 `sink.addError` 方法添加了一个错误。最后我们使用 `controller.close` 方法表示我们不会再添加任何事件或错误。

## 处理 Stream 事件

我们可以使用 `Stream.listen` 方法监听 Stream 的事件：

```dart
void main() {
  var stream = Stream.fromIterable([1, 2, 3, 4, 5]);

  stream.listen(
    (event) {
      print('Received event: $event');
    },
    onError: (error) {
      print('Received error: $error');
    },
    onDone: () {
      print('All done');
    },
  );
}
```

在这个示例中，我们监听了 Stream 的数据事件、错误事件和完成事件。

## 转换 Stream

Stream API 提供了许多方法来转换 Stream。例如，你可以使用 `map` 方法来处理每个数据事件，或者使用 `where` 方法来过滤数据事件：

```dart
void main() async {
  var stream = Stream.fromIterable([1, 2, 3, 4, 5]);

  var evenStream = stream.where((event) => event % 2 == 0).map((event) => event * 2);

  await for (var event in evenStream) {
    print(event);  // 输出：4, 8
  }
}
```

在这个示例中，我们首先使用 `where` 方法创建了一个只包含偶数的 Stream，然后我们使用 `map` 方法将每个偶数乘以 2。

## 组合 Stream

你还可以使用 `StreamZip` 或 `StreamGroup` 来组合多个 Stream。例如，你可以使用 `StreamZip` 来同步处理两个 Stream 的数据事件：

```dart
void main() async {
  var stream1 = Stream.periodic(Duration(seconds: 1), (x) => x).take(5);
  var stream2 = Stream.periodic(Duration(seconds: 2), (x) => x).take(3);

  var zippedStream = StreamZip([stream1, stream2]);

  await for (var event in zippedStream) {
    print(event);  // 输出：[0, 0], [1, 1], [2, 2]
  }
}
```

## Stream的应用场景


好的，让我详细地解释一下上述的几个应用场景，并提供一些具体的代码示例：

### 用户界面交互

在 Flutter 等 Dart 构建的应用程序中，Stream 可以用来监听并响应用户的交互行为。例如，你可以创建一个自定义的 `StreamController`，并使用它来监听按钮点击事件：

```dart
// 创建一个 StreamController
StreamController controller = StreamController();

void main() {
  // 按钮点击事件监听
  controller.stream.listen((data) {
    print("Button clicked: $data");
  });

  // 模拟按钮点击
  controller.sink.add('Button 1');
}

// 在你的 UI 中，当按钮被点击时，你可以调用 controller.sink.add 来发送一个事件。
```

### 网络请求

在进行网络请求时，服务器的响应通常会分成多个数据包。你可以使用 Stream 来连续地接收和处理这些数据包，这样你就可以在不等待整个响应完成的情况下开始处理数据：

```dart
import 'dart:convert';
import 'dart:io';

void main() async {
  var client = HttpClient();

  client.getUrl(Uri.parse('https://api.github.com/users/dart-lang/repos'))
    .then((HttpClientRequest request) {
      return request.close();
    })
    .then((HttpClientResponse response) {
      response.transform(Utf8Decoder()).listen((contents) {
        print(contents);
      });
    });
}
```

### 文件操作

当你需要读取一个大文件时，可以使用 Stream 来逐行处理文件内容，这样你可以在不需要将整个文件加载到内存的情况下开始处理数据：

```dart
import 'dart:convert';
import 'dart:io';

void main() {
  File file = new File('path_to_your_file');
  Stream<List<int>> inputStream = file.openRead();

  inputStream
    .transform(utf8.decoder)       // Decode bytes to UTF-8.
    .transform(new LineSplitter()) // Convert stream to individual lines.
    .listen((String line) {        // Process results.
        print('$line: ${line.length} bytes');
    },
    onDone: () { print('File is now closed.'); },
    onError: (e) { print(e.toString()); });
}
```

### 定时任务

你可以使用 Stream 创建一个定时任务，然后在每个时间间隔中执行一些操作。例如，下面的代码使用 `Stream.periodic` 创建了一个每秒执行一次的定时任务：

```dart
void main() {
  // 创建一个每秒触发一次的 Stream
  Stream.periodic(Duration(seconds: 1), (count) => count).listen((count) {
    print('Tick: $count');
  });
}
```

## 5. 数据流处理

在处理大量数据流时，你可以使用 Stream 创建一个数据管道，并利用其提供的 `map`、`filter`、`reduce` 等操作进行数据处理。以下示例将 Stream 中的数字逐个乘以 2：

```dart
void main() {
  Stream.fromIterable([1, 2, 3, 4, 5])
    .map((value)

 => value * 2)
    .listen((value) {
      print(value); // 输出 2, 4, 6, 8, 10
    });
}
```

这些示例展示了如何在不同的场景中使用 Stream。一旦你熟悉了 Stream 的工作方式，你会发现它是一个非常强大的工具，能够让你更方便地处理异步事件。