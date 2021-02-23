import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const data = require('../assets/phones.json');


interface PhoneBook {
  id: string;
  fam: string;
  im: string;
  ot: string;
  phone: string;
  email: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anular-homework-async-impure-pipe';

  phonebook: PhoneBook[] = data;
  //phonebook: any = data;

  form : FormGroup;

  constructor(private formBuilder: FormBuilder){

  }
  
  ngOnInit(){
    this.form = this.formBuilder.group({
      id: this.formBuilder.control({value:'', disabled:true}),
      fam: this.formBuilder.control('',Validators.required),
      im: this.formBuilder.control('',Validators.required),
      ot: this.formBuilder.control('',Validators.required),
      phone: this.formBuilder.control('',Validators.required),
      email: this.formBuilder.control('',Validators.email),
    })
/*     console.log('Результат загрузки:', this.phonebook);
    this.getPhoneBook(); */
    console.log('Проверка:', this.phoneBookToArray(this.phonebook));
  }
  
  phoneBookToArray(pb: PhoneBook[]){
/*     var ar = pb.forEach(el => [el]);
    return ar; */
    return pb.map(el => [el])
  }

  setValue(){
    //здесь надо прописать код по добавлению элемента в набор, но этого не было в задании, поэтому заглушка

  }
   

}
