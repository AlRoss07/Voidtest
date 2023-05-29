import { Injectable } from '@nestjs/common';
import { MatchRepository } from './match.repository';

@Injectable()
export class MatchService {
  constructor(private readonly matchRepository: MatchRepository) {}

  getRecentMatches(
    summonerName: string,
    region: string,
    queueId: number,
    size: number,
    limit: number,
  ) {
    return this.matchRepository.getRecentMatches(
      summonerName,
      region,
      queueId,
      size,
      limit,
    );
  }
}
