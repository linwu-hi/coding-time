# Dart模块化详解

在大型软件项目中，模块化是必不可少的，它可以帮助我们更好地组织和管理代码，提高代码的可读性和可维护性。在Dart中，模块化是通过库（libraries）来实现的。

##  库的定义与使用

> 这里简单做个介绍，下一章节会重点分析

Dart库是一种代码模块，它可以包含变量、函数、类和其他代码。一个库在其它库中通过`import`关键字导入后，库中的代码就可以被使用。

Dart语言自带了一些核心库，如 `dart:core`, `dart:io`, `dart:html`等。例如：

```dart
import 'dart:io';
```

你也可以导入自定义的库或者第三方库。如果库在包（package）中，可以通过以下方式导入：

```dart
import 'package:my_package/my_library.dart';
```

## 创建自定义库

你可以创建自己的Dart库，一个库就是一个Dart源文件。该文件可以包含一些函数和类的定义。例如，你可以创建一个文件`my_library.dart`：

```dart
// 定义一个函数
void myFunction() {
  print('Hello, Dart!');
}

// 定义一个类
class MyClass {
  void sayHello() {
    print('Hello from MyClass!');
  }
}
```

然后，在其他Dart文件中导入并使用这个库：

```dart
import 'my_library.dart';

void main() {
  myFunction();

  var myObject = MyClass();
  myObject.sayHello();
}
```

##  导入库的一部分

有时，我们可能只需要使用库中的某一部分代码。这时，我们可以使用`show`关键字来只导入需要的部分：

```dart
import 'my_library.dart' show MyClass; // 只导入MyClass
```

反之，如果你只想排除库中的某些部分，可以使用`hide`关键字：

```dart
import 'my_library.dart' hide myFunction; // 导入my_library，但不包括myFunction
```

##  延迟加载（Lazy Loading）

Dart也支持延迟加载，也被称为懒加载，可以在需要时再加载和初始化模块。延迟加载可以提高应用的启动速度。你可以使用`deferred as`关键字来标记延迟加载的库：

```dart
import 'package:somepackage/somelibrary.dart' deferred as someLibrary;

void main() {
  someLibrary.loadLibrary().then((_) {
    someLibrary.someFunction();
  });
}
```

在上述代码中，`someLibrary`将在`loadLibrary()`函数调用后才会被加载。在库加载完成后，`someFunction()`才会被调用。