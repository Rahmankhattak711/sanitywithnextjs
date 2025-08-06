import {bookSchema} from './bookSchema'
import {headerSchema} from './headerSchema'
import {footerSchema} from './footerSchema'
import {contant} from './contant'
import {author} from './author'
import {category} from './category'
import { dynamicSchema } from './dynamicSchema'
import { pagination } from './pagination'
import { product } from './product'
import { hero } from './hero'
import { button } from './button'
import { contact } from './contact'

export const schemaTypes = [
  bookSchema,
  headerSchema,
  footerSchema,
  author,
  category,
  contant,
  dynamicSchema,
  pagination,
  product,
  hero,
  contact,
  button,
]
