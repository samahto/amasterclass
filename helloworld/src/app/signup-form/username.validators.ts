import { AbstractControl, ValidationErrors } from '@angular/forms';
// removing space from username textbox
export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors|null {
          if ((control.value as string).indexOf(' ') >= 0) {
          return{cannotContainSpace: true };
          }
          return null;
  }
//when we are building a validator that involve a asynchronous operation
//we need to use a different signature for validator functioni.e-
//Promise<ValidationErrors|null>

  static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors|null> {
    return new Promise((resolve, reject) => {

      setTimeout(() => {
        if (control.value === 'sandip') {
        resolve({shouldBeUnique: true});
        }
        //instead of return we are using resolve here
         else {
        resolve (null);
        }
      }, 2000);

    });

  }
}
// Note:without creating an instance of usernamevalidator class
// From outside we can access this cannotContainSpace method by decorating the
// method with name static
// UsernameValidators.cannotContainSpace-Like this you can use
