import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  photoCover:string="https://t.ctcdn.com.br/WXtJMXu0mL_Dj_71jGJ0egARjbo=/768x432/smart/i776622.jpeg";
  contentTitle:string="MINHA NOTICIA";
  contentDescription:string="HELLO WORD!";
}
