
import {ApiProperty} from '@nestjs/swagger'
import {DirectusUsers} from './directusUsers.entity'


export class DirectusComments {
  @ApiProperty({
  type: 'string',
})
id: string ;
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
})
comment: string ;
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
  type: () => DirectusUsers,
  required: false,
  nullable: true,
})
directus_users_directus_comments_user_createdTodirectus_users?: DirectusUsers  | null;
@ApiProperty({
  type: () => DirectusUsers,
  required: false,
  nullable: true,
})
directus_users_directus_comments_user_updatedTodirectus_users?: DirectusUsers  | null;
}
