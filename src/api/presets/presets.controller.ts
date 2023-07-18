import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { GetAllPresetsQueryCommand } from '../../use-cases/query.use-cases/get.all.presets.query.use-case';
import { PresetInputDto } from '../../dto/preset.input.dto';
import { CreateNewPresetCommand } from '../../use-cases/command.use-cases/create.new.preset.use-case';
import { PresetUpdateDto } from '../../dto/preset.update.dto';
import { UpdatePresetCommand } from '../../use-cases/command.use-cases/update.preset.use-case';
import { DeletePresetByIdCommand } from '../../use-cases/command.use-cases/delete.preset.by.id.use-case';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

@Controller('p')
export class PresetsController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get('presets')
  async getPresets() {
    return this.queryBus.execute(new GetAllPresetsQueryCommand());
  }

  @Post('save-presets')
  async savePreset(@Body() presetData: PresetInputDto) {
    return this.commandBus.execute(new CreateNewPresetCommand(presetData));
  }

  @Put(':id/update-presets')
  @HttpCode(204)
  async updatePreset(
    @Param() id: string,
    @Body() presetUpdateBody: PresetUpdateDto,
  ) {
    return this.commandBus.execute(
      new UpdatePresetCommand(presetUpdateBody.message, +id),
    );
  }

  @Delete(':id')
  @HttpCode(204)
  async deletePreset(@Param('id') id: string) {
    return await this.commandBus.execute(new DeletePresetByIdCommand(+id));
  }
}
