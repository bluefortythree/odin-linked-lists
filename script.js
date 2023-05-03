// https://www.youtube.com/watch?v=3OsxH-huRc4&list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy&index=13

class LinkedList {
    constructor(head = null) {
        this.head = head;
        this.size = 0;
    }

    append(value) {
        let node = new Node(value);
        if(this.size === 0) {
            this.head = node;
        } else {
            let prev = this.head;
            while(prev.nextNode) {
                prev = prev.nextNode
            }
            prev.nextNode = node;
        }
        this.size++
    }

    prepend(value) {
        let node = new Node(value);
        if(this.size === 0) {
            this.head = node;
        } else {
            node.nextNode = this.head;
            this.head = node;
        }
        this.size++
    }

    size() {
        return this.size;
    }

    head() {
        return this.head;
    }

    tail() {
        let tail = this.head;
        while(tail.nextNode) {
            tail = tail.nextNode
        }
        return tail;
    }

    at(index) {
        if(index < 0 || index > this.size) {
            return null;
        } else {
            let at = this.head;
            for(let i = 0; i < index; i++) {
                at = at.nextNode;
            }
            return at;
        }
    }

    pop() {
        let last = this.head;
        for(let i = 0; i < this.size-1; i++) {
            last = last.nextNode;
        }
        last.nextNode = null;
        this.size--;
        return last.value;
    }

    contains(value) {
        if(this.size === 0) {
            return;
        } 
        let contains = this.head;
        while(contains) {
            if(contains.value === value) {
                return true;
            }
            contains = contains.nextNode
        }
        return false;
    }

    find(value) {
        let index = 0;
        if(this.size === 0) {
            return index;
        }
        let find = this.head;
        while(find) {
            if(find.value === value) {
                return index;
            }
            find = find.nextNode;
            index++;
        }
        return false;
    }

    toString() {
        if(this.size === 0) {
            return;
        } else {
            let node = this.head;
            let string = '';
            while(node) {
                string += "( " + node.value + ' ) => ';
                node = node.nextNode;
            }
            return(string.slice(0, -1) + ' null');
        }
    }
    
    insertAt(value, index) {
        if(index < 0 || index > this.size) {
            return;
        } else if(index === 0) {
            this.prepend(value);
        } else {
            let node = new Node(value);
            let prev = this.head;
            for(let i = 0; i < index-1; i++) {
                prev = prev.nextNode;
            }
            node.nextNode = prev.nextNode;
            prev.nextNode = node;
            this.size++;
        }
    }

    removeAt(index) {
        if(index < 0 || index > this.size) {
            return;
        }
        let remove;
        if(index === 0) {
            remove = this.head;
            this.head = this.head.nextNode;
        } else {
            let prev = this.head;
            for(let i = 0; i < index - 1; i++) {
                prev = prev.nextNode;
            }
            remove = prev.nextNode;
            prev.nextNode = remove.nextNode;
        }
        this.size--
        return remove.value;
    }
}

class Node {
    constructor(value = null) {
        this.value = value;
        this.nextNode = null;
    }
}

let test = new LinkedList();
test.append(10);
test.append(15)
test.prepend(20);
test.append(25)
test.append(30);
test.append(50);
test.append(100);
test.insertAt(25, 2);
test.removeAt(1);
test.pop();


console.log(test);
console.log(test.size)
console.log(test.head)
console.log(test.tail())

console.log(test.at(1))
console.log(test.pop())
console.log(test.contains(30))
console.log(test.find(10))
console.log(test.toString())



