const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeWebsite(url) {
    try {
        // Mengirim permintaan url
        const response = await axios.get(url);
        
        // Mengambil konten HTML 
        const html = response.data;
        
        // Load HTML 
        const htmlWeb = cheerio.load(html);
        
        // ekstrak informasi html
        const pageTitle = htmlWeb('title').text();
        
        // Hasil
        console.log('Title:', pageTitle);
    } catch (error) {
        console.error('Error:', error);
    }
}

// scrape
scrapeWebsite("https://sman1-mgl.sch.id/");

