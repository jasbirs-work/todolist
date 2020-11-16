import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-todotask',
  templateUrl: './todotask.component.html',
  styleUrls: ['./todotask.component.scss']
})
export class TodotaskComponent implements OnInit, OnChanges{
  
 // Here data transfer from child to parent is done and also the vice versa for reference purpose
  @Input() task: any;
  @Output() taskValue = new EventEmitter;
 // Here data transfer from child to parent is done and also the vice versa for reference purpose
  public listTask = [];
  public id = 0;
  constructor() { }

  ngOnInit(): void {
     console.log("value--task",this.task);
    
  }
  addTask() {
    this.taskValue.emit("value emitted")
    let todo = prompt("Enter Task");
    this.listTask.push({id:this.id++,task:todo})
    console.log(this.listTask)
  }
  deleteTask(deleteID){
   if(this.listTask){
     let index = this.listTask.findIndex(v=>v.id===deleteID);
     if(index > -1){
       this.listTask.splice(index,1);
     }
   }
 }
 updateTask(updateID){
   let updateTask = prompt("Update Task");
   if(updateTask){
    let updateIndex = this.listTask.findIndex(v=>v.id == updateID);
    this.listTask[updateIndex].task = updateTask;
   }
 }
 ngOnChanges(changes: SimpleChanges): void {
   //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
   //Add '${implements OnChanges}' to the class.
   console.log({changes})
   
 }

}
