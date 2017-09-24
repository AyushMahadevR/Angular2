import { Component } from "@angular/core";

@Component({
    selector:'app',
    templateUrl:'./partials/app.html'
})

export class AppComponent{
    name: string;
    artists: any;

    addArtist(value){
        if(value !==''){
            this.artists.push ({
                name:value,
                school:'Some Public School'
            });
        }
    }
    
    onClick(e){
       this.name = e.target.innerHTML;
    }

    constructor(){
        
        this.artists = [
        {
            name:'Ayush Mahadev',
            school: 'Sree Narayana Public School',
        },{
            name:'Asif',
            school:'Thalasseri briyani'
        },{
            name:'Vibin',
            school:'Angamali Diaries'
        }
          
        ]
    }
}