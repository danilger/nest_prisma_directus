
import {ApiProperty} from '@nestjs/swagger'
import {DirectusRevisions} from './directusRevisions.entity'


export class DirectusActivity {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty({
  type: 'string',
})
action: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
user: string  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
timestamp: Date ;
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
})
collection: string ;
@ApiProperty({
  type: 'string',
})
item: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
origin: string  | null;
@ApiProperty({
  type: () => DirectusRevisions,
  isArray: true,
  required: false,
})
directus_revisions?: DirectusRevisions[] ;
}
