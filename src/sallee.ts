import { Dictionary } from './dictionary';

/* Example:
 * {
 *   emotions: {
 *     admiration: 0.48782569129566067,
 *     amusement: 0,
 *     anger: 0.6086497486477077,
 *     boredom: 0,
 *     calmness: 0.12305847660364432,
 *     curiosity: 0.09785171972967724,
 *     desire: 0.09785171972967724,
 *     disgust: 0.34208586814538866,
 *     excitement: 0.17328661192130024,
 *     fear: 0.4694029973735501,
 *     gratitude: 0.3789270877380496,
 *     joy: 0.3567181231703823,
 *     love: 0.1033354800607175,
 *     pain: 0,
 *     sadness: 0.5241720551064822,
 *     surprise: 0
 *   },
 *   goodfeel: 0.10178138912906882,
 *   ambifeel: 0.02030042480518574,
 *   badfeel: 0.10349457312717841,
 *   emotionality: 0.2234281939603551,
 *   sentiment: -0.057639887736163034,
 *   non_emotion: 0.7765718060396449
 * }
 */

export interface SALLEE {
  emotions: Dictionary<number>;
  goodfeel: number;
  ambifeel: number;
  badfeel: number;
  emotionality: number;
  sentiment: number;
  non_emotion: number;
}
