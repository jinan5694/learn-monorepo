import { foo } from '@base/foo'


export const bar = (): void => {
  console.log('this is bar:' + foo);
}

export const baz = (a: number, b: string) => {
  console.log(a, b);
}