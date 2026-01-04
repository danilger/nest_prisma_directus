
import {Prisma} from '../prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {DirectusUsers} from './directusUsers.entity'
import {DirectusOperations} from './directusOperations.entity'
import {DirectusWebhooks} from './directusWebhooks.entity'


export class DirectusFlows {
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
icon: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
color: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
description: string  | null;
@ApiProperty({
  type: 'string',
})
status: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
trigger: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
accountability: string  | null;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
options: Prisma.JsonValue  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
operation: string  | null;
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
  type: () => DirectusUsers,
  required: false,
  nullable: true,
})
directus_users?: DirectusUsers  | null;
@ApiProperty({
  type: () => DirectusOperations,
  isArray: true,
  required: false,
})
directus_operations?: DirectusOperations[] ;
@ApiProperty({
  type: () => DirectusWebhooks,
  isArray: true,
  required: false,
})
directus_webhooks?: DirectusWebhooks[] ;
}
