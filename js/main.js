
var prevIndex=-1;
var quotes=[{quote:'"Being deeply loved by someone gives you strength, while loving someone deeply gives you courage."' , writer:"--Lao Tzu"},
    {quote:`"It is never too late to be what you might have been."`, writer:"--George Eliot"},
    {quote:`"If you can't explain it to a six year old, you don't understand it yourself."` , writer:"--Albert Einstein"},
    {quote:`"Sometimes the questions are complicated and the answers are simple."` , writer:"--Dr. Seuss"},
    {quote:`"Some day you will be old enough to start reading fairy tales again."` , writer:"--C.S. Lewis"},
    {quote:`"A lady's imagination is very rapid; it jumps from admiration to love, from love to matrimony in a moment."` , writer:"--Jane Austen"},
    {quote:`"It’s no use going back to yesterday, because I was a different person then."` , writer:"--Lewis Carroll"},
    {quote:`"Memories warm you up from the inside. But they also tear you apart."`, writer:"--Haruki Murakami"},
    {quote:`"Knowing yourself is the beginning of all wisdom."`, writer:"--Aristotle"}];

var btn=document.getElementById("btn");
var quote=document.getElementById("quote");
var writer=document.getElementById("writer");
btn.addEventListener("click",function(){
    var random;
    do {
        random =Math.floor(Math.random() * quotes.length);
    } while (random===prevIndex);
    
    quote.innerHTML=quotes[random].quote;
    writer.innerHTML=quotes[random].writer;
    prevIndex=random;
});