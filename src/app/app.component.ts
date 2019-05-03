import { Component } from '@angular/core';
import { Line } from 'src/app/models/line.entity';
import { nearer } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  line = new Line();
  lines: Line[] = [];

  constructor() {
    let line = new Line();
    line.name = 'Telescope';
    line.id = 1;
    line.price = 25000;
    line.quantity = 5;
    this.lines.push(line);
  }

  public orderPrice(): number {
    let price = 0;
    this.lines.forEach(line => price += line.totalPrice());
    return price;
  }

  public addLine(line: Line) {
    line.id = this.lines.length + 1;
    this.lines.push(line);
  }

  public removeLine(id: number) {
    this.lines = this.lines.filter(line => line.id !== id);
  }
}
