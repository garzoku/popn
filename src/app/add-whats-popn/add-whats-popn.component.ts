import { ExpressionBinding } from '@angular/compiler';
import { Component} from '@angular/core';

type FormData = {
  name:string,
  address: string,
  website: string,
  description:string,
  hourBeginning:string,
  hourEnding:string,
  dateBeginning:String,
  dateEnding:string
}

@Component({
  selector: 'app-add-whats-popn',
  templateUrl: './add-whats-popn.component.html',
  styleUrls: ['./add-whats-popn.component.css']
})
export class AddWhatsPopnComponent {

  addEvent({name, address, website, description, hourBeginning, hourEnding, dateBeginning, dateEnding}: FormData){
    console.log(name, address, website, description, hourBeginning, hourEnding, dateBeginning, dateEnding);
  }

}
