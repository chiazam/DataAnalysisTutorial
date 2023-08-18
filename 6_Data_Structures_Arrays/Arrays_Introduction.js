let strings = ['a', 'b', 'c', 'd'];

// 4*4 = 16 bytes

strings[2]; //c

strings.pop();//['a', 'b', 'c'], O(1)

strings.push('e'); //['a', 'b', 'c','e'], O(1)

strings.unshift('x'); //['x', 'a', 'b', 'c','e'], O(1)

strings.splice(2, 0, 'alien'); //['x', 'a','alien', 'b', 'c','e'], O(n)