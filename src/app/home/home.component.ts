import { Component, OnInit } from '@angular/core';
import { EmitMyNameService } from '../services/emit-my-name.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateY(0)'})),
      transition('void => *', [
        style({
          transform: 'translateY(50%)',
          opacity: 0
        }),
        animate('.4s 1.3s ease-in-out')
      ])
    ]),
    trigger('fadeIn', [
      state('in', style({opacity: 1})),
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate('1.2s ease-in-out')
      ])
    ]),
    trigger('fadeInLate', [
      state('inLate', style({opacity: 1})),
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate('.8s 3.6s ease-in-out')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  compName = 'Home';

  constructor(private emitMyName: EmitMyNameService, private titleService: Title) { }

  ngOnInit() {
    this.emitMyName.emitComponentName(this.compName);
    this.titleService.setTitle('Nils-Holger Nägele | Home');
  }

}
