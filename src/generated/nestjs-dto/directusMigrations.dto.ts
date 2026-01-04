
import {ApiProperty} from '@nestjs/swagger'


export class DirectusMigrationsDto {
  @ApiProperty({
  type: 'string',
})
version: string ;
@ApiProperty({
  type: 'string',
})
name: string ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  nullable: true,
})
timestamp: Date  | null;
}
