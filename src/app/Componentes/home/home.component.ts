import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  resultados: any = []

  ngOnInit() {
    this.consultarpersonajes()
  }
  consultarpersonajes() {
    this.apiService.personajes().subscribe((rest) => {
      this.resultados = rest
      console.log('rest: ', this.resultados.results)
    })
  }

}
