import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Field } from '../../+state/ngrx-forms.reducer';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextareaComponent {
  @Input() field: Field;
  @Input() group: FormGroup;
}
