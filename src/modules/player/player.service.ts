import { Injectable } from '@nestjs/common';
import { PlayerRepository } from './player.repository';

@Injectable()
export class PlayerService {
  constructor(private readonly playerRepository: PlayerRepository) {}

  getPlayerSummary(summonerName: string, region: string, queueId: number) {
    return this.playerRepository.getPlayerSummary(summonerName, region, queueId);
  }
}
