import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { InstructionComponent } from "../../components/instruction/instruction.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, InstructionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
