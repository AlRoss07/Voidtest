import { Controller, Get, Param } from '@nestjs/common';
import { LeaderboardService } from './leaderboard.service';

@Controller('leaderboard')
export class LeaderboardController {
  constructor(private readonly leaderboardService: LeaderboardService) {}

  @Get(':summonerName/:region')
  getPlayerPosition(
    @Param('summonerName') summonerName: string,
    @Param('region') region: string,
  ) {
    return this.leaderboardService.getPlayerPosition(summonerName, region);
  }
}
