import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function customValidator(): ValidatorFn {
    return (control : AbstractControl) : ValidationErrors | null => {
        if(control.value === "ansar"){
            return {"notAllowed": "ansar"}
        }

        return null;
    
    }
}