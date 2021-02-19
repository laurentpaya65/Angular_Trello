import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../shared/services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactForm:FormGroup;

  constructor(private fb:FormBuilder,
            private contactService:ContactService) { }

  ngOnInit(): void {
    this.contactForm =  this.fb.group({
      // first:['', [Validators.minLength(2),Validators.required ],
      first:['', Validators.minLength(2) ],
      last: ['', Validators.minLength(2)],
      email: ['', Validators.email],
      phone: ['',Validators.required]

    })
  }

  onSubmit(form) {
    console.log(form);
    console.log(form.get('first').hasError('minlength'));
    console.log(form.value);
    if (form.status==='VALID') {
      this.contactService.postContactToApi(form.value);
    }
  }
}
