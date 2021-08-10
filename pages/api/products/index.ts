import type { NextApiRequest, NextApiResponse } from 'next'
import {Products} from '../../../data/Products'

export default function getProducts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(Products)
}
