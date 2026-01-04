
import {Prisma} from '../prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {DirectusFolders} from './directusFolders.entity'
import {DirectusUsers} from './directusUsers.entity'
import {DirectusSettings} from './directusSettings.entity'


export class DirectusFiles {
  @ApiProperty({
  type: 'string',
})
id: string ;
@ApiProperty({
  type: 'string',
})
storage: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
filename_disk: string  | null;
@ApiProperty({
  type: 'string',
})
filename_download: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
title: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
type: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
folder: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
uploaded_by: string  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
created_on: Date ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
modified_by: string  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
modified_on: Date ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
charset: string  | null;
@ApiProperty({
  type: 'integer',
  format: 'int64',
  nullable: true,
})
filesize: bigint  | null;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  nullable: true,
})
width: number  | null;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  nullable: true,
})
height: number  | null;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  nullable: true,
})
duration: number  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
embed: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
description: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
location: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
tags: string  | null;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
metadata: Prisma.JsonValue  | null;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  nullable: true,
})
focal_point_x: number  | null;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  nullable: true,
})
focal_point_y: number  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
tus_id: string  | null;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
tus_data: Prisma.JsonValue  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  nullable: true,
})
uploaded_on: Date  | null;
@ApiProperty({
  type: () => DirectusFolders,
  required: false,
  nullable: true,
})
directus_folders?: DirectusFolders  | null;
@ApiProperty({
  type: () => DirectusUsers,
  required: false,
  nullable: true,
})
directus_users_directus_files_modified_byTodirectus_users?: DirectusUsers  | null;
@ApiProperty({
  type: () => DirectusUsers,
  required: false,
  nullable: true,
})
directus_users_directus_files_uploaded_byTodirectus_users?: DirectusUsers  | null;
@ApiProperty({
  type: () => DirectusSettings,
  isArray: true,
  required: false,
})
directus_settings_directus_settings_project_logoTodirectus_files?: DirectusSettings[] ;
@ApiProperty({
  type: () => DirectusSettings,
  isArray: true,
  required: false,
})
directus_settings_directus_settings_public_backgroundTodirectus_files?: DirectusSettings[] ;
@ApiProperty({
  type: () => DirectusSettings,
  isArray: true,
  required: false,
})
directus_settings_directus_settings_public_faviconTodirectus_files?: DirectusSettings[] ;
@ApiProperty({
  type: () => DirectusSettings,
  isArray: true,
  required: false,
})
directus_settings_directus_settings_public_foregroundTodirectus_files?: DirectusSettings[] ;
}
