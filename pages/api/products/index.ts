import type { NextApiRequest, NextApiResponse } from 'next'
import {Products} from '../../../data/Products'

export default function getProducts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req);
  
  res.status(200).json(Products)
}
