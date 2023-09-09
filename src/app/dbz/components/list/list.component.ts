import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  /*decorador Input define propiedad que puede ser enviada del padre al hijo*/
  @Input()
  public characterList: Character[] = [
    {
      name: 'trunks',
      power: 10,
    },
  ];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    //TODO:Emitir el id del personaje
    if (!id) return;
    console.log({id})
    this.onDelete.emit(id);
  }
}
