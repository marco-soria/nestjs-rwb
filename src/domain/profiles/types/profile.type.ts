import { UserType } from '@app/domain/users/types/user.types';

export type ProfileType = UserType & { following: boolean };
