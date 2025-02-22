import { Request, Response, Router } from 'express'

import Inventories from '@/models/inventories'

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: '¡Hola desde Express con TypeScript!' })
})

router.post(
  '/inventories/create',
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { producto, sku, marca, stock, precio } = req.body

      if (!producto || !sku || !marca || !stock || !precio) {
        res.status(400).json({ message: 'Todos los campos son obligatorios' })
        return
      }

      const nuevoInventario = new Inventories({
        producto,
        sku,
        marca,
        stock,
        precio,
      })
      await nuevoInventario.save()

      res.status(201).json(nuevoInventario)
    } catch (error) {
      res.status(500).json({ message: 'Error al crear el inventario', error })
    }
  }
)

export default router
