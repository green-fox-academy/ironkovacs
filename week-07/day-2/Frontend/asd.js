let text = 'loraem ipsum dolo'

function teve(text) {
  let vowels = ['a', 'á', 'e', 'é', 'i', 'í', 'o', 'ó', 'ö', 'ő', 'u', 'ú', 'ü', 'ű']
  vowels.forEach(e => {
    let replce = new RegExp(e, "g");
    text = text.replace(replce, `${e}v${e}`)
  });
  return text;
}
console.log(teve(text));
