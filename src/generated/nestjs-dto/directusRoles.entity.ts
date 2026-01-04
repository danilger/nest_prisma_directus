
import {ApiProperty} from '@nestjs/swagger'
import {DirectusAccess} from './directusAccess.entity'
import {DirectusPresets} from './directusPresets.entity'
import {DirectusSettings} from './directusSettings.entity'
import {DirectusShares} from './directusShares.entity'
import {DirectusUsers} from './directusUsers.entity'


export class DirectusRoles {
  @ApiProperty({
  type: 'string',
})
id: string ;
@ApiProperty({
  type: 'string',
})
name: string ;
@ApiProperty({
  type: 'string',
})
icon: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
description: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
parent: string  | null;
@ApiProperty({
  type: () => DirectusAccess,
  isArray: true,
  required: false,
})
directus_access?: DirectusAccess[] ;
@ApiProperty({
  type: () => DirectusPresets,
  isArray: true,
  required: false,
})
directus_presets?: DirectusPresets[] ;
@ApiProperty({
  type: () => DirectusRoles,
  required: false,
  nullable: true,
})
directus_roles?: DirectusRoles  | null;
@ApiProperty({
  type: () => DirectusRoles,
  isArray: true,
  required: false,
})
other_directus_roles?: DirectusRoles[] ;
@ApiProperty({
  type: () => DirectusSettings,
  isArray: true,
  required: false,
})
directus_settings?: DirectusSettings[] ;
@ApiProperty({
  type: () => DirectusShares,
  isArray: true,
  required: false,
})
directus_shares?: DirectusShares[] ;
@ApiProperty({
  type: () => DirectusUsers,
  isArray: true,
  required: false,
})
directus_users?: DirectusUsers[] ;
}
