
import {ApiProperty} from '@nestjs/swagger'


export class DirectusSharesDto {
  @ApiProperty({
  type: 'string',
})
id: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
name: string  | null;
@ApiProperty({
  type: 'string',
})
item: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
password: string  | null;
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
date_start: Date  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  nullable: true,
})
date_end: Date  | null;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  nullable: true,
})
times_used: number  | null;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  nullable: true,
})
max_uses: number  | null;
}
