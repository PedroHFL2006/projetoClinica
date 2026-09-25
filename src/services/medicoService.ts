import { Medico } from "@prisma/client";
import * as repository from "../repositories/medicoRepository.js";
import type { MedicoDTO } from "../repositories/medicoRepository.js";

export async function listarMedicos(): Promise<Medico[]> {
  return await repository.findAll();
}

export async function encontrarUmMedico(id: number): Promise<Medico | null> {
  return await repository.findById(id);
}

export async function criarMedico(dados: MedicoDTO): Promise<Medico> {
  return await repository.create(dados);
}

export async function atualizarMedico(
  id: number,
  dados: MedicoDTO,
): Promise<Medico> {
  return await repository.update(id, dados);
}

export async function deletarMedico(id: number): Promise<void> {
  await repository.remove(id);
}
