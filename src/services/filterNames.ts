import { NameStartWithMA } from "./NameStartWithMa"
import { NumOfSyllables } from "./NumOfSyllables"

const filteredNames = []

export const filterNames = (names: string[]) => {
  names.forEach(name => {
    if (NameStartWithMA(name)) {
      if (NumOfSyllables(name) === 4) {
        filteredNames.push(name)
      } 
    }
  })
  console.log(filteredNames)
}