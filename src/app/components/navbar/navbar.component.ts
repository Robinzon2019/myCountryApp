import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  countryName: string;

  constructor(private countryService: CountryService) { }

  ngOnInit() {
  }


  // getInputValue(){
  //   return this.countryName;
  // }

  guardarMenu(): void{
    var menu = document.getElementById('menu');

    if(menu.style.left != '-100%'){
      menu.style.left = '-100%';
    }

  }


  desplegarMenu(): void{
    var menu = document.getElementById('menu');

    if(menu.style.left == '-100%'){
      menu.style.left = '0';
    }

  }

}
