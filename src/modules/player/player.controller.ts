import { Controller, Get, Query } from '@nestjs/common';
import { PlayerService } from './player.service';

@Controller('players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get('summary')
  getPlayerSummary(
    @Query('summonerName') summonerName: string,
    @Query('region') region: string,
    @Query('queueId') queueId: number,
  ) {
    return this.playerService.getPlayerSummary(
      summonerName,
      region,
      queueId,
    );
  }
}
