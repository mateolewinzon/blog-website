import {createClient} from 'next-sanity'
import config from './sanity-config'

export const client = createClient(config)