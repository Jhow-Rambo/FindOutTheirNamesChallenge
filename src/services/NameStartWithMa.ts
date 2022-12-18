export const NameStartWithMA = (name: string): Boolean => {
  return name.slice(0, 2) === 'MA' && name.match(/DI/) ? true : false;
}
 