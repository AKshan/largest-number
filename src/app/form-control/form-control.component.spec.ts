import {ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';

import { FormControlComponent } from './form-control.component';
import {FormsModule} from "@angular/forms";

describe('FormControlComponent', () => {
  let component: FormControlComponent;
  let fixture: ComponentFixture<FormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormControlComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('[Email - Invalid] - Input field should not be empty/invalid', fakeAsync( () => {
    fixture.whenStable().then( ()=> {
      let number1 = component.mathForm.form.controls['number1'];
      expect(number1.valid).toBeFalsy();
      expect(component.mathForm.valid).toBeFalsy();
      number1.setValue(10);
      expect(number1.errors['number1']).toBeTruthy();

      let number2 = component.mathForm.form.controls['number1'];
      expect(number1.valid).toBeFalsy();
      expect(component.mathForm.valid).toBeFalsy();
      number1.setValue(10);
      expect(number1.errors['number1']).toBeTruthy();

      let number3 = component.mathForm.form.controls['number1'];
      expect(number1.valid).toBeFalsy();
      expect(component.mathForm.valid).toBeFalsy();
      number1.setValue(10);
      expect(number1.errors['number1']).toBeTruthy();

      component.calculate(number1, number2, number3);
      fixture.detectChanges()
    })

  }));
});
