import { Component, OnInit } from '@angular/core';
import { Registro } from '../../models/registro';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroService } from '../../services/registro.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-saida',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgxMaskDirective,
    MatDividerModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  templateUrl: './saida.component.html',
  styleUrl: './saida.component.css',
  providers: [
    {provide: ToastrService, useClass: ToastrService}, provideNgxMask()
  ]
})
export class SaidaComponent implements OnInit {
  registro: Registro = {
    cpf: ''
  };

  cpf: FormControl = new FormControl();

  constructor(
    private service: RegistroService,
    private toastr: ToastrService,
    private title: Title
  ){}

  ngOnInit(): void {
    this.title.setTitle("Saída");
}

  registrarEntrada(): void {
    this.service.registroSaida(this.registro).subscribe(
      () => {
        this.toastr.success("Saída Registrada", "Saída");
        this.cpf.reset()
      }, (ex) => {
          this.toastr.error(ex.error);
      }
    );
  }

  validaCampo(): boolean {
    return this.cpf.valid;
  }
}
