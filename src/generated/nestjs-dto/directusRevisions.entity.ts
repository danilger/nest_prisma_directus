
import {Prisma} from '../prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {DirectusActivity} from './directusActivity.entity'
import {DirectusVersions} from './directusVersions.entity'


export class DirectusRevisions {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
activity: number ;
@ApiProperty({
  type: 'string',
})
collection: string ;
@ApiProperty({
  type: 'string',
})
item: string ;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
data: Prisma.JsonValue  | null;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
delta: Prisma.JsonValue  | null;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  nullable: true,
})
parent: number  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
version: string  | null;
@ApiProperty({
  type: () => DirectusActivity,
  required: false,
})
directus_activity?: DirectusActivity ;
@ApiProperty({
  type: () => DirectusRevisions,
  required: false,
  nullable: true,
})
directus_revisions?: DirectusRevisions  | null;
@ApiProperty({
  type: () => DirectusRevisions,
  isArray: true,
  required: false,
})
other_directus_revisions?: DirectusRevisions[] ;
@ApiProperty({
  type: () => DirectusVersions,
  required: false,
  nullable: true,
})
directus_versions?: DirectusVersions  | null;
}
