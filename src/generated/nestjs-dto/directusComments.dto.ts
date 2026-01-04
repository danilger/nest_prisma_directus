
import {ApiProperty} from '@nestjs/swagger'


export class DirectusCommentsDto {
  @ApiProperty({
  type: 'string',
})
id: string ;
@ApiProperty({
  type: 'string',
})
collection: string ;
@ApiProperty({
  type: 'string',
})
item: string ;
@ApiProperty({
  type: 'string',
})
comment: string ;
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
date_updated: Date  | null;
}
