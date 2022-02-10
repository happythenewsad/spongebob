
//var elements = document.getElementsByTagName('h3');
var elements = document.querySelectorAll('h1,h2,h3')
function spongeifyString(str: String | null) {
    if (!str) {
        return ''
    }
	return str.split('').map(x => spongeifyChar(x)).join('')
}

function spongeifyChar(aChar: any){
    let resultChar = aChar.toLowerCase()
    let shouldUpcase = Math.random() > 0.5
    return shouldUpcase ? resultChar.toUpperCase() : resultChar
}

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = spongeifyString(text); //'foo';//text.replace(/[word or phrase to replace here]/gi, '[new word or phrase]');

            //if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            //}
        }
    }
}

export {}