
import {ApiProperty} from '@nestjs/swagger'


export class DirectusSessionsDto {
  @ApiProperty({
  type: 'string',
})
token: string ;
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
origin: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
next_token: string  | null;
}
