var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var towninfo = request.response;
    showFranklin(towninfo);
    showGreenville(towninfo);
    showSpringfield(towninfo);
}

function showFranklin (jsonObj) {
    var townData = jsonObj['towns'];
    var fArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myP1 = document.createElement('p');
    var myP2 = document.createElement('p');
    var myP3 = document.createElement('p');
    var myP4 = document.createElement('p');

    myH2.textContent = townData[0].name;
    myP1.textContent = 'Motto:  ' + townData[0].motto;
    myP2.textContent = 'Year Founded:  ' + townData[0].yearFounded;
    myP3.textContent = 'Population:  ' + townData[0].currentPopulation;
    myP4.textContent = 'Annual Rainfall:  ' + townData[0].averageRainfall;

    fArticle.appendChild(myH2);
    fArticle.appendChild(myP1);
    fArticle.appendChild(myP2);
    fArticle.appendChild(myP3);
    fArticle.appendChild(myP4);

    franklin.appendChild(fArticle);
}

function showGreenville (jsonObj) {
    var townData = jsonObj['towns'];
    var fArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myP1 = document.createElement('p');
    var myP2 = document.createElement('p');
    var myP3 = document.createElement('p');
    var myP4 = document.createElement('p');

    myH2.textContent = townData[1].name;
    myP1.textContent = 'Motto:  ' + townData[1].motto;
    myP2.textContent = 'Year Founded:  ' + townData[1].yearFounded;
    myP3.textContent = 'Population:  ' + townData[1].currentPopulation;
    myP4.textContent = 'Annual Rainfall:  ' + townData[1].averageRainfall;

    fArticle.appendChild(myH2);
    fArticle.appendChild(myP1);
    fArticle.appendChild(myP2);
    fArticle.appendChild(myP3);
    fArticle.appendChild(myP4);

    greenville.appendChild(fArticle);
}

function showSpringfield (jsonObj) {
    var townData = jsonObj['towns'];
    var fArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myP1 = document.createElement('p');
    var myP2 = document.createElement('p');
    var myP3 = document.createElement('p');
    var myP4 = document.createElement('p');

    myH2.textContent = townData[3].name;
    myP1.textContent = 'Motto:  ' + townData[3].motto;
    myP2.textContent = 'Year Founded:  ' + townData[3].yearFounded;
    myP3.textContent = 'Population:  ' + townData[3].currentPopulation;
    myP4.textContent = 'Annual Rainfall:  ' + townData[3].averageRainfall;

    fArticle.appendChild(myH2);
    fArticle.appendChild(myP1);
    fArticle.appendChild(myP2);
    fArticle.appendChild(myP3);
    fArticle.appendChild(myP4);

    springfield.appendChild(fArticle);
}
