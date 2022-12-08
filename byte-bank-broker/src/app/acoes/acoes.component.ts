import { Subscription } from 'rxjs';
import { AcoesService } from './acoes.service';
import { Acoes, AcoesAPI } from './modelo/acoes';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})

export class AcoesComponent {
  acoesInput = new FormControl();
  acoes$ = this.acoesInput.valueChanges.pipe(tap(console.log));

  constructor(private acoesService: AcoesService) { }
}
