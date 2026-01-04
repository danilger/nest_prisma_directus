
import {Prisma} from '../prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {DirectusRevisions} from './directusRevisions.entity'
import {DirectusCollections} from './directusCollections.entity'
import {DirectusUsers} from './directusUsers.entity'


export class DirectusVersions {
  @ApiProperty({
  type: 'string',
})
id: string ;
@ApiProperty({
  type: 'string',
})
key: string ;
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
hash: string  | null;
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
date_updated: Date  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
user_created: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
user_updated: string  | null;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
delta: Prisma.JsonValue  | null;
@ApiProperty({
  type: () => DirectusRevisions,
  isArray: true,
  required: false,
})
directus_revisions?: DirectusRevisions[] ;
@ApiProperty({
  type: () => DirectusCollections,
  required: false,
})
directus_collections?: DirectusCollections ;
@ApiProperty({
  type: () => DirectusUsers,
  required: false,
  nullable: true,
})
directus_users_directus_versions_user_createdTodirectus_users?: DirectusUsers  | null;
@ApiProperty({
  type: () => DirectusUsers,
  required: false,
  nullable: true,
})
directus_users_directus_versions_user_updatedTodirectus_users?: DirectusUsers  | null;
}
