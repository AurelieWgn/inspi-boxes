import { Controller } from '@nestjs/common';
import { BoxUserService } from './box_user.service';
@Controller('box-user')
export class BoxUserController {
  constructor(private readonly boxUserServices: BoxUserService) {}
}
