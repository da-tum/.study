
class node ():
    def __init__(self,data):
        self.data=data
        self.next=None
        
class linkedlistt(node):
    def __init__(self):
        self.head=None
    def insert (self,data):
        newnode=node(data)
        if self.head==None:
            self.head=newnode
        else:
            temp=self.head
            while temp is not None:
                temp=temp.next
            temp.next=newnode
    
    
l=linkedlistt()
l.insert(1)  
            