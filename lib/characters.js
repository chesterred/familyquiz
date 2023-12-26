import { endpoint } from '@/utils/endpoint'

export async function getAllCharacters()
{
  const data = await fetch(`${endpoint}/characters`);

  return data.json();
}

export async function getCharacterBySlug() {};
