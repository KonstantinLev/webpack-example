const field: string = 'Hello Type Script!'

interface MyInterface {
    field: string
}

const mi: MyInterface=  {field}
console.log('[TypeScript]', mi)
