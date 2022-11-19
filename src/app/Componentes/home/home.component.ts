import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router, private rutaActiva: ActivatedRoute, private apiService: ApiService) { }
  resultados: any = []
  ngOnInit() {
   
    this.consultarpersonajes()
  }
  description() {
    // this.router.navigate(["/description", id]);
    alert("id")
  }
  consultarpersonajes() {
    this.apiService.personajes().subscribe((rest) => {
      this.resultados = rest
      console.log('rest: ', this.resultados.results)
    })
  }

  // function description(){
  //   alert("Mas información");
  // }
}
