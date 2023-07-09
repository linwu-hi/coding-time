# Widget和布局

> Flutter的布局与HTML/CSS布局方式上的写法有很大的不同，Flutter使用基于组件树的布局模型，其中每个组件都有自己的布局和渲染逻辑。相比之下，HTML/CSS使用基于盒模型的布局，其中元素通过框模型和定位属性进行布局。

## Widget：Flutter用户界面的构建块

在Flutter中，一切皆是Widget。Widgets是Flutter用户界面的基本构建块，用于描述应用程序在给定其当前配置和状态的情况下应该如何显示。通过组合不同的Widget，我们可以构建出复杂、美观的用户界面。


Flutter中的Widget分为两类：

### **StatelessWidget**

StatelessWidget是不可变的，一旦创建就不能更改。它们通常用于表示那些没有状态改变的静态UI元素。例如，`Icon`、`Text`、`Container`等都是无状态的Widget。

```dart
class MyStatelessWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Text('Hello World'),
    );
  }
}
```

### **StatefulWidget**

StatefulWidget是有状态的，可以根据应用程序的状态和用户交互来改变。当状态发生变化时，StatefulWidget会自动重绘UI。常见的有状态Widget包括按钮、输入框、列表等。

```dart
class MyStatefulWidget extends StatefulWidget {
  @override
  _MyStatefulWidgetState createState() => _MyStatefulWidgetState();
}

class _MyStatefulWidgetState extends State<MyStatefulWidget> {
  bool _isPressed = false;

  @override
  Widget build(BuildContext context) {
    return RaisedButton(
      onPressed: () {
        setState(() {
          _isPressed = !_isPressed;
        });
      },
      child: Text(_isPressed ? 'Pressed' : 'Not Pressed'),
    );
  }
}
```

更多关于Widget的信息，你可以参考[Flutter Widget介绍](https://flutter.dev/docs/development/ui/widgets)。

## 布局组件：构建灵活的用户界面

在Flutter中，有多种布局组件可供选择，用于在屏幕上排列和定位Widget。以下是几个常用的布局组件：

###  **Container**

Container是一个多功能的容器，可以用于装饰、定位和约束其子Widget。你可以设置它的大小、颜色、边距等。

```dart
Container(
  color: Colors.blue,
  width: 200,
  height: 200,
  child: Text('Hello'),
)
```

### **Row和Column**

Row和Column是用于水平和垂直排列子Widget的强大布局组件。你可以在它们内部添加各种子Widget，并使用`mainAxisAlignment`和`crossAxisAlignment`来调整对齐方式。

```dart
Row(
  mainAxisAlignment: MainAxisAlignment.center,
  crossAxisAlignment: CrossAxisAlignment.center,
  children: <Widget>[
    Icon(Icons.star),
    Icon(Icons.star),
    Icon(Icons.star),
  ],
)
```

###  **Stack**

Stack允许将多个子Widget堆叠在一起，可以通过定位、对齐和尺寸调整来控制它们的位置。

```dart
Stack(
  alignment: Alignment.center,
  children: <Widget>[
    Container(color: Colors.red, width: 200, height: 200),
    Container(color: Colors.green, width: 150, height: 150),
    Container(color: Colors.blue, width: 100, height: 100),
  ],
)
```

###  **ListView**

ListView是一个滚动视图，可用于显示可滚动的列表。你可以使用`ListView.builder`或`ListView.separated`来构建列表。

```dart
ListView.builder(
  itemCount: 100,
  itemBuilder: (context, index) {
    return ListTile(
      title: Text('Item $index'),
    );
  },
)
```

###  **Expanded**

Expanded是一个灵活的布局组件，用于占据剩余可用空间。它通常与Row和Column一起使用。

```dart
Row(
  children: <Widget>[
    Expanded(
      child: Container(color: Colors.red),
    ),
    Expanded(
      child: Container(color: Colors.green),
    ),
  ],
)
```

这只是布局组件中的几个例子，Flutter提供了丰富的布局组件，适应各种不同的UI需求。你可以根据需要选择合适的布局组件。

要了解更多关于布局的内容，你可以参考[Flutter布局指南](https://flutter.dev/docs/development/ui/layout)。

## 结论

通过理解Widget和常用布局组件，你已经迈出了构建Flutter应用程序的第一步。Widget作为Flutter用户界面的构建块，帮助我们构建出灵活、交互丰富的应用程序。布局组件则允许我们在屏幕上排列和定位Widget，创建出美观、一致的用户界面。