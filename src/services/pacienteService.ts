import { Paciente } from "@prisma/client";
import * as repository from "../repositories/pacienteRepository.js";
import type { PacienteDTO } from "../repositories/pacienteRepository.js";

export async function listarPacientes(): Promise<Paciente[]> {
  return await repository.findAll();
}

export async function encontrarUmPaciente(
  id: number,
): Promise<Paciente | null> {
  return await repository.findById(id);
}

export async function criarPaciente(dados: PacienteDTO): Promise<Paciente> {
  return await repository.create(dados);
}

export async function atualizarPaciente(
  id: number,
  dados: PacienteDTO,
): Promise<Paciente> {
  return await repository.update(id, dados);
}

export async function deletarPaciente(id: number): Promise<void> {
  await repository.remove(id);
}
