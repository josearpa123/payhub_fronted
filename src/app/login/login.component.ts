import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.initForm();
  }

  // Inicializar el formulario con validaciones
  initForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // Getter para acceder fácilmente a los campos del formulario
  get f() { 
    return this.loginForm.controls; 
  }

  onSubmit(): void {
    this.submitted = true;
    this.errorMessage = '';

    // Detener si el formulario es inválido
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    // Simulación de inicio de sesión (reemplazar con su servicio real)
    setTimeout(() => {
      try {
        // Aquí iría la lógica para iniciar sesión
        console.log('Datos del formulario:', this.loginForm.value);
        
        // Redirigir al usuario a la página principal o dashboard
        // this.router.navigate(['/dashboard']);
      } catch (error) {
        this.errorMessage = 'Ha ocurrido un error al iniciar sesión. Por favor, inténtelo de nuevo.';
      } finally {
        this.loading = false;
      }
    }, 1500);
  }
}