class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value){

        const newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length ++;

        return this;
    }

        get(index){

        if(!this.head){
            return false;
        }

        let temp = this.head;

        for(let i = 0; i < index;i++){
            temp = temp.next;
        }

        return temp.value;
    }
}


const mylist = new LinkedList();
mylist.push(100);
mylist.push(200);
mylist.push(300);
console.log(mylist);