
import {ApiProperty} from '@nestjs/swagger'


export class DirectusPoliciesDto {
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
}
