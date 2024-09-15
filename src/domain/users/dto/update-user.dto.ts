// import { PartialType } from '@nestjs/mapped-types';
// import { CreateUserDto } from './create-user.dto';

// export class UpdateUserDto extends PartialType(CreateUserDto) {}
export class UpdateUserDto {
  readonly username: string;

  readonly email: string;

  readonly bio: string;

  readonly image: string;
}
