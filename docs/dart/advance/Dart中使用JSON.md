# Dart中使用JSON

# 第九章：Dart中使用JSON

JSON (JavaScript Object Notation) 是一种轻量级的数据交换格式，它基于JavaScript的一个子集。在Dart中，你可以使用`dart:convert`库来进行JSON的编码和解码。

## 9.1 JSON编码

你可以使用`jsonEncode`函数将一个`Dart对象`转换为JSON字符串。例如：

```dart
import 'dart:convert';

void main() {
  var person = {
    'name': 'John Doe',
    'age': 30,
    'city': 'New York'
  };

  var json = jsonEncode(person);
  print(json);  // 输出：{"name":"John Doe","age":30,"city":"New York"}
}
```

如果你需要将一个`Dart类`转换为JSON字符串，那么你需要在对象中添加一个`toJson`方法，这个方法应该返回一个可以直接转换为JSON字符串的对象。例如：

```dart
import 'dart:convert';

class Person {
  String name;
  int age;
  String city;

  Person(this.name, this.age, this.city);

  Map<String, dynamic> toJson() => {
        'name': name,
        'age': age,
        'city': city,
      };
}

void main() {
  var person = Person('John Doe', 30, 'New York');
  var json = jsonEncode(person);
  print(json);  // 输出：{"name":"John Doe","age":30,"city":"New York"}
}
```

## 9.2 JSON解码

你可以使用`jsonDecode`函数将一个JSON字符串转换为Dart对象。例如：

```dart
import 'dart:convert';

void main() {
  var json = '{"name":"John Doe","age":30,"city":"New York"}';
  var person = jsonDecode(json);
  print(person);  // 输出：{name: John Doe, age: 30, city: New York}
}
```

如果你需要将一个JSON字符串转换为`Dart类`，那么你需要在对象中添加一个命名构造函数，例如`fromJson`，这个构造函数应该接收一个`Map<String, dynamic>`类型的参数。例如：

```dart
import 'dart:convert';

class Person {
  String name;
  int age;
  String city;

  Person(this.name, this.age, this.city);

  Person.fromJson(Map<String, dynamic> json)
      : name = json['name'],
        age = json['age'],
        city = json['city'];
}

void main() {
  var json = '{"name":"John Doe","age":30,"city":"New York"}';
  var person = Person.fromJson(jsonDecode(json));
  print(person.name);  // 输出：John Doe
}
```

## 使用json_serializable


在上一部分中，我们介绍了如何手动将JSON转换为Dart对象。然而，当你处理复杂的JSON数据时，手动转换可能会变得繁琐并且容易出错。因此，你可能会想使用代码生成库来自动完成这部分工作。在Dart中，有一种非常流行的库就是`json_serializable`。


要使用`json_serializable`，你首先需要在`pubspec.yaml`文件中添加相关的依赖：

```yaml
dependencies:
  flutter:
    sdk: flutter
  json_annotation: ^4.0.0

dev_dependencies:
  flutter_test:
    sdk: flutter
  build_runner: ^2.0.0
  json_serializable: ^4.0.0
```

然后运行`flutter pub get`命令来安装这些包。

接下来，你需要定义你的模型类，并使用一些注解：

```dart
import 'package:json_annotation/json_annotation.dart';

part 'person.g.dart';

@JsonSerializable()
class Person {
  String name;
  int age;
  String city;

  Person(this.name, this.age, this.city);

  factory Person.fromJson(Map<String, dynamic> json) => _$PersonFromJson(json);

  Map<String, dynamic> toJson() => _$PersonToJson(this);
}
```

在这个例子中，`_$PersonFromJson`和`_$PersonToJson`是由`json_serializable`生成的辅助函数，它们将会在我们运行代码生成命令后自动生成。

现在，你可以运行以下命令来生成JSON序列化代码：

```shell
flutter pub run build_runner build
```

生成的代码将会放在一个名为`person.g.dart`的文件中。

现在，你就可以使用`fromJson`和`toJson`方法来进行JSON和模型的转换了：

```dart
void main() {
  var json = '{"name":"John Doe","age":30,"city":"New York"}';
  
  var person = Person.fromJson(jsonDecode(json));
  print(person.name);  // 输出：John Doe
  
  var json = jsonEncode(person.toJson());
  print(json);  // 输出：{"name":"John Doe","age":30,"city":"New York"}
}
```

`json_serializable`提供了许多其他的功能，例如处理嵌套的模型、使用自定义的日期格式、处理枚举类型等。要了解更多信息，你可以查看其官方文档。


## 实践

> 实际开发中，我们会将接口拿到的JSON数据转化为Dart 类 (通常被称为模型或数据类)

主要有以下原因：


1. **类型安全**：Dart 是一种强类型语言，这意味着当你定义了一个变量的类型，你就不能再将其他类型的值赋给这个变量。通过将 JSON 数据转换为 Dart 类，你可以获得编译时的类型检查，这可以帮助你找出可能的错误。例如，如果你尝试将一个字符串赋给一个整数类型的字段，编译器会给出错误。

2. **代码可读性和可维护性**：将 JSON 数据转换为 Dart 类可以使你的代码更加清晰和易于理解。你可以明确地知道你的数据结构，而不是在一个大的、结构不清的 Map 中查找数据。

3. **易于操作**：使用 Dart 类来处理 JSON 数据，你可以使用 Dart 的各种特性，例如方法、计算属性等。此外，许多 Dart 库和框架，例如 Flutter，需要使用 Dart 类来工作。

4. **自动补全和文档**：在 Dart 类中，你可以使用文档注释来说明每个字段的用途。而在 IDE 中，当你输入一个对象和一个点 (.) 时，IDE 就会显示出所有可用的字段和方法，这可以提高开发效率。