import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { HomeService } from '../home/home.service';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  
  @ViewChild('typeWriter') typewriterElement: ElementRef;

  constructor(private homeService: HomeService) { }
  ngAfterViewInit(): void {
    const target = this.typewriterElement.nativeElement;
    const writer = new Typewriter(target, { loop: true })

    writer
      .type("Hi!")
      .rest(2000)
      .clear()
      .type("I am a Full Stack Developer.")
      .rest(4000)
      .clear()
      .type("We could work together?")
      .rest(4000)
      .clear()
      .type("Still here, waiting?")
      .rest(4000)
      .clear()
      .type("Click on the top buttons to explore more!")
      .rest(4000)
      .clear()
      .then(writer.start.bind(writer))
      .start()
  }

}
