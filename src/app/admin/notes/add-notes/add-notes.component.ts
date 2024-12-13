import { Component } from '@angular/core';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrl: './add-notes.component.scss'
})
export class AddNotesComponent {
  selectedState: any = null;
  selectedCourse: any = null;
  courses = [
    { name: 'Bachelor of Technology (B.Tech)', code: 'BTECH' },
    { name: 'Master of Business Administration (MBA)', code: 'MBA' },
    { name: 'Bachelor of Science (B.Sc)', code: 'BSC' },
    { name: 'Master of Science (M.Sc)', code: 'MSC' },
    { name: 'Doctor of Philosophy (Ph.D)', code: 'PHD' }
  ];
  years = [
    { name: '1st Year', code: 'YEAR1' },
    { name: '2nd Year', code: 'YEAR2' },
    { name: '3rd Year', code: 'YEAR3' },
    { name: '4th Year', code: 'YEAR4' }
  ];
  states: any[] = [
      {name: 'Arizona', code: 'Arizona'},
      {name: 'California', value: 'California'},
      {name: 'Florida', code: 'Florida'},
      {name: 'Ohio', code: 'Ohio'},
      {name: 'Washington', code: 'Washington'}
  ];

  dropdownItems = [
      { name: 'Option 1', code: 'Option 1' },
      { name: 'Option 2', code: 'Option 2' },
      { name: 'Option 3', code: 'Option 3' }
  ];

  cities1: any[] = [];

  cities2: any[] = [];

  city1: any = null;

  city2: any = null;
}
