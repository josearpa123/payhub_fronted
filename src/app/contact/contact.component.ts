import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class ContactoComponent implements OnInit {
  contactForm: FormGroup;
  loading = false;
  submitted = false;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.initForm();
  }

  // Inicializar el formulario con validaciones
  initForm(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  // Getter para acceder fácilmente a los campos del formulario
  get f() { 
    return this.contactForm.controls; 
  }

  onSubmit(): void {
    this.submitted = true;
    this.successMessage = '';
    this.errorMessage = '';

    // Detener si el formulario es inválido
    if (this.contactForm.invalid) {
      return;
    }

    this.loading = true;

    // Simulación de envío (reemplazar con su servicio real)
    setTimeout(() => {
      try {
        // Aquí iría la lógica para enviar el formulario a un backend
        console.log('Datos del formulario:', this.contactForm.value);
        
        this.successMessage = 'Su mensaje ha sido enviado exitosamente. Nos pondremos en contacto pronto.';
        this.resetForm();
      } catch (error) {
        this.errorMessage = 'Ha ocurrido un error al enviar el mensaje. Por favor, inténtelo de nuevo.';
      } finally {
        this.loading = false;
      }
    }, 1500);
  }

  resetForm(): void {
    this.submitted = false;
    this.contactForm.reset();
  }
}