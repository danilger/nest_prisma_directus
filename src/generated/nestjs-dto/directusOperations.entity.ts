
import {Prisma} from '../prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {DirectusFlows} from './directusFlows.entity'
import {DirectusUsers} from './directusUsers.entity'


export class DirectusOperations {
  @ApiProperty({
  type: 'string',
})
id: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
name: string  | null;
@ApiProperty({
  type: 'string',
})
key: string ;
@ApiProperty({
  type: 'string',
})
type: string ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
position_x: number ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
position_y: number ;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
options: Prisma.JsonValue  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
resolve: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
reject: string  | null;
@ApiProperty({
  type: 'string',
})
flow: string ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  nullable: true,
})
date_created: Date  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
user_created: string  | null;
@ApiProperty({
  type: () => DirectusFlows,
  required: false,
})
directus_flows?: DirectusFlows ;
@ApiProperty({
  type: () => DirectusOperations,
  required: false,
  nullable: true,
})
directus_operations_directus_operations_rejectTodirectus_operations?: DirectusOperations  | null;
@ApiProperty({
  type: () => DirectusOperations,
  required: false,
  nullable: true,
})
other_directus_operations_directus_operations_rejectTodirectus_operations?: DirectusOperations  | null;
@ApiProperty({
  type: () => DirectusOperations,
  required: false,
  nullable: true,
})
directus_operations_directus_operations_resolveTodirectus_operations?: DirectusOperations  | null;
@ApiProperty({
  type: () => DirectusOperations,
  required: false,
  nullable: true,
})
other_directus_operations_directus_operations_resolveTodirectus_operations?: DirectusOperations  | null;
@ApiProperty({
  type: () => DirectusUsers,
  required: false,
  nullable: true,
})
directus_users?: DirectusUsers  | null;
}
