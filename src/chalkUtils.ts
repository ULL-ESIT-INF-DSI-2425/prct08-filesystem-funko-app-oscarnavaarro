import chalk, { ChalkInstance } from 'chalk';

export function getMarketValueColor(value: number): ChalkInstance {
  if (value < 20) return chalk.red;
  if (value < 50) return chalk.yellow;
  if (value < 100) return chalk.blue;
  return chalk.green;
}