import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [IonicModule, RouterLink, RouterLinkActive, RouterOutlet, ReactiveFormsModule ]
})
export class ContactComponent  implements OnInit {
  email = 'gabriell.marquesfe@hotmail.com'
  formEmail!: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formEmail = this.formBuilder.group({
      primeiroNome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      assunto: [null, Validators.required],
      mensagem: [null, Validators.required]

    })
  }

  onSend(){
    console.log(this.formEmail)
    this.formEmail.reset()
  }

}
