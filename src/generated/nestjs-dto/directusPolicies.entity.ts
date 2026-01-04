
import {ApiProperty} from '@nestjs/swagger'
import {DirectusAccess} from './directusAccess.entity'
import {DirectusPermissions} from './directusPermissions.entity'


export class DirectusPolicies {
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
ip_access: string  | null;
@ApiProperty({
  type: 'boolean',
})
enforce_tfa: boolean ;
@ApiProperty({
  type: 'boolean',
})
admin_access: boolean ;
@ApiProperty({
  type: 'boolean',
})
app_access: boolean ;
@ApiProperty({
  type: () => DirectusAccess,
  isArray: true,
  required: false,
})
directus_access?: DirectusAccess[] ;
@ApiProperty({
  type: () => DirectusPermissions,
  isArray: true,
  required: false,
})
directus_permissions?: DirectusPermissions[] ;
}
