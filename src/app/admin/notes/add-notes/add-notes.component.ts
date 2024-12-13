import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrl: './add-notes.component.scss'
})
export class AddNotesComponent {
  form: FormGroup; // Form group for reactive form

  courses = [
    { name: 'B.Tech', code: 'BTECH' },
    { name: 'MBA', code: 'MBA' },
    { name: 'B.Sc', code: 'BSC' },
    { name: 'M.Sc', code: 'MSC' },
    { name: 'Ph.D', code: 'PHD' },
  ]; // Dropdown options for courses

  years = [
    { name: '1st Year', code: 'YEAR1' },
    { name: '2nd Year', code: 'YEAR2' },
    { name: '3rd Year', code: 'YEAR3' },
    { name: '4th Year', code: 'YEAR4' },
  ]; // Dropdown options for years

  constructor(private fb: FormBuilder) {
    // Initialize the reactive form
    this.form = this.fb.group({
      subjectName: ['', Validators.required],
      courseName: ['', Validators.required],
      year: ['', Validators.required],
      driveLink: ['', Validators.required],
      keywords: [[]], // Chips input for keywords
    });
  }
   camelCaseToNormalCase(str: string): string {
    // Step 1: Add space before uppercase letters, and then convert to lowercase
    const result = str.replace(/([a-z0-9])([A-Z])/g, '$1 $2').toLowerCase();
    
    // Step 2: Capitalize the first letter of the first word (optional)
    return result.charAt(0).toUpperCase() + result.slice(1);
  }
  getErrorMessage(controlName: string): string | null {
    const control = this.form.get(controlName);
    if (control && control.errors && control.touched) {
      if (control.errors['required']) {
        return `${ this.camelCaseToNormalCase(controlName) } is required.`;
      }
      // Additional error checks (e.g., pattern, minlength, etc.) can go here
    }
    return null;
  }
  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted', this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }
}