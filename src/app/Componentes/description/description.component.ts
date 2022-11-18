import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent {


  constructor( private activatedRoute:ActivatedRoute) {

    this.activatedRoute.params.subscribe( params =>{
      console.log( params['1'] );
    })
   }


}
