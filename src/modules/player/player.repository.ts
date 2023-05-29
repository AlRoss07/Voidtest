import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './player.entity';

@Injectable()
export class PlayerRepository {
  constructor(
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
  ) {}

  getPlayerSummary(summonerName: string, region: string, queueId: number) {
    // Implement your logic to fetch player summary from the database
    // based on the provided parameters
  }
}
