const SegurancaService = require('../services/segurancaService');

class SegurancaController {
  static async cadastrarAcl(req, res) {
    const { roles, permissoes } = req.body;
    const { usuarioId } = req.body;
    try {
      const acl = await SegurancaService.cadastrarAcl({ roles, permissoes, usuarioId });
      res.status(201).send(acl);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}

module.exports = SegurancaController;
