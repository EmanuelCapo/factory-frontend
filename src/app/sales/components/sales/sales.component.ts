import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { greaterThan } from '../../validators/greater-than-validator';
import { SalesService } from '../../services/sales.service';
import { SaleRequest, SaleResponse } from '../../interfaces/sale-model';
import { SpinnerComponent } from "../spinner/spinner.component";
import { finalize } from 'rxjs';
import { DecimalPipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs, 'es-ES');

@Component({
  selector: 'app-sales',
  imports: [ReactiveFormsModule, SpinnerComponent, DecimalPipe],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss'
})
export class SalesComponent {
  form!: FormGroup;
  response?: SaleResponse;
  isLoading = false
  
  constructor(
    private fb: FormBuilder,
    private saleService: SalesService
  ) {}
  
  ngOnInit(): void {
    this.form = this.fb.group({
      country:['', Validators.required],
      amount:[null, [Validators.required, greaterThan(0)]]
    })
  }  
  
  calculatePrice() {
    this.isLoading = true
    const request: SaleRequest = {
      country: this.form.get('country')!.value,
      amount: this.form.get('amount')!.value,
    }
    this.saleService.calculatePrice(request)
    .pipe(finalize(() => this.isLoading = false))
    .subscribe({
      next: resp => this.response = resp,
      error: e => {
        alert(e.error)
        this.response = undefined
      }      
    })
  }
}
