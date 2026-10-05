import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule],
  templateUrl: './template-form.html',
  styleUrls: ['./template-form.css']
})
export class TemplateForm {
  onSubmit(form: any) {
    console.log(form.value);
    alert('Form Submitted! ' + JSON.stringify(form.value));
  }
}
