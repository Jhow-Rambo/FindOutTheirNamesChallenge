const newNames = []
let count = 0

export const filterNames = (names: string[]) => {
  names.forEach(name => {

    // console.log(name.slice(0, 2), name)

    if (name.slice(0, 2) === 'MA' && name.match(/DI/)) {
      for (let i = 0; i < name.length; i++) {
        if (name[i].match(/[aeiou]/ig)) {
          count += 1;
        }
      }

      if (count === 4) {
        newNames.push(name)
      } 
    }

    count = 0
  })
  console.log(newNames)
}