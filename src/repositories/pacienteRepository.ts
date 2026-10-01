import type {PacienteDTO} from "../types/paciente.js";
import type { Paciente } from "@prisma/client"
import { prisma } from "../config/prisma.js"

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export type PacienteDTO = {
  nome: string;
  email: string;
  telefone: string;
};

export async function findAll() {
  return await prisma.paciente.findMany();
}

export async function findById(id: number) {
  return await prisma.paciente.findUnique({ where: { id } });
}

export async function create(data: PacienteDTO) {
  return await prisma.paciente.create({ data });
}

export async function update(id: number, data: PacienteDTO) {
  return await prisma.paciente.update({ where: { id }, data });
}

export async function remove(id: number) {
  return await prisma.paciente.delete({ where: { id } });
}
