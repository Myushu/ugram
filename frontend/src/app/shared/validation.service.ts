import { Injectable } from "@angular/core";
import {FormControl} from "@angular/forms";

@Injectable()
export class ValidationService {

  getValidatorErrorMessage(validatorName: string, value: string) {
    let config = {
      "required": value + " is require",
      "invalidCreditCard": "Is invalid credit card number",
      "invalidEmailAddress": "Invalid email address",
      "invalidPassword": "Invalid password. Password must be at least 6 characters long, and contain a number.",
      //"minlength": `Minimum length ${validatorValue.requiredLength}`
    };
    return config[validatorName];
  }

  emailValidator(control) {
    // RFC 2822 compliant regex
    if (control.value.match(/[a-z0-9!#$%&"*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&"*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    } else {
      return { "invalidEmailAddress": true };
    }
  }

  passwordValidator(control) {
    // {6,100}           - Assert password is between 6 and 100 characters
    // (?=.*[0-9])       - Assert a string has at least one number
    if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
      return null;
    } else {
      return { "invalidPassword": true };
    }
  }

  getError(dataForm) {
    if (!dataForm) {
      return;
    }
    let res = [];
    const form = dataForm;
    console.log('form', form);
    for (const field in dataForm.value) {
      const control = form.get(field);
      console.log('cc', control);
      console.log('error', control.errors);
      if (control && control.dirty && !control.valid) {
        for (const key in control.errors) {
          return this.getValidatorErrorMessage(key, field);
        }
      }
    }
  }
}
