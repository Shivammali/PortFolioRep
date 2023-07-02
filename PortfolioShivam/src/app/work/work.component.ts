import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent {
  javascriptKnowledge: number = 60;
  angularKnowledge: number = 56;
  htmlCssKnowledge: number = 55;
  bootstrapKnowledge: number = 42;
  figmaKnowledge: number = 48;
  reactJsKnowledge: number = 63;
  wordpressKnowledge: number = 23;

  ngOnInit() {
    const js = setInterval(() => {
      this.javascriptKnowledge++;

      if (this.javascriptKnowledge >= 75) {
        clearInterval(js);
      }
    }, 100);
    const angular = setInterval(() => {
      this.angularKnowledge++;

      if (this.angularKnowledge >= 80) {
        clearInterval(angular);
      }
    }, 100);
    const htmlcss = setInterval(() => {
      this.htmlCssKnowledge++;

      if (this.htmlCssKnowledge >= 90) {
        clearInterval(htmlcss);
      }
    }, 100);
    const bootstrap = setInterval(() => {
      this.bootstrapKnowledge++;

      if (this.bootstrapKnowledge >= 85) {
        clearInterval(bootstrap);
      }
    }, 100);
    const figma = setInterval(() => {
      this.figmaKnowledge++;

      if (this.figmaKnowledge >= 70) {
        clearInterval(figma);
      }
    }, 100);
    const react = setInterval(() => {
      this.reactJsKnowledge++;

      if (this.reactJsKnowledge >= 70) {
        clearInterval(react);
      }
    }, 100);
    const wp = setInterval(() => {
      this.wordpressKnowledge++;

      if (this.wordpressKnowledge >= 65) {
        clearInterval(wp);
      }
    }, 100);
  }
}
