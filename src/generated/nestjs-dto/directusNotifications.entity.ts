
import {ApiProperty} from '@nestjs/swagger'
import {DirectusUsers} from './directusUsers.entity'


export class DirectusNotifications {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  nullable: true,
})
timestamp: Date  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
status: string  | null;
@ApiProperty({
  type: 'string',
})
recipient: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
sender: string  | null;
@ApiProperty({
  type: 'string',
})
subject: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
message: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
collection: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
item: string  | null;
@ApiProperty({
  type: () => DirectusUsers,
  required: false,
})
directus_users_directus_notifications_recipientTodirectus_users?: DirectusUsers ;
@ApiProperty({
  type: () => DirectusUsers,
  required: false,
  nullable: true,
})
directus_users_directus_notifications_senderTodirectus_users?: DirectusUsers  | null;
}
