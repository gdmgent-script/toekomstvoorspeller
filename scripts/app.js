function predictFuture(jobTitle, location, partner, amountOfKids) {
    const prediction = `Je zal een ${jobTitle} zijn in ${location} die getrouwd is met ${partner} en ${amountOfKids} kinderen heeft.`;
    document.write(prediction);
}

predictFuture('viroloog', 'Italië', 'Pavarotti', 4);

// deel 2
const jobTitles = ['bakker', 'model', 'visagist', 'ingenieur', 'producer']
const locations = ['Egypte', 'schuilkelder', 'Madagascar', 'Ruslan', 'Antarctica']
const partners = ['Gert Verhulst', 'Billie Eilish', 'Nelleke', 'Gilles De Coster', 'Eva Morana Boem Boem']

const randomJobTitle = jobTitles[Math.floor(Math.random() * jobTitles.length)];
const randomLocation = jobTitles[Math.floor(Math.random() * jobTitles.length)];
const randomPartner = jobTitles[Math.floor(Math.random() * jobTitles.length)];
const randomAmountOfKids = Math.floor(Math.random() * 10);

predictFuture(randomJobTitle, randomLocation, randomPartner, randomAmountOfKids);