import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {
  public profileForm: FormGroup;

// profileForm = new FormGroup({
//   firstName: new FormControl(''),
//   lastName: new FormControl(''),
// });

  public get controls() {
    return this.profileForm.controls;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zipcode: ['', [Validators.required]],
    })
  }

  onSubmit() {
    if (!this.profileForm.valid) {
      this.profileForm.markAllAsTouched();
      console.log('forma ne validna')
    } else {
      console.log('forma validna');
      this.sendData(this.profileForm.getRawValue());
    }
    console.log(this.profileForm.value);
  }

  sendData(formData) {
    console.log('sendData', formData);
  }


}
