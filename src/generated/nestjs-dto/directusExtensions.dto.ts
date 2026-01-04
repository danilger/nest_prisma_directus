
import {ApiProperty} from '@nestjs/swagger'


export class DirectusExtensionsDto {
  @ApiProperty({
  type: 'boolean',
})
enabled: boolean ;
@ApiProperty({
  type: 'string',
})
id: string ;
@ApiProperty({
  type: 'string',
})
folder: string ;
@ApiProperty({
  type: 'string',
})
source: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
bundle: string  | null;
}
