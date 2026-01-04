
import {Prisma} from '../prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class DirectusUsersDto {
  @ApiProperty({
  type: 'string',
})
id: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
first_name: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
last_name: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
email: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
password: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
location: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
title: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
description: string  | null;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
tags: Prisma.JsonValue  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
avatar: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
language: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
tfa_secret: string  | null;
@ApiProperty({
  type: 'string',
})
status: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
token: string  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  nullable: true,
})
last_access: Date  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
last_page: string  | null;
@ApiProperty({
  type: 'string',
})
provider: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
external_identifier: string  | null;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
auth_data: Prisma.JsonValue  | null;
@ApiProperty({
  type: 'boolean',
  nullable: true,
})
email_notifications: boolean  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
appearance: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
theme_dark: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
theme_light: string  | null;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
theme_light_overrides: Prisma.JsonValue  | null;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
theme_dark_overrides: Prisma.JsonValue  | null;
@ApiProperty({
  type: 'string',
})
text_direction: string ;
}
