import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function greaterThan(min: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (value !== null && value !== undefined && value <= min) {
      return { greaterThan: { required: min, actual: value } };
    }
    return null;
  };
}