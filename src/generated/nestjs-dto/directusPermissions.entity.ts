
import {Prisma} from '../prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {DirectusPolicies} from './directusPolicies.entity'


export class DirectusPermissions {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty({
  type: 'string',
})
collection: string ;
@ApiProperty({
  type: 'string',
})
action: string ;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
permissions: Prisma.JsonValue  | null;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
validation: Prisma.JsonValue  | null;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
presets: Prisma.JsonValue  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
fields: string  | null;
@ApiProperty({
  type: 'string',
})
policy: string ;
@ApiProperty({
  type: () => DirectusPolicies,
  required: false,
})
directus_policies?: DirectusPolicies ;
}
