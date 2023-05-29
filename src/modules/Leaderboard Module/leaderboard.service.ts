import { Injectable } from '@nestjs/common';
import { LeaderboardRepository } from './leaderboard.repository';

@Injectable()
export class LeaderboardService {
  constructor(private readonly leaderboardRepository: LeaderboardRepository) {}

  getPlayerPosition(summonerName: string, region: string) {
    return this.leaderboardRepository.getPlayerPosition(summonerName, region);
  }
}
