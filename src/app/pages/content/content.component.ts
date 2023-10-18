import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  constructor(  private route:ActivatedRoute){
  }

  ngOnInit():void{
    this.route.paramMap.subscribe(
      value => console.log(value.get("id"))
      
    )
  }

  photoCover:string="https://t.ctcdn.com.br/WXtJMXu0mL_Dj_71jGJ0egARjbo=/768x432/smart/i776622.jpeg";
  contentTitle:string="MINHA NOTICIA";
  contentDescription:string="HELLO WORD!";


}
