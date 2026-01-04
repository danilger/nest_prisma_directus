
import {ApiProperty} from '@nestjs/swagger'
import {DirectusUsers} from './directusUsers.entity'
import {DirectusPanels} from './directusPanels.entity'


export class DirectusDashboards {
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
note: string  | null;
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
  type: 'string',
  nullable: true,
})
color: string  | null;
@ApiProperty({
  type: () => DirectusUsers,
  required: false,
  nullable: true,
})
directus_users?: DirectusUsers  | null;
@ApiProperty({
  type: () => DirectusPanels,
  isArray: true,
  required: false,
})
directus_panels?: DirectusPanels[] ;
}
