
import {ApiProperty} from '@nestjs/swagger'
import {DirectusFiles} from './directusFiles.entity'
import {DirectusSettings} from './directusSettings.entity'


export class DirectusFolders {
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
  nullable: true,
})
parent: string  | null;
@ApiProperty({
  type: () => DirectusFiles,
  isArray: true,
  required: false,
})
directus_files?: DirectusFiles[] ;
@ApiProperty({
  type: () => DirectusFolders,
  required: false,
  nullable: true,
})
directus_folders?: DirectusFolders  | null;
@ApiProperty({
  type: () => DirectusFolders,
  isArray: true,
  required: false,
})
other_directus_folders?: DirectusFolders[] ;
@ApiProperty({
  type: () => DirectusSettings,
  isArray: true,
  required: false,
})
directus_settings?: DirectusSettings[] ;
}
