# Dart的异步编程


在 Dart 中，我们使用 `Future` 和 `async`/`await` 来进行异步编程。当你调用一个异步函数时，它将立即返回一个 `Future` 对象。当异步操作完成时，`Future` 将被“完成”或“解析”。

## 使用 Future

Future 是 Dart 中用于表示异步操作的对象。当你调用一个异步函数时，它会立即返回一个 Future 对象，表示这个异步操作的结果。

Future 对象有三种状态：

未完成：异步操作还没有完成。
完成（resolved）：异步操作成功完成，并返回一个值。
错误（rejected）：异步操作失败，并返回一个错误。

> 如果你了解Javascript中的Promise，那么就能非常简单掌握Future了

一个简单的 `Future` 示例如下：

```dart
Future<String> fetchUserOrder() {
  // 模拟网络延迟
  return Future.delayed(Duration(seconds: 2), () => 'Large Latte');
}

void main() {
  print('Fetching user order...');
  fetchUserOrder()
      .then((order) => print('Your order is: $order'))
      .catchError((error) => print(error));
}
```

在这个示例中，`fetchUserOrder` 是一个异步函数，它使用 `Future.delayed` 来模拟网络延迟。当调用 `fetchUserOrder` 时，它立即返回一个 `Future<String>` 对象。然后我们使用 `then` 和 `catchError` 来处理 `Future` 的成功和错误结果。

##  使用 async/await

你也可以使用 `async`/`await` 关键字来更简洁地处理异步操作。一个使用 `async`/`await` 的示例如下：

```dart
Future<String> fetchUserOrder() {
  return Future.delayed(Duration(seconds: 2), () => 'Large Latte');
}

Future<void> main() async {
  print('Fetching user order...');
  try {
    var order = await fetchUserOrder();
    print('Your order is: $order');
  } catch (error) {
    print(error);
  }
}
```

在这个示例中，我们使用 `async` 关键字来标记 `main` 函数是一个异步函数。然后我们使用 `await` 关键字来等待 `fetchUserOrder` 的结果。如果 `fetchUserOrder` 抛出一个错误，我们可以使用 `try`/`catch` 来处理这个错误。

需要注意的是，你只能在 `async` 函数中使用 `await` 关键字。
