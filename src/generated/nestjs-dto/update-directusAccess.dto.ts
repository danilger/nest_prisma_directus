
import {ApiProperty} from '@nestjs/swagger'
import {IsInt,IsOptional} from 'class-validator'




export class UpdateDirectusAccessDto {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
  required: false,
  nullable: true,
})
@IsOptional()
@IsInt()
sort?: number  | null;
}
