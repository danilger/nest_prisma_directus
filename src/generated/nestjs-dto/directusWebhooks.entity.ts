
import {Prisma} from '../prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {DirectusFlows} from './directusFlows.entity'


export class DirectusWebhooks {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty({
  type: 'string',
})
name: string ;
@ApiProperty({
  type: 'string',
})
method: string ;
@ApiProperty({
  type: 'string',
})
url: string ;
@ApiProperty({
  type: 'string',
})
status: string ;
@ApiProperty({
  type: 'boolean',
})
data: boolean ;
@ApiProperty({
  type: 'string',
})
actions: string ;
@ApiProperty({
  type: 'string',
})
collections: string ;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
headers: Prisma.JsonValue  | null;
@ApiProperty({
  type: 'boolean',
})
was_active_before_deprecation: boolean ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
migrated_flow: string  | null;
@ApiProperty({
  type: () => DirectusFlows,
  required: false,
  nullable: true,
})
directus_flows?: DirectusFlows  | null;
}
