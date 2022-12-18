export const NumOfSyllables = (name: string): number => {
  let syllables = 0

  for (let i = 0; i < name.length; i++) {
    if (name[i].match(/[aeiou]/ig)) {
      syllables += 1;
    }
  }

  return syllables;
}