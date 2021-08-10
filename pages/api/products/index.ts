import type { NextApiResponse } from 'next'
import {Products} from '../../../data/Products'

export default function getProducts(res: NextApiResponse) {
  res.status(200).json(Products)
}
