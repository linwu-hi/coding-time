# Flutter实战之TODO应用

在本篇文章中，我们将构建一个TODO应用，使用最新的Dart语法和Flutter框架。这个TODO应用将具备添加、编辑、删除任务，以及任务的状态管理等功能。让我们一步一步地构建这个TODO应用。

## 步骤 1：创建Flutter项目

首先，我们需要创建一个Flutter项目。打开终端并执行以下命令：

```shell
flutter create todo_app
cd todo_app
```

这将创建一个名为`todo_app`的Flutter项目，并进入项目目录。

## 步骤 2：创建模型类

我们将创建一个模型类`Todo`来表示任务，包含任务的标题、描述和完成状态。在`lib/models/todo.dart`中创建一个新的Dart文件，并添加以下代码：

```dart
class Todo {
  String title;
  String description;
  bool isCompleted;

  Todo({
    required this.title,
    required this.description,
    this.isCompleted = false,
  });
}
```

## 步骤 3：创建任务列表页面

我们将创建一个任务列表页面，显示所有的任务，并提供添加、编辑、删除任务的功能。在`lib/screens/todo_list_screen.dart`中创建一个新的Dart文件，并添加以下代码：

```dart
import 'package:flutter/material.dart';
import 'package:todo_app/models/todo.dart';
import 'package:todo_app/screens/todo_edit_screen.dart';

class TodoListScreen extends StatefulWidget {
  @override
  _TodoListScreenState createState() => _TodoListScreenState();
}

class _TodoListScreenState extends State<TodoListScreen> {
  List<Todo> _todos = [];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('TODO List'),
      ),
      body: ListView.builder(
        itemCount: _todos.length,
        itemBuilder: (context, index) {
          final todo = _todos[index];
          return ListTile(
            title: Text(todo.title),
            subtitle: Text(todo.description),
            trailing: Checkbox(
              value: todo.isCompleted,
              onChanged: (value) {
                setState(() {
                  todo.isCompleted = value!;
                });
              },
            ),
            onTap: () {
              _navigateToEditScreen(todo);
            },
          );
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          _navigateToEditScreen(null);
        },
        child: Icon(Icons.add),
      ),
    );
  }

  void _navigateToEditScreen(Todo? todo) async {
    final editedTodo = await Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => TodoEditScreen(todo: todo),
      ),
    );

    if (editedTodo != null) {
      setState(() {
        if (todo == null) {
          _todos.add(editedTodo);
        } else {
          final index = _todos.indexOf(todo);
          _todos[index] = editedTodo;
        }
      });
    }
  }
}
```

在这段代码中，我们创建了一个`TodoListScreen`类作为任务列表页面，它是一个有状态的小部件。在`build`方法中，我们使用`Scaffold`和`ListView.builder`来显示所有的任务，并为每个任务提供了标题、描述和完成状态的展示。

我们还实现了`_navigateToEditScreen`方法，用于导航到任务编辑页面。当用户点击某个任务时，会跳转到任务编辑页面并将对应的任务传递过去。

## 步骤 4：创建任务编辑页面

我们将创建一个任务编辑页面，用于添加新任务或编辑现有任务的标题、描述和完成状态。在`lib/screens/todo_edit_screen.dart`中创建一个新的Dart文件，并添加以下代码：

```dart
import 'package:flutter/material.dart';
import 'package:todo_app/models/todo.dart';

class TodoEditScreen extends StatefulWidget {
  final Todo? todo;

  TodoEditScreen({this.todo});

  @override
  _TodoEditScreenState createState() => _TodoEditScreenState();
}

class _TodoEditScreenState extends State<TodoEditScreen> {
  late TextEditingController _titleController;
  late TextEditingController _descriptionController;
  bool _isCompleted = false;

  @override
  void initState() {
    super.initState();
    _titleController = TextEditingController(text: widget.todo?.title ?? '');
    _descriptionController =
        TextEditingController(text: widget.todo?.description ?? '');
    _isCompleted = widget.todo?.isCompleted ?? false;
  }

  @override
  void dispose() {
    _titleController.dispose();
    _descriptionController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.todo == null ? 'Add Todo' : 'Edit Todo'),
      ),
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              controller: _titleController,
              decoration: InputDecoration(
                labelText: 'Title',
              ),
            ),
            SizedBox(height: 16.0),
            TextField(
              controller: _descriptionController,
              decoration: InputDecoration(
                labelText: 'Description',
              ),
            ),
            SizedBox(height: 16.0),
            CheckboxListTile(
              title: Text('Completed'),
              value: _isCompleted,
              onChanged: (value) {
                setState(() {
                  _isCompleted = value!;
                });
              },
            ),
            SizedBox(height: 16.0),
            RaisedButton(
              onPressed: () {
                _saveTodo();
              },
              child: Text('Save'),
            ),
          ],
        ),
      ),
    );
  }

  void _saveTodo() {
    final newTodo = Todo(
      title: _titleController.text,
      description: _descriptionController.text,
      isCompleted: _isCompleted,
    );

    Navigator.pop(context, newTodo);
  }
}
```

在这段代码中，我们创建了一个`TodoEditScreen`类作为任务编辑页面，它也是一个有状态的小部件。在`initState`方法中，我们初始化了文本编辑器的控制器，并根据传入的任务初始化了相应的值。

在`build`方法中，我们使用`Scaffold`和`Column`来显示标题、描述和完成状态的输入字段。用户可以在这个页面上输入任务的详细信息，并使用保存按钮将其保存。

## 步骤 5：运行应用

现在，我们已经完成了强大的TODO应用的代码编写。在终端中，运行以下命令来启动应用程序：

```shell
flutter run
```

Flutter将在模拟器或设备上运行应用程序，并显示任务列表界面。您可以点击浮动按钮添加新的任务，点击任务列表项编辑任务的标题、描述和完成状态。

## 参考资料

- [Dart官方文档](https://dart.dev/guides)
- [Flutter官方文档](https://flutter.dev/docs)
- [Flutter实战教程](https://flutter.dev/docs/cookbook)