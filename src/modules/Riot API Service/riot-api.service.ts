import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class RiotApiService {
  private readonly riotApiKey = 'YOUR_RIOT_API_KEY'; // Replace with your Riot API key

  async getRecentMatches(summonerName: string, region: string) {
    const response = await axios.get(
      `https://${region}.api.riotgames.com/lol/match/v4/matchlists/by-account/${summonerName}`,
      {
        headers: {
          'X-Riot-Token': this.riotApiKey,
        },
      },
    );
    
    // Process and return the recent matches data
  }

  async getPlayerSummary(summonerName: string, region: string) {
    const response = await axios.get(
      `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`,
      {
        headers: {
          'X-Riot-Token': this.riotApiKey,
        },
      },
    );
    
    
  }
}
