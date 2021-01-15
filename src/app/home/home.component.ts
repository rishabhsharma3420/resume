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
  @ViewChild('secondLine') secondLineElement: ElementRef

  constructor(private homeService: HomeService) { }
  ngAfterViewInit(): void {
    const target = this.typewriterElement.nativeElement;
    const writer = new Typewriter(target, { typeColor: "rgba(23, 37, 42,0.8)" ,cursorColor: 'rgba(50, 45, 51,0.8)'});
    const secondline = this.secondLineElement.nativeElement;
    const writer2 = new Typewriter(secondline, { loop: true, typeColor: 'rgba(23, 37, 42,0.6)' ,cursorColor: 'rgba(50, 45, 51,0.6)'});

    writer
      .type("Hi!")
      .rest(2000)
      .clear()
      .type("I am a Full Stack Developer.")
      .removeCursor()
      .rest(4000)
      .then(writer.start.bind(writer2))
      .start()
      

    writer2
      .type("We could work together?")
      .rest(4000)
      .clear()
      .type("Still here, waiting?")
      .rest(4000)
      .clear()
      .type("Click on the top buttons to explore more!")
      .rest(4000)
      .clear()
      .then(writer.start.bind(writer2))

  }

}
