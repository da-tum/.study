
class node :
    def __init__(self,data):
        self.data=data
        self.next=None
        
class linkedlistt(node):
    def __init__(self):
        self.head=None
    def insert(self,data):
        newnode=node(data)
        if self.head is None:
            self.head=newnode
        else:
            temp=self.head
            while temp.next is not None:
                temp=temp.next
            temp.next=newnode
    def display(self):
        temp=self.head
        while temp is not None:
            print(temp.data, end=" ")
            temp= temp.next
    def delete(self,key):
        temp=self.head
        if temp is not None:
            if temp.data==key:
                self.head=temp.next
                temp=None
                return 
            while temp is not None:
                if temp.data==key:
                    break
                prev=temp
                temp=temp.next
                if temp==None:
                    return
                prev.next=temp.next
                temp=None
                
                
    def insert_at_index(self,data,index):
        newnode=node(data)
        current=self.head
        for i in range(index-1):
            current=current.next
        newnode.next=current.next
        current.next=newnode
        
        
        
l=linkedlistt()
l.insert(1)
l.insert(2)
l.insert(3)
l.insert(4)
l.insert(5)
l.display()
print()
l.delete(3)
l.insert_at_index(6,1)
l.display()
                