'use strict';

class BinaryTree {
	constructor() {

		this.root = null;

	}

	insert(data) {
		var node = new Node(data);

		if(this.root === null){
			this.root = node;
		}
		else{
			var current = this.root;

			while(true){
				if(data >= current.data){
					if(current.right === null){
						current.right = node;
						break;
					}
					current = current.right;
				}
				else{
					if(current.left === null){
						current.left = node;
						break;
					}
					current = current.left;
				}
			}
		}
	}

	contains(data) {
		var current = this.root;

		while(current!== null){

			if(current.data === data){
				return true;
				break;
			}
			if(data > current.data){				
				current = current.right;
			}
			else{				
				current = current.left;
			}		
		}

		return false;
	}

	remove(data) {
		this.root = removeNode(this.root, data);

		function removeNode(node, data) {
			if(node === null) return null;
			if(data == node.data) {
				if(node.left === null && node.right === null)
					return null;
				if(node.left === null) 
					return node.right;
				if(node.right === null)
					return node.left;
				var current = node.right;
				while (current.left)
					current = current.left;
				node.data = current.data;
				node.right = removeNode(node.right, current.data);
				return node;
			}
			else if (data < node.data) {
				node.left = removeNode(node.left, data);
				return node;
			}
			else if (data > node.data) {
				node.right = removeNode(node.right, data);
				return node;
			}
		}
	}

	size() {
		var number = 0;
		size(this.root);
		
		function size (node) {
			if(node !== null){
				number++;
				size(node.right);
				size(node.left);
			}	
		}
		return number;
	}

	isEmpty() {
		return (this.root === null);
	}
}
