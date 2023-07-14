# 图

在计算机科学中, **图(graph)** 是一种抽象数据类型,
旨在实现数学中的无向图和有向图概念，特别是图论领域。

一个图数据结构是一个(由有限个或者可变数量的)顶点/节点/点和边构成的有限集。

如果顶点对之间是无序的,称为无序图,否则称为有序图;

如果顶点对之间的边是没有方向的,称为无向图,否则称为有向图;

如果顶点对之间的边是有权重的,该图可称为加权图。

![Graph](./images/graph.jpeg)

*Made with [okso.app](https://okso.app)*

## 完整代码

### Graph

```js

export default class Graph {
  /**
   * @param {boolean} isDirected
   */
  // 构造函数，参数表示图是否是有向的
  constructor(isDirected = false) {
    this.vertices = {}; // 顶点集
    this.edges = {}; // 边集
    this.isDirected = isDirected; // 是否为有向图
  }

  /**
   * @param {GraphVertex} newVertex
   * @returns {Graph}
   */
  // 添加顶点
  addVertex(newVertex) {
    this.vertices[newVertex.getKey()] = newVertex;

    return this;
  }

  /**
   * @param {string} vertexKey
   * @returns GraphVertex
   */
  // 根据键值获取顶点
  getVertexByKey(vertexKey) {
    return this.vertices[vertexKey];
  }

  /**
   * @param {GraphVertex} vertex
   * @returns {GraphVertex[]}
   */
  // 获取顶点的邻居
  getNeighbors(vertex) {
    return vertex.getNeighbors();
  }

  /**
   * @return {GraphVertex[]}
   */
  // 获取所有的顶点
  getAllVertices() {
    return Object.values(this.vertices);
  }

  /**
   * @return {GraphEdge[]}
   */
  // 获取所有的边
  getAllEdges() {
    return Object.values(this.edges);
  }

  /**
   * @param {GraphEdge} edge
   * @returns {Graph}
   */
  // 添加边
  addEdge(edge) {
    // 尝试查找起始和结束顶点
    let startVertex = this.getVertexByKey(edge.startVertex.getKey());
    let endVertex = this.getVertexByKey(edge.endVertex.getKey());

    // 如果起始顶点未插入，插入起始顶点
    if (!startVertex) {
      this.addVertex(edge.startVertex);
      startVertex = this.getVertexByKey(edge.startVertex.getKey());
    }

    // 如果结束顶点未插入，插入结束顶点
    if (!endVertex) {
      this.addVertex(edge.endVertex);
      endVertex = this.getVertexByKey(edge.endVertex.getKey());
    }

    // 检查边是否已经添加过
    if (this.edges[edge.getKey()]) {
      throw new Error('边已经被添加过了');
    } else {
      this.edges[edge.getKey()] = edge;
    }

    // 将边添加到顶点中
    if (this.isDirected) {
      // 如果图是有向的，那么只添加到起始顶点
      startVertex.addEdge(edge);
    } else {
      // 如果图是无向的，那么添加到两个顶点
      startVertex.addEdge(edge);
      endVertex.addEdge(edge);
    }

    return this;
  }

  /**
   * @param {GraphEdge} edge
   */
  // 删除边
  deleteEdge(edge) {
    // 从边集中删除边
    if (this.edges[edge.getKey()]) {
      delete this.edges[edge.getKey()];
    } else {
      throw new Error('在图中找不到边');
    }

    // 尝试查找起始和结束顶点，并从这些顶点中删除边
    const startVertex = this.getVertexByKey(edge.startVertex.getKey());
    const endVertex = this.getVertexByKey(edge.endVertex.getKey());

    startVertex.deleteEdge(edge);
    endVertex.deleteEdge(edge);
  }

  /**
   * @param {GraphVertex} startVertex
   * @param {GraphVertex} endVertex
   * @return {(GraphEdge|null)}
   */
  // 查找边
  findEdge(startVertex, endVertex) {
    const vertex = this.getVertexByKey(startVertex.getKey());

    if (!vertex) {
      return null;
    }

    return vertex.findEdge(endVertex);
  }

  /**
   * @return {number}
   */
  // 获取图的权重（所有边的权重之和）
  getWeight() {
    return this.getAllEdges().reduce((weight, graphEdge) => {
      return weight + graphEdge.weight;
    }, 0);
  }

  /**
   * 在有向图中反转所有的边
   * @return {Graph}
   */
  reverse() {
    /** @param {GraphEdge} edge */
    this.getAllEdges().forEach((edge) => {
      // 从图和顶点中删除直边
      this.deleteEdge(edge);

      // 反转边
      edge.reverse();

      // 将反转的边重新添加到图和顶点中
      this.addEdge(edge);
    });

    return this;
  }

  /**
   * @return {object}
   */
  // 获取顶点索引
  getVerticesIndices() {
    const verticesIndices = {};
    this.getAllVertices().forEach((vertex, index) => {
      verticesIndices[vertex.getKey()] = index;
    });

    return verticesIndices;
  }

  /**
   * @return {*[][]}
   */
  // 获取邻接矩阵
  getAdjacencyMatrix() {
    const vertices = this.getAllVertices();
    const verticesIndices = this.getVerticesIndices();

    // 使用Infinity初始化矩阵，表示尚未找到从一个顶点到另一个顶点的路径
    const adjacencyMatrix = Array(vertices.length).fill(null).map(() => {
      return Array(vertices.length).fill(Infinity);
    });

    // 填充列
    vertices.forEach((vertex, vertexIndex) => {
      vertex.getNeighbors().forEach((neighbor) => {
        const neighborIndex = verticesIndices[neighbor.getKey()];
        adjacencyMatrix[vertexIndex][neighborIndex] = this.findEdge(vertex, neighbor).weight;
      });
    });

    return adjacencyMatrix;
  }

  /**
   * @return {string}
   */
  // 将图转换为字符串
  toString() {
    return Object.keys(this.vertices).toString();
  }
}
```

### GraphEdge


```js
export default class GraphEdge {
  /**
   * @param {GraphVertex} startVertex
   * @param {GraphVertex} endVertex
   * @param {number} [weight=1]
   */
  constructor(startVertex, endVertex, weight = 0) {
    this.startVertex = startVertex;
    this.endVertex = endVertex;
    this.weight = weight;
  }

  /**
   * @return {string}
   */
  getKey() {
    const startVertexKey = this.startVertex.getKey();
    const endVertexKey = this.endVertex.getKey();

    return `${startVertexKey}_${endVertexKey}`;
  }

  /**
   * @return {GraphEdge}
   */
  reverse() {
    const tmp = this.startVertex;
    this.startVertex = this.endVertex;
    this.endVertex = tmp;

    return this;
  }

  /**
   * @return {string}
   */
  toString() {
    return this.getKey();
  }
}
```

### LinkedListNode

```js

export default class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

```

### Comparator

```js
export default class Comparator {
  /**
   * 构造函数.
   * @param {function(a: *, b: *)} [compareFunction] - 可以是自定义的比较函数，该函数可以比较自定义的对象.
   */
  constructor(compareFunction) {
    this.compare = compareFunction || Comparator.defaultCompareFunction;
  }

  /**
   * 默认比较函数。假设 "a" 和 "b" 是字符串或数字。
   * @param {(string|number)} a
   * @param {(string|number)} b
   * @returns {number}
   */
  static defaultCompareFunction(a, b) {
    if (a === b) {
      return 0;
    }

    return a < b ? -1 : 1;
  }

  /**
   * 检查两个变量是否相等。
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   */
  equal(a, b) {
    return this.compare(a, b) === 0;
  }

  /**
   * 检查变量 "a" 是否小于 "b"。
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   */
  lessThan(a, b) {
    return this.compare(a, b) < 0;
  }

  /**
   * 检查变量 "a" 是否大于 "b"。
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   */
  greaterThan(a, b) {
    return this.compare(a, b) > 0;
  }

  /**
   * 检查变量 "a" 是否小于或等于 "b"。
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   */
  lessThanOrEqual(a, b) {
    return this.lessThan(a, b) || this.equal(a, b);
  }

  /**
   * 检查变量 "a" 是否大于或等于 "b"。
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   */
  greaterThanOrEqual(a, b) {
    return this.greaterThan(a, b) || this.equal(a, b);
  }

  /**
   * 反转比较顺序。
   */
  reverse() {
    const compareOriginal = this.compare;
    this.compare = (a, b) => compareOriginal(b, a);
  }
}
```

### LinkedList

```js
export default class LinkedList {
  /**
   * @param {Function} [comparatorFunction]
   */
  constructor(comparatorFunction) {
    /** @var LinkedListNode */
    this.head = null;

    /** @var LinkedListNode */
    this.tail = null;

    this.compare = new Comparator(comparatorFunction);
  }

  /**
   * @param {*} value
   * @return {LinkedList}
   */
  prepend(value) {
    // Make new node to be a head.
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    // If there is no tail yet let's make new node a tail.
    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  /**
   * @param {*} value
   * @return {LinkedList}
   */
  append(value) {
    const newNode = new LinkedListNode(value);

    // If there is no head yet let's make new node a head.
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    // Attach new node to the end of linked list.
    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  /**
   * @param {*} value
   * @param {number} index
   * @return {LinkedList}
   */
  insert(value, rawIndex) {
    const index = rawIndex < 0 ? 0 : rawIndex;
    if (index === 0) {
      this.prepend(value);
    } else {
      let count = 1;
      let currentNode = this.head;
      const newNode = new LinkedListNode(value);
      while (currentNode) {
        if (count === index) break;
        currentNode = currentNode.next;
        count += 1;
      }
      if (currentNode) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
      } else {
        if (this.tail) {
          this.tail.next = newNode;
          this.tail = newNode;
        } else {
          this.head = newNode;
          this.tail = newNode;
        }
      }
    }
    return this;
  }

  /**
   * @param {*} value
   * @return {LinkedListNode}
   */
  delete(value) {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;

    // If the head must be deleted then make next node that is different
    // from the head to be a new head.
    while (this.head && this.compare.equal(this.head.value, value)) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      // If next node must be deleted then make next node to be a next next one.
      while (currentNode.next) {
        if (this.compare.equal(currentNode.next.value, value)) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    // Check if tail must be deleted.
    if (this.compare.equal(this.tail.value, value)) {
      this.tail = currentNode;
    }

    return deletedNode;
  }

  /**
   * @param {Object} findParams
   * @param {*} findParams.value
   * @param {function} [findParams.callback]
   * @return {LinkedListNode}
   */
  find({ value = undefined, callback = undefined }) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      // If callback is specified then try to find node by callback.
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }

      // If value is specified then try to compare by value..
      if (value !== undefined && this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  /**
   * @return {LinkedListNode}
   */
  deleteTail() {
    const deletedTail = this.tail;

    if (this.head === this.tail) {
      // There is only one node in linked list.
      this.head = null;
      this.tail = null;

      return deletedTail;
    }

    // If there are many nodes in linked list...

    // Rewind to the last node and delete "next" link for the node before the last one.
    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;

    return deletedTail;
  }

  /**
   * @return {LinkedListNode}
   */
  deleteHead() {
    if (!this.head) {
      return null;
    }

    const deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }

  /**
   * @param {*[]} values - Array of values that need to be converted to linked list.
   * @return {LinkedList}
   */
  fromArray(values) {
    values.forEach((value) => this.append(value));

    return this;
  }

  /**
   * @return {LinkedListNode[]}
   */
  toArray() {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  /**
   * @param {function} [callback]
   * @return {string}
   */
  toString(callback) {
    return this.toArray().map((node) => node.toString(callback)).toString();
  }

  /**
   * Reverse a linked list.
   * @returns {LinkedList}
   */
  reverse() {
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currNode) {
      // Store next node.
      nextNode = currNode.next;

      // Change next node of the current node so it would link to previous node.
      currNode.next = prevNode;

      // Move prevNode and currNode nodes one step forward.
      prevNode = currNode;
      currNode = nextNode;
    }

    // Reset head and tail.
    this.tail = this.head;
    this.head = prevNode;

    return this;
  }
}
```

### GraphVertex

```js
export default class GraphVertex {
  /**
   * @param {*} value
   */
  // 构造函数，参数为顶点的值
  constructor(value) {
    if (value === undefined) {
      throw new Error('图顶点必须有一个值');
    }

    /**
     * @param {GraphEdge} edgeA
     * @param {GraphEdge} edgeB
     */
    // 边的比较函数
    const edgeComparator = (edgeA, edgeB) => {
      if (edgeA.getKey() === edgeB.getKey()) {
        return 0;
      }

      return edgeA.getKey() < edgeB.getKey() ? -1 : 1;
    };

    // 通常你会储存一个字符串作为顶点的名称，但实际上可以储存任何类型的对象
    this.value = value;
    this.edges = new LinkedList(edgeComparator);
  }

  /**
   * @param {GraphEdge} edge
   * @returns {GraphVertex}
   */
  // 添加边
  addEdge(edge) {
    this.edges.append(edge);

    return this;
  }

  /**
   * @param {GraphEdge} edge
   */
  // 删除边
  deleteEdge(edge) {
    this.edges.delete(edge);
  }

  /**
   * @returns {GraphVertex[]}
   */
  // 获取邻居顶点
  getNeighbors() {
    const edges = this.edges.toArray();

    /** @param {LinkedListNode} node */
    // 邻居转换器
    const neighborsConverter = (node) => {
      return node.value.startVertex === this ? node.value.endVertex : node.value.startVertex;
    };

    // 返回起始或者结束顶点
    // 对于无向图，当前顶点可能是结束顶点
    return edges.map(neighborsConverter);
  }

  /**
   * @return {GraphEdge[]}
   */
  // 获取边
  getEdges() {
    return this.edges.toArray().map((linkedListNode) => linkedListNode.value);
  }

  /**
   * @return {number}
   */
  // 获取顶点的度（相连的边的数量）
  getDegree() {
    return this.edges.toArray().length;
  }

  /**
   * @param {GraphEdge} requiredEdge
   * @returns {boolean}
   */
  // 检查顶点是否有指定的边
  hasEdge(requiredEdge) {
    const edgeNode = this.edges.find({
      callback: (edge) => edge === requiredEdge,
    });

    return !!edgeNode;
  }

  /**
   * @param {GraphVertex} vertex
   * @returns {boolean}
   */
  // 检查顶点是否有指定的邻居
  hasNeighbor(vertex) {
    const vertexNode = this.edges.find({
      callback: (edge) => edge.startVertex === vertex || edge.endVertex === vertex,
    });

    return !!vertexNode;
  }

  /**
   * @param {GraphVertex} vertex
   * @returns {(GraphEdge|null)}
   */
  // 查找与指定顶点相连的边
  findEdge(vertex) {
    const edgeFinder = (edge) => {
      return edge.startVertex === vertex || edge.endVertex === vertex;
    };

    const edge = this.edges.find({ callback: edgeFinder });

    return edge ? edge.value : null;
  }

  /**
   * @returns {string}
   */
  // 获取顶点的键（即顶点的值）
  getKey() {
    return this.value;
  }

  /**
   * @return {GraphVertex}
   */
  // 删除所有的边
  deleteAllEdges() {
    this.getEdges().forEach((edge) => this.deleteEdge(edge));

    return this;
  }

  /**
   * @param {function} [callback]
   * @returns {string}
   */
  // 将顶点转换为字符串
  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}


```



## 参考

- [Wikipedia](https://en.wikipedia.org/wiki/Graph_(abstract_data_type))
- [Introduction to Graphs on YouTube](https://www.youtube.com/watch?v=gXgEDyodOJU&index=9&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [Graphs representation on YouTube](https://www.youtube.com/watch?v=k1wraWzqtvQ&index=10&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
