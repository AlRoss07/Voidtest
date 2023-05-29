import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Match } from './match.entity';

@Injectable()
export class MatchRepository {
  constructor(
    @InjectRepository(Match)
    private readonly matchRepository: Repository<Match>,
  ) {}

  getRecentMatches(
    summonerName: string,
    region: string,
    queueId: number,
    size: number,
    limit: number,
  ) {
    
  }
}
