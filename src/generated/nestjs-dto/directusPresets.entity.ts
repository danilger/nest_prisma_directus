
import {Prisma} from '../prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {DirectusRoles} from './directusRoles.entity'
import {DirectusUsers} from './directusUsers.entity'


export class DirectusPresets {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
bookmark: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
user: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
role: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
collection: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
search: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
layout: string  | null;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
layout_query: Prisma.JsonValue  | null;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
layout_options: Prisma.JsonValue  | null;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  nullable: true,
})
refresh_interval: number  | null;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
filter: Prisma.JsonValue  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
icon: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
color: string  | null;
@ApiProperty({
  type: () => DirectusRoles,
  required: false,
  nullable: true,
})
directus_roles?: DirectusRoles  | null;
@ApiProperty({
  type: () => DirectusUsers,
  required: false,
  nullable: true,
})
directus_users?: DirectusUsers  | null;
}
