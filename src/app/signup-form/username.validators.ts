import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
  static connotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { connotContainSpace: true };
    }
    return null;
  }

  static shouldBeUnique(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve) => {
      // Simuler une requête HTTP ou une opération asynchrone pour vérifier l'unicité du nom d'utilisateur
      setTimeout(() => {
        if (control.value === 'wass') {
          resolve({ shouldBeUnique: true }); // Nom d'utilisateur non unique
        } else {
          resolve(null); // Nom d'utilisateur unique
        }
      }, 1000); // Simulation d'une attente de 1 seconde pour l'opération asynchrone
    });
  }
}
