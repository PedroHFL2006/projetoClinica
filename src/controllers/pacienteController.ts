import type { Request, Response } from "express";
import * as service from "../services/pacienteService.js";
import type { PacienteDTO } from "../repositories/pacienteRepository.js";
import type { Paciente } from "@prisma/client";

export async function listar(req: Request, res: Response) {
  try {
    const pacientes = await service.listarPacientes();
    return res.json(pacientes);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar pacientes" });
  }
}

export async function buscarPorId(req: Request, res: Response) {
  try {
    const id: number = Number(req.params.id);
    const paciente = await service.encontrarUmPaciente(id);
    if (!paciente) {
      return res.status(404).json({ error: "Paciente não encontrado" });
    }
    return res.json(paciente);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar paciente" });
  }
}

export async function cadastrar(req: Request, res: Response) {
  try {
    const dados: PacienteDTO = req.body;
    const paciente = await service.criarPaciente(dados);
    return res.status(201).json(paciente);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao cadastrar paciente" });
  }
}

export async function atualizar(req: Request, res: Response) {
  try {
    const id: number = Number(req.params.id);
    const dados: PacienteDTO = req.body;
    const paciente = await service.atualizarPaciente(id, dados);
    return res.json(paciente);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao atualizar paciente" });
  }
}

export async function deletar(req: Request, res: Response) {
  try {
    const id: number = Number(req.params.id);
    await service.deletarPaciente(id);
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: "Erro ao deletar paciente" });
  }
}
