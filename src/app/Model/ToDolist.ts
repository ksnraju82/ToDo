
export class clsToDolst {
    ToDoItems: clsToDoItem[] = [];
    constructor(res?: any) {
            if (res) {
                for (let _count in res.ToDoItems) {
                    if (res.ToDoItems.hasOwnProperty(_count)) {
                    this.ToDoItems.push(new clsToDoItem(res.Resources[_count]));
                }
            }
        }
    }
}


export class clsToDoItem {
    TaskId: number;
    Name: string;
    Priority: number;   
    CreatedDate: string;    
    constructor(res?:any){
        if (res){
            this.TaskId = res.TaskId;
            this.Name = res.Name;
            this.Priority = res.Priority;
            this.CreatedDate = res.CreatedDate;
        }
    }
}