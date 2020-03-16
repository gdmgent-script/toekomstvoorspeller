# Example Structure for the exercises

4 categories

- Only the exercise ***master***
- Exercise + steps in comments ***guided***
- Exercise + steps in comments + start-code ***extra-guided***
- Solution ***solution***


Oefening - Toekomstvoorspeller
-------

### Deel 1

Waarom zou je een toekomstvoorspeller betalen als je er zelf een kan programmeren?

Schrijf een functie `predictFuture()` die 4 argumenten aanvaardt:

`jobTitle`, `allLocation`, `partner`, `amountOfKids`
De functie moet iets in de DOM schrijven (mag met `document.write()`) zoals:

**Je zal een casanova zijn in Benidorm die getrouwd is met Marina Wally en 7 kinderen heeft.**

Gebruik *Template Literals* voor het samenstellen van bovenstaande voorspelling!

Roep vervolgens die functie drie keer aan, met telkens andere argumenten.

### Deel 2

Maak drie arrays

`let jobTitles = [....]` met daarin verschillende jobopportuniteiten  
(vb banketbakker, slager, tuinarchitect, ...)  
`let locations` = [....]`  
(vb Londen, Tibet, Gent, ...)  
`let partners = [...]` 
(vb Jonas Van Geel, Regi Penxten, Boef, Klaasje, ...)

Haal er voor elke array een random waarde uit

    let randomJobTitle = jobTitles[Math.floor(Math.random() * jobTitles.length)];
    let randomLocation = ... // (gelijkaardig als hierboven)
    let randomPartner = ... // (gelijkaardig als hierboven)

Bereken ook een willekeurig aantal kinderen door gebruik te maken van Math.random()  
Roep de functie nu nogmaals aan, maar met de willekeurige waardes :-).