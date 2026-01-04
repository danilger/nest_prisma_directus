
import {ApiProperty} from '@nestjs/swagger'


export class DirectusRolesDto {
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
}
