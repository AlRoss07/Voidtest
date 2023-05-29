import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Leaderboard } from './leaderboard.entity';

@Injectable()
export class LeaderboardRepository {
  constructor(
    @InjectRepository(Leaderboard)
    private readonly leaderboardRepository: Repository<Leaderboard>,
  ) {}

  getPlayerPosition(summonerName: string, region: string) {
    // Implement your logic to fetch player position from the database
    // based on the provided summoner name and region
  }
}
