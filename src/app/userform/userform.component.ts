import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpClient } from '@angular/common/http';
import { MycurrencyPipe } from '../pipes/mycurrency.pipe';
import { MillisecondPipe } from '../millisecond.pipe';

@Component({
  selector: 'userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  constructor(private http:HttpClient,private httpService:HttpService) { }
  api={
    artist:'',
    limit:null
  }
  tracks:any=[];
  trackKeys:string[]=[];
  filterCount:number=0;
  showError:boolean=false;
  trackData:any=['item1','item2','item3','item4'];
  search():void{
   
    let promise=this.httpService.search(this.api);
     promise.subscribe((response)=>{
          this.tracks=response;
          this.trackKeys=Object.keys(this.tracks.results[0]);
          this.filterCount=this.tracks.results.length;
          this.showError=false;
     },
     (error)=>{
        console.log(error);
        this.showError=true;
     });
  }
  users:any[]=[];
  user={
    fname:null,
    age:null,
    gender:'Female'
  }
  toogleSort:boolean=true;
  searchAge:number;
  
  save():void{
    this.users.push(Object.assign({},this.user));
  }
  deleteUser(index:number):void{
    const confirm:boolean=window.confirm("are you sure to delete this");
    if(confirm){
      this.users.splice(index,1);
    }
    
  }
   
  sortUsers(){
    this.users.sort((a,b)=>this.toogleSort ? b.age-a.age :a.age-b.age);
     this.toogleSort=!this.toogleSort;
  }
  
  serachByAge(event){
    console.log(event.target.value);
    if(!event.target.value){
       this.users.map((user)=>{
          user.show=false;
       });
       return;
    }
    this.users.map((user)=>{
       user.show=user.age==event.target.value?false:true;
    })
  }

  filterTrack(event){
   let val=new RegExp(event.target.value,'gi');
   this.tracks.results.map((track)=>{
       track.show=track.artistName.match(val)===null;
   })
     this.filterCount=this.tracks.results.filter((item)=>{
       return item.show===false
      }).length;
  }
  
  recevingTrack(eventData){
    console.log(eventData);
  }

  ngOnInit() {
  }

}
