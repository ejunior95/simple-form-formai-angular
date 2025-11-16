import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AiFormService, FormAIOptions } from '@ejunior95/formai-angular';

@Component({
  selector: 'app-ai-input',
  standalone: true,
  imports: [CommonModule],
  providers: [AiFormService],
  templateUrl: './ai-input.html',
})
export class AiInputComponent implements OnInit {
  
  // Recebe o prompt como uma @Input
  @Input({ required: true }) userPrompt!: string;
  @Input() options?: FormAIOptions;

  // Injetamos o serviço e o tornamos 'public'
  // para que o template HTML possa acessá-lo.
  constructor(public aiForm: AiFormService) {}

  // Inicializamos o serviço assim que o componente é criado
  ngOnInit(): void {
    this.aiForm.initialize(this.userPrompt, this.options);
  }

  // --- Manipuladores de Eventos ---
  // Apenas conectamos os eventos do template aos métodos do serviço.

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.aiForm.setValue(target.value);
  }

  onBlur(): void {
    this.aiForm.validate();
  }
}