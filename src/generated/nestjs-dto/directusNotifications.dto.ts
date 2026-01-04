
import {ApiProperty} from '@nestjs/swagger'


export class DirectusNotificationsDto {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  nullable: true,
})
timestamp: Date  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
status: string  | null;
@ApiProperty({
  type: 'string',
})
subject: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
message: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
collection: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
item: string  | null;
}
