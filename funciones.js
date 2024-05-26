
let estiloscss = HtmlService.createHtmlOutputFromFile('css').getContent();
let header = HtmlService.createHtmlOutputFromFile('header').getContent();
let mainsec = HtmlService.createHtmlOutputFromFile('main').getContent();
let footersec = HtmlService.createHtmlOutputFromFile('footer').getContent();

function doGet() {
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda GAS');
}

function obtenerDatosHTML(nombre){
  return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

