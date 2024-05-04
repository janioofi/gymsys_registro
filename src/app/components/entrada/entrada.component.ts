import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ToastrService } from 'ngx-toastr';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { Registro } from '../../models/registro';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { RegistroService } from '../../services/registro.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-entrada',
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
  templateUrl: './entrada.component.html',
  styleUrl: './entrada.component.css',
  providers: [
    {provide: ToastrService, useClass: ToastrService}, provideNgxMask()
  ]
})
export class EntradaComponent implements OnInit{
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
      this.title.setTitle("Entrada");
  }

  registrarEntrada(): void {
    this.service.registroEntrada(this.registro).subscribe(
      () => {
        this.toastr.success("Entrada Liberada", "Entrada");
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
