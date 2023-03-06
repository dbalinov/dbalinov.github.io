import { FileService } from '@/services'

export async function getSettings(): Promise<any> {
  const settings = await FileService.readJsonFile('./settings.json')

  return settings
}