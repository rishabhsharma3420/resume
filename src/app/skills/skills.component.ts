import { Component, OnInit } from '@angular/core';
declare const move: any;
declare const fade: any;
declare const load: any;

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  visibility: boolean=false;;
  ngOnInit(): void {
    move();
    fade();
    load();
    setTimeout(() => {
      this.visibility=true;
    }, 2000);
  }
}
