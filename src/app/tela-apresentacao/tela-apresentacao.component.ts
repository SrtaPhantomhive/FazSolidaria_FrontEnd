import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';




@Component({
  selector: 'app-tela-apresentacao',
  templateUrl: './tela-apresentacao.component.html',
  styleUrls: ['./tela-apresentacao.component.css'],
})



export class TelaApresentacaoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0, 0); // quando minha pagina iniciar coloque no ponto  x e y = 0
  }


  // carrossel: OwlOptions = {
  //   loop: false,
  //   mouseDrag: true,
  //   touchDrag: true,
  //   pullDrag: true,
  //   dots: false,
  //   navSpeed: 700,
  //   navText: [
  //     '<img src="../../assets/img/left-arrow.png">',
  //     '<img src="../../assets/img/arrow-right.png">    ',
  //   ],
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     400: {
  //       items: 2,
  //     },
  //     740: {
  //       items: 3,
  //     },
  //     940: {
  //       items: 5,
  //     },
  //   },
  //   nav: true,
  // };

}





