
import {Prisma} from '../prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {DirectusShares} from './directusShares.entity'
import {DirectusVersions} from './directusVersions.entity'


export class DirectusCollections {
  @ApiProperty({
  type: 'string',
})
collection: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
icon: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
note: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
display_template: string  | null;
@ApiProperty({
  type: 'boolean',
})
hidden: boolean ;
@ApiProperty({
  type: 'boolean',
})
singleton: boolean ;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
translations: Prisma.JsonValue  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
archive_field: string  | null;
@ApiProperty({
  type: 'boolean',
})
archive_app_filter: boolean ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
archive_value: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
unarchive_value: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
sort_field: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
accountability: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
color: string  | null;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
item_duplication_fields: Prisma.JsonValue  | null;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  nullable: true,
})
sort: number  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
group: string  | null;
@ApiProperty({
  type: 'string',
})
collapse: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
preview_url: string  | null;
@ApiProperty({
  type: 'boolean',
})
versioning: boolean ;
@ApiProperty({
  type: () => DirectusCollections,
  required: false,
  nullable: true,
})
directus_collections?: DirectusCollections  | null;
@ApiProperty({
  type: () => DirectusCollections,
  isArray: true,
  required: false,
})
other_directus_collections?: DirectusCollections[] ;
@ApiProperty({
  type: () => DirectusShares,
  isArray: true,
  required: false,
})
directus_shares?: DirectusShares[] ;
@ApiProperty({
  type: () => DirectusVersions,
  isArray: true,
  required: false,
})
directus_versions?: DirectusVersions[] ;
}
