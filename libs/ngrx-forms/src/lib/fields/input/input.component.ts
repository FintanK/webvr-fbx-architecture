import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Field } from '../../+state/ngrx-forms.reducer';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent {
  @Input() field: Field;
  @Input() group: FormGroup;
}
