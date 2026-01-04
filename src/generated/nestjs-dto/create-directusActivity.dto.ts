
import {ApiProperty} from '@nestjs/swagger'
import {IsNotEmpty,IsOptional,IsString} from 'class-validator'




export class CreateDirectusActivityDto {
  @ApiProperty({
  type: 'string',
})
@IsNotEmpty()
@IsString()
action: string ;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
user?: string  | null;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
ip?: string  | null;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
user_agent?: string  | null;
@ApiProperty({
  type: 'string',
})
@IsNotEmpty()
@IsString()
collection: string ;
@ApiProperty({
  type: 'string',
})
@IsNotEmpty()
@IsString()
item: string ;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
origin?: string  | null;
}
