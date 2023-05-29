import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatchModule } from './modules/match/match.module';
import { PlayerModule } from './modules/player/player.module';
import { LeaderboardModule } from './modules/leaderboard/leaderboard.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    MatchModule,
    PlayerModule,
    LeaderboardModule,
  ],
})
export class AppModule {}
