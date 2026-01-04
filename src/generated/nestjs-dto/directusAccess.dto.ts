
import {ApiProperty} from '@nestjs/swagger'


export class DirectusAccessDto {
  @ApiProperty({
  type: 'string',
})
id: string ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  nullable: true,
})
sort: number  | null;
}
