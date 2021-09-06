# Graph and tree traversal

## BFS
- Like a ripple in water, walk the closest nodes first, then move to the next "layer"
- Implementation using a queue

## DFS
- Like a maze, move though one complete path before backing up and moving to the next
- Implementation using iteration or recursion

## Comparison
- BFS always finds the shortest path 
- DFS generally consumes less memory


```python
class TreeNode(object):
	def __init__(self, value):
		self.value = value
		self.left = None
		self.right = None

	def insert_left(self, value):
		new_node = TreeNode(value)
		self.left = new_node

	def insert_right(self, value):
		new_node = TreeNode(value)
		self.right = new_node

root = TreeNode("A")
root.insert_left("B")
root.left.insert_left("D")
root.left.insert_right("E")
root.insert_right("C")
root.right.insert_left("F")
root.right.insert_right("G")

def BFS(root):
	nodes_to_check = [root]

	while(nodes_to_check):
		current = nodes_to_check.pop(0)

		# If this were a real search, do the checking here.
		# Now we just print things for the sake of demoing.
		print(current.value)

		if current.left:
			nodes_to_check.append(current.left)
		if current.right:
			nodes_to_check.append(current.right)
			

def DFS(root):
	def walk_down(node):
		# If this were a real search, do the checking here.
		# Now we just print things for the sake of demoing.
		print(node.value)
		if node.left:
			walk_down(node.left)
		if node.right:
			walk_down(node.right)

	walk_down(root)

print("Breadth first")
BFS(root)

print("Depth first")
DFS(root)
```