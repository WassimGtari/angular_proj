import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  handleError(error: any): void {
    alert('An unexpected error occurred.');
    console.log(error);
  }
  /* eslint-enable @typescript-eslint/no-explicit-any */
}
