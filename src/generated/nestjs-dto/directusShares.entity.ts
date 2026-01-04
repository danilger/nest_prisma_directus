
import {ApiProperty} from '@nestjs/swagger'
import {DirectusSessions} from './directusSessions.entity'
import {DirectusCollections} from './directusCollections.entity'
import {DirectusRoles} from './directusRoles.entity'
import {DirectusUsers} from './directusUsers.entity'


export class DirectusShares {
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
collection: string ;
@ApiProperty({
  type: 'string',
})
item: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
role: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
password: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
user_created: string  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  nullable: true,
})
date_created: Date  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  nullable: true,
})
date_start: Date  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  nullable: true,
})
date_end: Date  | null;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  nullable: true,
})
times_used: number  | null;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  nullable: true,
})
max_uses: number  | null;
@ApiProperty({
  type: () => DirectusSessions,
  isArray: true,
  required: false,
})
directus_sessions?: DirectusSessions[] ;
@ApiProperty({
  type: () => DirectusCollections,
  required: false,
})
directus_collections?: DirectusCollections ;
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
