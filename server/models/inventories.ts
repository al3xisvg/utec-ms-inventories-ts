import mongoose, { Schema, Document } from 'mongoose'

export interface IInventory extends Document {
  producto: string
  sku: string
  marca: string
  stock: number
  precio: number
}

const InventorySchema = new Schema<IInventory>(
  {
    producto: { type: String, required: true },
    sku: { type: String, required: true },
    marca: { type: String, required: true },
    stock: { type: Number, required: true },
    precio: { type: Number, required: true },
  },
  { timestamps: true } // 'createdAt' y 'updatedAt'
)

const Inventories = mongoose.model<IInventory>('Inventories', InventorySchema)

export default Inventories
