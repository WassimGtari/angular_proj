export class UsernameValidators {
    static connotContainSpace(control) {
        if (control.value.indexOf(' ') >= 0) {
            return { connotContainSpace: true };
        }
        return null;
    }
    static shouldBeUnique(control) {
        return new Promise((resolve, reject) => {
            // Simuler une requête HTTP ou une opération asynchrone pour vérifier l'unicité du nom d'utilisateur
            setTimeout(() => {
                if (control.value === 'wass') {
                    resolve({ shouldBeUnique: true }); // Nom d'utilisateur non unique
                }
                else {
                    resolve(null); // Nom d'utilisateur unique
                }
            }, 1000); // Simulation d'une attente de 1 seconde pour l'opération asynchrone
        });
    }
}
//# sourceMappingURL=username.validators.js.map