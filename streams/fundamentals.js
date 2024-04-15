// Streams    

// process.stdin
// .pipe(process.stdout)

import { Readable, Writable, Transform } from 'node:stream'

class OneToHundreStream extends Readable {
  index = 1
  _read() {
    const i = this.index++
    setTimeout(() => {

      if (i > 100) {
        this.push(null)
      } else {
        const buf = Buffer.from(String(i))

        this.push(buf)
      }
    }, 1000)
  }
}
class MultiplyByTenStream extends Writable {
  // chunk = pedaço de leitura
  // encoding = como essa informação esta codificada
  // callback = quando ele termina a escrita ela é chamada
  _write(chunk,enconding, callback) {
    console.log(Number(chunk.toString()) * 10)
    callback()
  }
}
class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1

    callback(null,Buffer.from(String(transformed)))
  }
}

new OneToHundreStream()
  .pipe(new InverseNumberStream())
  .pipe(new MultiplyByTenStream())