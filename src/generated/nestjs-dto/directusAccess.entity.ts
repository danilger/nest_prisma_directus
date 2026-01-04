
import {ApiProperty} from '@nestjs/swagger'
import {DirectusPolicies} from './directusPolicies.entity'
import {DirectusRoles} from './directusRoles.entity'
import {DirectusUsers} from './directusUsers.entity'


export class DirectusAccess {
  @ApiProperty({
  type: 'string',
})
id: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
role: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
user: string  | null;
@ApiProperty({
  type: 'string',
})
policy: string ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  nullable: true,
})
sort: number  | null;
@ApiProperty({
  type: () => DirectusPolicies,
  required: false,
})
directus_policies?: DirectusPolicies ;
@ApiProperty({
  type: () => DirectusRoles,
  required: false,
  nullable: true,
})
directus_roles?: DirectusRoles  | null;
@ApiProperty({
  type: () => DirectusUsers,
  required: false,
  nullable: true,
})
directus_users?: DirectusUsers  | null;
}
