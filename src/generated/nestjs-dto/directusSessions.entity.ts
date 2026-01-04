
import {ApiProperty} from '@nestjs/swagger'
import {DirectusShares} from './directusShares.entity'
import {DirectusUsers} from './directusUsers.entity'


export class DirectusSessions {
  @ApiProperty({
  type: 'string',
})
token: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
user: string  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
expires: Date ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
ip: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
user_agent: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
share: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
origin: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
next_token: string  | null;
@ApiProperty({
  type: () => DirectusShares,
  required: false,
  nullable: true,
})
directus_shares?: DirectusShares  | null;
@ApiProperty({
  type: () => DirectusUsers,
  required: false,
  nullable: true,
})
directus_users?: DirectusUsers  | null;
}
