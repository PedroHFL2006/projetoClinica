import type { Request, Response } from "express";
import * as service from "../services/medicoService.js";
import type { MedicoDTO } from "../repositories/medicoRepository.js";

export async function listar(req: Request, res: Response) {
  try {
    const medicos = await service.listarMedicos();
    return res.json(medicos);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar médicos" });
  }
}

export async function buscarPorId(req: Request, res: Response) {
  try {
    const id: number = Number(req.params.id);
    const medico = await service.encontrarUmMedico(id);
    if (!medico) {
      return res.status(404).json({ error: "Médico não encontrado" });
    }
    return res.json(medico);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar médico" });
  }
}

export async function cadastrar(req: Request, res: Response) {
  try {
    const dados: MedicoDTO = req.body;
    const medico = await service.criarMedico(dados);
    return res.status(201).json(medico);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao cadastrar médico" });
  }
}

export async function atualizar(req: Request, res: Response) {
  try {
    const id: number = Number(req.params.id);
    const dados: MedicoDTO = req.body;
    const medico = await service.atualizarMedico(id, dados);
    return res.json(medico);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao atualizar médico" });
  }
}

export async function deletar(req: Request, res: Response) {
  try {
    const id: number = Number(req.params.id);
    await service.deletarMedico(id);
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: "Erro ao deletar médico" });
  }
}
