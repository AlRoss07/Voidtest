import { Controller, Get, Query } from '@nestjs/common';
import { MatchService } from './match.service';

@Controller('matches')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @Get()
  getRecentMatches(
    @Query('summonerName') summonerName: string,
    @Query('region') region: string,
    @Query('queueId') queueId: number,
    @Query('size') size: number,
    @Query('limit') limit: number,
  ) {
    return this.matchService.getRecentMatches(
      summonerName,
      region,
      queueId,
      size,
      limit,
    );
  }
}
