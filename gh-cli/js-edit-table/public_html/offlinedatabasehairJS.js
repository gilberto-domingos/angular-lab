
// função escrever dia da semana
function diaSeg() {
   document.getElementById("seg").value = "segunda";
}

//1. Inicialização
var localDB = null;

function onInit(){
    try {
        if (!window.openDatabase) {
            updateStatus("Erro: Seu navegador não permite banco de dados.");
        }
        else {
            initDB();
            createTables();
            queryAndUpdateOverview();
            // DropTables(); 
        }
    } 
    catch (e) {
        if (e == 2) {
            updateStatus("Erro: Versão de banco de dados inválida.");
        }
        else {
            updateStatus("Erro: Erro desconhecido: " + e + ".");
        }
        return;
    }
}


// se quiser dropar não esquecer de chamar a função la no começo onInit()
/*
function DropTables(){  

    var query = 'DROP TABLE hair;';
    try {                                                                     
        localDB.transaction(function(transaction){
            transaction.executeSql(query, [], nullDataHandler, errorHandler);
            updateStatus("drop 'hair' status: OK.");
        });
    } 
    catch (e) {
        updateStatus("Erro: Data base 'hair' não criada " + e + e + e + e + e + e + e + e + e + ".");
        return;
    }
}
     */


function initDB(){
    var shortName = 'stuffDB';
    var version = '1.0';
    var displayName = 'MyStuffDB';
    var maxSize = 165536; // Em bytes
    localDB = window.openDatabase(shortName, version, displayName, maxSize);
}

function createTables(){
    var query = 'CREATE TABLE IF NOT EXISTS hair(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, data DATE NOT NULL, dia VARCHAR NOT NULL, hora1  TIME NOT NULL,  amanda1 VARCHAR NOT NULL, luiz1 VARCHAR NOT NULL,  ariel1  VARCHAR NOT NULL, joice1 VARCHAR NOT NULL, adri1 VARCHAR NOT NULL,  bia1 VARCHAR NOT NULL,\n\
hora2  TIME NOT NULL,  amanda2 VARCHAR NOT NULL, luiz2 VARCHAR NOT NULL,  ariel2  VARCHAR NOT NULL, joice2 VARCHAR NOT NULL, adri2 VARCHAR NOT NULL,  bia2 VARCHAR NOT NULL,\n\
hora3  TIME NOT NULL,  amanda3 VARCHAR NOT NULL, luiz3 VARCHAR NOT NULL,  ariel3  VARCHAR NOT NULL, joice3 VARCHAR NOT NULL, adri3 VARCHAR NOT NULL,  bia3 VARCHAR NOT NULL,\n\
hora4  TIME NOT NULL,  amanda4 VARCHAR NOT NULL, luiz4 VARCHAR NOT NULL,  ariel4  VARCHAR NOT NULL, joice4 VARCHAR NOT NULL, adri4 VARCHAR NOT NULL,  bia4 VARCHAR NOT NULL,\n\
hora5  TIME NOT NULL,  amanda5 VARCHAR NOT NULL, luiz5 VARCHAR NOT NULL,  ariel5  VARCHAR NOT NULL, joice5 VARCHAR NOT NULL, adri5 VARCHAR NOT NULL,  bia5 VARCHAR NOT NULL,\n\
hora6  TIME NOT NULL,  amanda6 VARCHAR NOT NULL, luiz6 VARCHAR NOT NULL,  ariel6  VARCHAR NOT NULL, joice6 VARCHAR NOT NULL, adri6 VARCHAR NOT NULL,  bia6 VARCHAR NOT NULL,\n\
hora7  TIME NOT NULL,  amanda7 VARCHAR NOT NULL, luiz7 VARCHAR NOT NULL,  ariel7  VARCHAR NOT NULL, joice7 VARCHAR NOT NULL, adri7 VARCHAR NOT NULL,  bia7 VARCHAR NOT NULL,\n\
hora8  TIME NOT NULL,  amanda8 VARCHAR NOT NULL, luiz8 VARCHAR NOT NULL,  ariel8  VARCHAR NOT NULL, joice8 VARCHAR NOT NULL, adri8 VARCHAR NOT NULL,  bia8 VARCHAR NOT NULL,\n\
hora9  TIME NOT NULL,  amanda9 VARCHAR NOT NULL, luiz9 VARCHAR NOT NULL,  ariel9  VARCHAR NOT NULL, joice9 VARCHAR NOT NULL, adri9 VARCHAR NOT NULL,  bia9 VARCHAR NOT NULL,\n\
hora10  TIME NOT NULL,  amanda10 VARCHAR NOT NULL, luiz10 VARCHAR NOT NULL,  ariel10  VARCHAR NOT NULL, joice10 VARCHAR NOT NULL, adri10 VARCHAR NOT NULL,  bia10 VARCHAR NOT NULL,\n\
hora11  TIME NOT NULL,  amanda11 VARCHAR NOT NULL, luiz11 VARCHAR NOT NULL,  ariel11  VARCHAR NOT NULL, joice11 VARCHAR NOT NULL, adri11 VARCHAR NOT NULL,  bia11 VARCHAR NOT NULL,\n\
hora12  TIME NOT NULL,  amanda12 VARCHAR NOT NULL, luiz12 VARCHAR NOT NULL,  ariel12  VARCHAR NOT NULL, joice12 VARCHAR NOT NULL, adri12 VARCHAR NOT NULL,  bia12 VARCHAR NOT NULL,\n\
hora13  TIME NOT NULL,  amanda13 VARCHAR NOT NULL, luiz13 VARCHAR NOT NULL,  ariel13  VARCHAR NOT NULL, joice13 VARCHAR NOT NULL, adri13 VARCHAR NOT NULL,  bia13 VARCHAR NOT NULL,\n\
hora14  TIME NOT NULL,  amanda14 VARCHAR NOT NULL, luiz14 VARCHAR NOT NULL,  ariel14  VARCHAR NOT NULL, joice14 VARCHAR NOT NULL, adri14 VARCHAR NOT NULL,  bia14 VARCHAR NOT NULL,\n\
hora15  TIME NOT NULL,  amanda15 VARCHAR NOT NULL, luiz15 VARCHAR NOT NULL,  ariel15  VARCHAR NOT NULL, joice15 VARCHAR NOT NULL, adri15 VARCHAR NOT NULL,  bia15 VARCHAR NOT NULL,\n\
hora16  TIME NOT NULL,  amanda16 VARCHAR NOT NULL, luiz16 VARCHAR NOT NULL,  ariel16  VARCHAR NOT NULL, joice16 VARCHAR NOT NULL, adri16 VARCHAR NOT NULL,  bia16 VARCHAR NOT NULL,\n\
hora17  TIME NOT NULL,  amanda17 VARCHAR NOT NULL, luiz17 VARCHAR NOT NULL,  ariel17  VARCHAR NOT NULL, joice17 VARCHAR NOT NULL, adri17 VARCHAR NOT NULL,  bia17 VARCHAR NOT NULL,\n\
hora18  TIME NOT NULL,  amanda18 VARCHAR NOT NULL, luiz18 VARCHAR NOT NULL,  ariel18  VARCHAR NOT NULL, joice18 VARCHAR NOT NULL, adri18 VARCHAR NOT NULL,  bia18 VARCHAR NOT NULL,\n\
hora19  TIME NOT NULL,  amanda19 VARCHAR NOT NULL, luiz19 VARCHAR NOT NULL,  ariel19  VARCHAR NOT NULL, joice19 VARCHAR NOT NULL, adri19 VARCHAR NOT NULL,  bia19 VARCHAR NOT NULL,\n\
hora20  TIME NOT NULL,  amanda20 VARCHAR NOT NULL, luiz20 VARCHAR NOT NULL,  ariel20  VARCHAR NOT NULL, joice20 VARCHAR NOT NULL, adri20 VARCHAR NOT NULL,  bia20 VARCHAR NOT NULL,\n\
hora21  TIME NOT NULL,  amanda21 VARCHAR NOT NULL, luiz21 VARCHAR NOT NULL,  ariel21  VARCHAR NOT NULL, joice21 VARCHAR NOT NULL, adri21 VARCHAR NOT NULL,  bia21 VARCHAR NOT NULL,\n\
hora22  TIME NOT NULL,  amanda22 VARCHAR NOT NULL, luiz22 VARCHAR NOT NULL,  ariel22  VARCHAR NOT NULL, joice22 VARCHAR NOT NULL, adri22 VARCHAR NOT NULL,  bia22 VARCHAR NOT NULL,\n\
hora23  TIME NOT NULL,  amanda23 VARCHAR NOT NULL, luiz23 VARCHAR NOT NULL,  ariel23  VARCHAR NOT NULL, joice23 VARCHAR NOT NULL, adri23 VARCHAR NOT NULL,  bia23 VARCHAR NOT NULL,\n\
hora24  TIME NOT NULL,  amanda24 VARCHAR NOT NULL, luiz24 VARCHAR NOT NULL,  ariel24  VARCHAR NOT NULL, joice24 VARCHAR NOT NULL, adri24 VARCHAR NOT NULL,  bia24 VARCHAR NOT NULL,\n\
hora25  TIME NOT NULL,  amanda25 VARCHAR NOT NULL, luiz25 VARCHAR NOT NULL,  ariel25  VARCHAR NOT NULL, joice25 VARCHAR NOT NULL, adri25 VARCHAR NOT NULL,  bia25 VARCHAR NOT NULL,\n\
hora26  TIME NOT NULL,  amanda26 VARCHAR NOT NULL, luiz26 VARCHAR NOT NULL,  ariel26  VARCHAR NOT NULL, joice26 VARCHAR NOT NULL, adri26 VARCHAR NOT NULL,  bia26 VARCHAR NOT NULL,\n\
hora27  TIME NOT NULL,  amanda27 VARCHAR NOT NULL, luiz27 VARCHAR NOT NULL,  ariel27  VARCHAR NOT NULL, joice27 VARCHAR NOT NULL, adri27 VARCHAR NOT NULL,  bia27 VARCHAR NOT NULL);';
    try {
        localDB.transaction(function(transaction){
            transaction.executeSql(query, [], nullDataHandler, errorHandler);
            updateStatus("Tabela 'hair' status: OK.");
        });
    } 
    catch (e) {
        updateStatus("Erro: Data base 'hair' não criada " + e + e + e + e + e + e + e + e +   + e + e + e + e + e + e + e + e + 
                + e + e + e + e + e + e + e + e +   + e + e + e + e + e + e + e + e +    + e + e + e + e + e + e + e + e + 
                + e + e + e + e + e + e + e + e +   + e + e + e + e + e + e + e + e +  + e + e + e + e + e + e + e + e +
                + e + e + e + e + e + e + e + e +   + e + e + e + e + e + e + e + e +   + e + e + e + e + e + e + e + e + 
                + e + e + e + e + e + e + e + e +    + e + e + e + e + e + e + e + e +     + e + e + e + e + e + e + e + e + 
                  + e + e + e + e + e + e + e + e +     + e + e + e + e + e + e + e + e +     + e + e + e + e + e + e + e + e + 
                    + e + e + e + e + e + e + e + e +     + e + e + e + e + e + e + e + e +     + e + e + e + e + e + e + e + e + 
                 + e + e + e + e + e + e + e + e +     + e + e + e + e + e + e + e + e +     + e + e + e + e + e + e + e + e + 
                   + e + e + e + e + e + e + e + e +     + e + e + e + e + e + e + e + e +     + e + e + e + e + e + e + e + e + 
                     + e + e + e + e + e + e + e + e +   ".");
        return;
    }
}




//2. Query e visualização de Update


function onUpdate(){
    var id = document.itemForm.id.value;
    var data = document.itemForm.data.value;
    var dia = document.itemForm.dia.value;
    var hora1 = document.itemForm.hora1.value;    
    var amanda1 = document.itemForm.amanda1.value;
    var luiz1 = document.itemForm.luiz1.value;
    var ariel1 = document.itemForm.ariel1.value;
    var joice1 = document.itemForm.joice1.value;
    var adri1 = document.itemForm.adri1.value; 
    var bia1 = document.itemForm.bia1.value;
    
    var hora2 = document.itemForm.hora2.value;    
    var amanda2 = document.itemForm.amanda2.value;
    var luiz2 = document.itemForm.luiz2.value;
    var ariel2 = document.itemForm.ariel2.value;
    var joice2 = document.itemForm.joice2.value;
    var adri2 = document.itemForm.adri2.value; 
    var bia2 = document.itemForm.bia2.value;
    
    var hora3 = document.itemForm.hora3.value;    
    var amanda3 = document.itemForm.amanda3.value;
    var luiz3 = document.itemForm.luiz3.value;
    var ariel3 = document.itemForm.ariel3.value;
    var joice3 = document.itemForm.joice3.value;
    var adri3 = document.itemForm.adri3.value; 
    var bia3 = document.itemForm.bia3.value;
    
    var hora4 = document.itemForm.hora4.value;    
    var amanda4 = document.itemForm.amanda4.value;
    var luiz4 = document.itemForm.luiz4.value;
    var ariel4 = document.itemForm.ariel4.value;
    var joice4 = document.itemForm.joice4.value;
    var adri4 = document.itemForm.adri4.value; 
    var bia4 = document.itemForm.bia4.value;
    
     var hora5 = document.itemForm.hora5.value;    
    var amanda5 = document.itemForm.amanda5.value;
    var luiz5 = document.itemForm.luiz5.value;
    var ariel5 = document.itemForm.ariel5.value;
    var joice5 = document.itemForm.joice5.value;
    var adri5 = document.itemForm.adri5.value; 
    var bia5 = document.itemForm.bia5.value;
    
    var hora6 = document.itemForm.hora6.value;    
    var amanda6 = document.itemForm.amanda6.value;
    var luiz6 = document.itemForm.luiz6.value;
    var ariel6 = document.itemForm.ariel6.value;
    var joice6 = document.itemForm.joice6.value;
    var adri6 = document.itemForm.adri6.value; 
    var bia6 = document.itemForm.bia6.value;
    
    var hora7 = document.itemForm.hora7.value;    
    var amanda7 = document.itemForm.amanda7.value;
    var luiz7 = document.itemForm.luiz7.value;
    var ariel7 = document.itemForm.ariel7.value;
    var joice7 = document.itemForm.joice7.value;
    var adri7 = document.itemForm.adri7.value; 
    var bia7 = document.itemForm.bia7.value;
    
    var hora8 = document.itemForm.hora8.value;    
    var amanda8 = document.itemForm.amanda8.value;
    var luiz8 = document.itemForm.luiz8.value;
    var ariel8 = document.itemForm.ariel8.value;
    var joice8 = document.itemForm.joice8.value;
    var adri8 = document.itemForm.adri8.value; 
    var bia8 = document.itemForm.bia8.value;
    
    var hora9 = document.itemForm.hora9.value;    
    var amanda9 = document.itemForm.amanda9.value;
    var luiz9 = document.itemForm.luiz9.value;
    var ariel9 = document.itemForm.ariel9.value;
    var joice9 = document.itemForm.joice9.value;
    var adri9 = document.itemForm.adri9.value; 
    var bia9 = document.itemForm.bia9.value;
    
    var hora10 = document.itemForm.hora10.value;    
    var amanda10 = document.itemForm.amanda10.value;
    var luiz10 = document.itemForm.luiz10.value;
    var ariel10 = document.itemForm.ariel10.value;
    var joice10 = document.itemForm.joice10.value;
    var adri10 = document.itemForm.adri10.value; 
    var bia10 = document.itemForm.bia10.value;
    
    var hora11 = document.itemForm.hora11.value;    
    var amanda11 = document.itemForm.amanda11.value;
    var luiz11 = document.itemForm.luiz11.value;
    var ariel11 = document.itemForm.ariel11.value;
    var joice11 = document.itemForm.joice11.value;
    var adri11 = document.itemForm.adri11.value; 
    var bia11 = document.itemForm.bia11.value;
    
    var hora12 = document.itemForm.hora12.value;    
    var amanda12 = document.itemForm.amanda12.value;
    var luiz12 = document.itemForm.luiz12.value;
    var ariel12 = document.itemForm.ariel12.value;
    var joice12 = document.itemForm.joice12.value;
    var adri12 = document.itemForm.adri12.value; 
    var bia12 = document.itemForm.bia12.value;
    
     var hora13 = document.itemForm.hora13.value;    
    var amanda13 = document.itemForm.amanda13.value;
    var luiz13 = document.itemForm.luiz13.value;
    var ariel13 = document.itemForm.ariel13.value;
    var joice13 = document.itemForm.joice13.value;
    var adri13 = document.itemForm.adri13.value; 
    var bia13 = document.itemForm.bia13.value;
    
    var hora14 = document.itemForm.hora14.value;    
    var amanda14 = document.itemForm.amanda14.value;
    var luiz14 = document.itemForm.luiz14.value;
    var ariel14 = document.itemForm.ariel14.value;
    var joice14 = document.itemForm.joice14.value;
    var adri14 = document.itemForm.adri14.value; 
    var bia14 = document.itemForm.bia14.value;
    
    var hora15 = document.itemForm.hora15.value;    
    var amanda15 = document.itemForm.amanda15.value;
    var luiz15 = document.itemForm.luiz15.value;
    var ariel15 = document.itemForm.ariel15.value;
    var joice15 = document.itemForm.joice15.value;
    var adri15 = document.itemForm.adri15.value; 
    var bia15 = document.itemForm.bia15.value;
    
    var hora16 = document.itemForm.hora16.value;    
    var amanda16 = document.itemForm.amanda16.value;
    var luiz16 = document.itemForm.luiz16.value;
    var ariel16 = document.itemForm.ariel16.value;
    var joice16 = document.itemForm.joice16.value;
    var adri16 = document.itemForm.adri16.value; 
    var bia16 = document.itemForm.bia16.value;
    
    var hora17 = document.itemForm.hora17.value;    
    var amanda17 = document.itemForm.amanda17.value;
    var luiz17 = document.itemForm.luiz17.value;
    var ariel17 = document.itemForm.ariel17.value;
    var joice17 = document.itemForm.joice17.value;
    var adri17 = document.itemForm.adri17.value; 
    var bia17 = document.itemForm.bia17.value;
    
    var hora18 = document.itemForm.hora18.value;    
    var amanda18 = document.itemForm.amanda18.value;
    var luiz18 = document.itemForm.luiz18.value;
    var ariel18 = document.itemForm.ariel18.value;
    var joice18 = document.itemForm.joice18.value;
    var adri18 = document.itemForm.adri18.value; 
    var bia18 = document.itemForm.bia18.value;
    
    var hora19 = document.itemForm.hora19.value;    
    var amanda19 = document.itemForm.amanda19.value;
    var luiz19 = document.itemForm.luiz19.value;
    var ariel19 = document.itemForm.ariel19.value;
    var joice19 = document.itemForm.joice19.value;
    var adri19 = document.itemForm.adri19.value; 
    var bia19 = document.itemForm.bia19.value;
    
    var hora20 = document.itemForm.hora20.value;    
    var amanda20 = document.itemForm.amanda20.value;
    var luiz20 = document.itemForm.luiz20.value;
    var ariel20 = document.itemForm.ariel20.value;
    var joice20 = document.itemForm.joice20.value;
    var adri20 = document.itemForm.adri20.value; 
    var bia20 = document.itemForm.bia20.value;
    
    var hora21 = document.itemForm.hora21.value;    
    var amanda21 = document.itemForm.amanda21.value;
    var luiz21 = document.itemForm.luiz21.value;
    var ariel21 = document.itemForm.ariel21.value;
    var joice21 = document.itemForm.joice21.value;
    var adri21 = document.itemForm.adri21.value; 
    var bia21 = document.itemForm.bia21.value;
    
    var hora22 = document.itemForm.hora22.value;    
    var amanda22 = document.itemForm.amanda22.value;
    var luiz22 = document.itemForm.luiz22.value;
    var ariel22 = document.itemForm.ariel22.value;
    var joice22 = document.itemForm.joice22.value;
    var adri22 = document.itemForm.adri22.value; 
    var bia22 = document.itemForm.bia22.value;
    
    var hora23 = document.itemForm.hora23.value;    
    var amanda23 = document.itemForm.amanda23.value;
    var luiz23 = document.itemForm.luiz23.value;
    var ariel23 = document.itemForm.ariel23.value;
    var joice23 = document.itemForm.joice23.value;
    var adri23 = document.itemForm.adri23.value; 
    var bia23 = document.itemForm.bia23.value;
    
    var hora24 = document.itemForm.hora24.value;    
    var amanda24 = document.itemForm.amanda24.value;
    var luiz24 = document.itemForm.luiz24.value;
    var ariel24 = document.itemForm.ariel24.value;
    var joice24 = document.itemForm.joice24.value;
    var adri24 = document.itemForm.adri24.value; 
    var bia24 = document.itemForm.bia24.value;
    
    var hora25 = document.itemForm.hora25.value;    
    var amanda25 = document.itemForm.amanda25.value;
    var luiz25 = document.itemForm.luiz25.value;
    var ariel25 = document.itemForm.ariel25.value;
    var joice25 = document.itemForm.joice25.value;
    var adri25 = document.itemForm.adri25.value; 
    var bia25 = document.itemForm.bia25.value;
    
    var hora26 = document.itemForm.hora26.value;    
    var amanda26 = document.itemForm.amanda26.value;
    var luiz26 = document.itemForm.luiz26.value;
    var ariel26 = document.itemForm.ariel26.value;
    var joice26 = document.itemForm.joice26.value;
    var adri26 = document.itemForm.adri26.value; 
    var bia26 = document.itemForm.bia26.value;
    
    var hora27 = document.itemForm.hora27.value;    
    var amanda27 = document.itemForm.amanda27.value;
    var luiz27 = document.itemForm.luiz27.value;
    var ariel27 = document.itemForm.ariel27.value;
    var joice27 = document.itemForm.joice27.value;
    var adri27 = document.itemForm.adri27.value; 
    var bia27 = document.itemForm.bia27.value;
    
    
    /* na var query =   do último para where não tem virgula */
        var query = "update hair set data=?, dia=?, hora1=?, amanda1=?, luiz1=?, ariel1=?, joice1=?, adri1=?, bia1=?,\n\
           hora2=?, amanda2=?, luiz2=?, ariel2=?, joice2=?, adri2=?, bia2=?,\n\
hora3=?, amanda3=?, luiz3=?, ariel3=?, joice3=?, adri3=?, bia3=?,  hora4=?, amanda4=?, luiz4=?, ariel4=?, joice4=?, adri4=?, bia4=?,\n\
hora5=?, amanda5=?, luiz5=?, ariel5=?, joice5=?, adri5=?, bia5=?,  hora6=?, amanda6=?, luiz6=?, ariel6=?, joice6=?, adri6=?, bia6=?,\n\
hora7=?, amanda7=?, luiz7=?, ariel7=?, joice7=?, adri7=?, bia7=?,  hora8=?, amanda8=?, luiz8=?, ariel8=?, joice8=?, adri8=?, bia8=?,\n\
hora9=?, amanda9=?, luiz9=?, ariel9=?, joice9=?, adri9=?, bia9=?,  hora10=?, amanda10=?, luiz10=?, ariel10=?, joice10=?, adri10=?, bia10=?,\n\
hora11=?, amanda11=?, luiz11=?, ariel11=?, joice11=?, adri11=?, bia11=?,  hora12=?, amanda12=?, luiz12=?, ariel12=?, joice12=?, adri12=?, bia12=?,\n\
hora13=?, amanda13=?, luiz13=?, ariel13=?, joice13=?, adri13=?, bia13=?,\n\
hora14=?, amanda14=?, luiz14=?, ariel14=?, joice14=?, adri14=?, bia14=?,\n\
hora15=?, amanda15=?, luiz15=?, ariel15=?, joice15=?, adri15=?, bia15=?,\n\
hora16=?, amanda16=?, luiz16=?, ariel16=?, joice16=?, adri16=?, bia16=?,\n\
hora17=?, amanda17=?, luiz17=?, ariel17=?, joice17=?, adri17=?, bia17=?,\n\
hora18=?, amanda18=?, luiz18=?, ariel18=?, joice18=?, adri18=?, bia18=?,\n\
hora19=?, amanda19=?, luiz19=?, ariel19=?, joice19=?, adri19=?, bia19=?,\n\
hora20=?, amanda20=?, luiz20=?, ariel20=?, joice20=?, adri20=?, bia20=?,\n\
hora21=?, amanda21=?, luiz21=?, ariel21=?, joice21=?, adri21=?, bia21=?,\n\
hora22=?, amanda22=?, luiz22=?, ariel22=?, joice22=?, adri22=?, bia22=?,\n\
hora23=?, amanda23=?, luiz23=?, ariel23=?, joice23=?, adri23=?, bia23=?,\n\
hora24=?, amanda24=?, luiz24=?, ariel24=?, joice24=?, adri24=?, bia24=?,\n\
hora25=?, amanda25=?, luiz25=?, ariel25=?, joice25=?, adri25=?, bia25=?,\n\
hora26=?, amanda26=?, luiz26=?, ariel26=?, joice26=?, adri26=?, bia26=?,\n\
hora27=?, amanda27=?, luiz27=?, ariel27=?, joice27=?, adri27=?, bia27=?    where id=?;";
        try {
            localDB.transaction(function(transaction){
                transaction.executeSql(query, [data, dia, hora1, amanda1, luiz1, ariel1, joice1, adri1, bia1,
                    hora2, amanda2, luiz2, ariel2, joice2, adri2, bia2,   hora3, amanda3, luiz3, ariel3, joice3, adri3, bia3, 
                     hora4, amanda4, luiz4, ariel4, joice4, adri4, bia4,  hora5, amanda5, luiz5, ariel5, joice5, adri5, bia5,
                     hora6, amanda6, luiz6, ariel6, joice6, adri6, bia6,  hora7, amanda7, luiz7, ariel7, joice7, adri7, bia7,
                     hora8, amanda8, luiz8, ariel8, joice8, adri8, bia8,  hora9, amanda9, luiz9, ariel9, joice9, adri9, bia9,
              hora10, amanda10, luiz10, ariel10, joice10, adri10, bia10,  hora11, amanda11, luiz11, ariel11, joice11, adri11, bia11,
              hora12, amanda12, luiz12, ariel12, joice12, adri12, bia12, hora13, amanda13, luiz13, ariel13, joice13, adri13, bia13,
                    hora14, amanda14, luiz14, ariel14, joice14, adri14, bia14,  hora15, amanda15, luiz15, ariel15, joice15, adri15, bia15,
                    hora16, amanda16, luiz16, ariel16, joice16, adri16, bia16,  hora17, amanda17, luiz17, ariel17, joice17, adri17, bia17,
                    hora18, amanda18, luiz18, ariel18, joice18, adri18, bia18,  hora19, amanda19, luiz19, ariel19, joice19, adri19, bia19,
                    hora20, amanda20, luiz20, ariel20, joice20, adri20, bia20,  hora21, amanda21, luiz21, ariel21, joice21, adri21, bia21,
                    hora22, amanda22, luiz22, ariel22, joice22, adri22, bia22,  hora23, amanda23, luiz23, ariel23, joice23, adri23, bia23,
                    hora24, amanda24, luiz24, ariel24, joice24, adri24, bia24,  hora25, amanda25, luiz25, ariel25, joice25, adri25, bia25,
                    hora26, amanda26, luiz26, ariel26, joice26, adri26, bia26,  hora27, amanda27, luiz27, ariel27, joice27, adri27, bia27,  id], function(transaction, results){
                    if (!results.rowsAffected) {
                        updateStatus("Erro: Update não realizado.");
                    }
                    else {
                        updateForm("", "", "", "", "", "", "", "", "", ""  , "", "", "", "", "", "", "", "", "" 
                                , "", "", "", "", "", "", "", "", ""   , "", "", "", "", "", "", "", "", ""    , "", "", "", "", "", "", "", "", ""
                                , "", "", "", "", "", "", "", "", ""   , "", "", "", "", "", "", "", "", ""   , "", "", "", "", "", "", "", "", ""
                                , "", "", "", "", "", "", "", "", ""   , "", "", "", "", "", "", "", "", ""  , "", "", "", "", "", "", "", "", "" 
                                , "", "", "", "", "", "", "", "", ""   , "", "", "", "", "", "", "", "", ""   , "", "", "", "", "", "", "", "", "" 
                          , "", "", "", "", "", "", "", "", ""    , "", "", "", "", "", "", "", "", ""    , "", "", "", "", "", "", "", "", "" 
                                   , "", "", "", "", "", "", "", "", ""    , "", "", "", "", "", "", "", "", ""    , "", "", "", "", "", "", "", "", "" 
                              , "", "", "", "", "", "", "", "", ""    , "", "", "", "", "", "", "", "", ""    , "", "", "", "", "", "", "", "", "" 
                              , "", "", "", "", "", "", "", "", ""    , "", "", "", "", "", "", "", "", ""    , "", "", "", "", "", "", "", "", "" 
                                , "", "", "", "", "", "", "", "", ""        );
                        updateStatus("Update realizado:" + results.rowsAffected);
                        queryAndUpdateOverview();
                    }
                }, errorHandler);
            });
        } 
        catch (e) {
            updateStatus("Erro: UPDATE não realizado " + e + e + e + e + e + e + e + e +    e + e + e + e + e + e + e + e + 
                       e + e + e + e + e + e + e + e +   e + e + e + e + e + e + e + e +    e + e + e + e + e + e + e + e + 
                       e + e + e + e + e + e + e + e +   e + e + e + e + e + e + e + e +    e + e + e + e + e + e + e + e +
                       e + e + e + e + e + e + e + e +   e + e + e + e + e + e + e + e +    e + e + e + e + e + e + e + e +  
                       e + e + e + e + e + e + e + e +   e + e + e + e + e + e + e + e +    e + e + e + e + e + e + e + e + 
                        e + e + e + e + e + e + e + e +    e + e + e + e + e + e + e + e +    e + e + e + e + e + e + e + e + 
                         e + e + e + e + e + e + e + e +    e + e + e + e + e + e + e + e +    e + e + e + e + e + e + e + e + 
                          e + e + e + e + e + e + e + e +    e + e + e + e + e + e + e + e +    e + e + e + e + e + e + e + e + 
                           e + e + e + e + e + e + e + e +    e + e + e + e + e + e + e + e +    e + e + e + e + e + e + e + e + 
                            e + e + e + e + e + e + e + e +   "."); 
                    
        }
   
}

function onDelete(){
    var id = document.itemForm.id.value;
    
    var query = "delete from hair where id=?;";
    try {
        localDB.transaction(function(transaction){
        
            transaction.executeSql(query, [id], function(transaction, results){
                if (!results.rowsAffected) {
                    updateStatus("Erro: Delete não realizado.");
                }
                else {
                    updateForm("", "", "", "", "", "", "", "", "", ""   , "", "", "", "", "", "", "", "", ""  
                             , "", "", "", "", "", "", "", "", ""    , "", "", "", "", "", "", "", "", ""   , "", "", "", "", "", "", "", "", "" 
                             , "", "", "", "", "", "", "", "", ""    , "", "", "", "", "", "", "", "", ""   , "", "", "", "", "", "", "", "", ""
                             , "", "", "", "", "", "", "", "", ""    , "", "", "", "", "", "", "", "", ""  , "", "", "", "", "", "", "", "", "" 
                             , "", "", "", "", "", "", "", "", ""    , "", "", "", "", "", "", "", "", ""    , "", "", "", "", "", "", "", "", ""
                             , "", "", "", "", "", "", "", "", ""    , "", "", "", "", "", "", "", "", ""    , "", "", "", "", "", "", "", "", ""
                             , "", "", "", "", "", "", "", "", ""    , "", "", "", "", "", "", "", "", ""    , "", "", "", "", "", "", "", "", ""
                             , "", "", "", "", "", "", "", "", ""    , "", "", "", "", "", "", "", "", ""    , "", "", "", "", "", "", "", "", ""
                             , "", "", "", "", "", "", "", "", ""    , "", "", "", "", "", "", "", "", ""    , "", "", "", "", "", "", "", "", ""
                             , "", "", "", "", "", "", "", "", "");
                    updateStatus("Linhas deletadas:" + results.rowsAffected);
                    queryAndUpdateOverview();
                }
            }, errorHandler);
        });
    } 
    catch (e) {
        updateStatus("Erro: DELETE não realizado "  + e + e + e + e + e + e + e + e +     e + e + e + e + e + e + e + e +  
                  e + e + e + e + e + e + e + e +   e + e + e + e + e + e + e + e +     e + e + e + e + e + e + e + e + 
                  e + e + e + e + e + e + e + e +   e + e + e + e + e + e + e + e +   e + e + e + e + e + e + e + e +
                  e + e + e + e + e + e + e + e +   e + e + e + e + e + e + e + e +   e + e + e + e + e + e + e + e + 
                  e + e + e + e + e + e + e + e +   e + e + e + e + e + e + e + e +    e + e + e + e + e + e + e + e + 
                   e + e + e + e + e + e + e + e +    e + e + e + e + e + e + e + e +    e + e + e + e + e + e + e + e + 
                    e + e + e + e + e + e + e + e +    e + e + e + e + e + e + e + e +    e + e + e + e + e + e + e + e + 
                     e + e + e + e + e + e + e + e +   e + e + e + e + e + e + e + e +    e + e + e + e + e + e + e + e + 
                      e + e + e + e + e + e + e + e +    e + e + e + e + e + e + e + e +    e + e + e + e + e + e + e + e + 
                       e + e + e + e + e + e + e + e + ".");
    }
    
}

function onCreate(){
    var data = document.itemForm.data.value;
    var dia = document.itemForm.dia.value;
    var hora1 = document.itemForm.hora1.value;    
    var amanda1 = document.itemForm.amanda1.value;
    var luiz1 = document.itemForm.luiz1.value;
    var ariel1 = document.itemForm.ariel1.value;
    var joice1 = document.itemForm.joice1.value;
    var adri1 = document.itemForm.adri1.value; 
    var bia1 = document.itemForm.bia1.value;
    
    var hora2 = document.itemForm.hora2.value;    
    var amanda2 = document.itemForm.amanda2.value;
    var luiz2 = document.itemForm.luiz2.value;
    var ariel2 = document.itemForm.ariel2.value;
    var joice2 = document.itemForm.joice2.value;
    var adri2 = document.itemForm.adri2.value; 
    var bia2 = document.itemForm.bia2.value;    
    
    var hora3 = document.itemForm.hora3.value;    
    var amanda3 = document.itemForm.amanda3.value;
    var luiz3 = document.itemForm.luiz3.value;
    var ariel3 = document.itemForm.ariel3.value;
    var joice3 = document.itemForm.joice3.value;
    var adri3 = document.itemForm.adri3.value; 
    var bia3 = document.itemForm.bia3.value;
    
     var hora4 = document.itemForm.hora4.value;    
    var amanda4 = document.itemForm.amanda4.value;
    var luiz4 = document.itemForm.luiz4.value;
    var ariel4 = document.itemForm.ariel4.value;
    var joice4 = document.itemForm.joice4.value;
    var adri4 = document.itemForm.adri4.value; 
    var bia4 = document.itemForm.bia4.value;
    
    var hora5 = document.itemForm.hora5.value;    
    var amanda5 = document.itemForm.amanda5.value;
    var luiz5 = document.itemForm.luiz5.value;
    var ariel5 = document.itemForm.ariel5.value;
    var joice5 = document.itemForm.joice5.value;
    var adri5 = document.itemForm.adri5.value; 
    var bia5 = document.itemForm.bia5.value;
    
    var hora6 = document.itemForm.hora6.value;    
    var amanda6 = document.itemForm.amanda6.value;
    var luiz6 = document.itemForm.luiz6.value;
    var ariel6 = document.itemForm.ariel6.value;
    var joice6 = document.itemForm.joice6.value;
    var adri6 = document.itemForm.adri6.value; 
    var bia6 = document.itemForm.bia6.value;
    
    var hora7 = document.itemForm.hora7.value;    
    var amanda7 = document.itemForm.amanda7.value;
    var luiz7 = document.itemForm.luiz7.value;
    var ariel7 = document.itemForm.ariel7.value;
    var joice7 = document.itemForm.joice7.value;
    var adri7 = document.itemForm.adri7.value; 
    var bia7 = document.itemForm.bia7.value;
    
    var hora8 = document.itemForm.hora8.value;    
    var amanda8 = document.itemForm.amanda8.value;
    var luiz8 = document.itemForm.luiz8.value;
    var ariel8 = document.itemForm.ariel8.value;
    var joice8 = document.itemForm.joice8.value;
    var adri8 = document.itemForm.adri8.value; 
    var bia8 = document.itemForm.bia8.value;
    
    var hora9 = document.itemForm.hora9.value;    
    var amanda9 = document.itemForm.amanda9.value;
    var luiz9 = document.itemForm.luiz9.value;
    var ariel9 = document.itemForm.ariel9.value;
    var joice9 = document.itemForm.joice9.value;
    var adri9 = document.itemForm.adri9.value; 
    var bia9 = document.itemForm.bia9.value;
    
    var hora10 = document.itemForm.hora10.value;    
    var amanda10 = document.itemForm.amanda10.value;
    var luiz10 = document.itemForm.luiz10.value;
    var ariel10 = document.itemForm.ariel10.value;
    var joice10 = document.itemForm.joice10.value;
    var adri10 = document.itemForm.adri10.value; 
    var bia10 = document.itemForm.bia10.value;
    
    var hora11 = document.itemForm.hora11.value;    
    var amanda11 = document.itemForm.amanda11.value;
    var luiz11 = document.itemForm.luiz11.value;
    var ariel11 = document.itemForm.ariel11.value;
    var joice11 = document.itemForm.joice11.value;
    var adri11 = document.itemForm.adri11.value; 
    var bia11 = document.itemForm.bia11.value;
    
    var hora12 = document.itemForm.hora12.value;    
    var amanda12 = document.itemForm.amanda12.value;
    var luiz12 = document.itemForm.luiz12.value;
    var ariel12 = document.itemForm.ariel12.value;
    var joice12 = document.itemForm.joice12.value;
    var adri12 = document.itemForm.adri12.value; 
    var bia12 = document.itemForm.bia12.value;
    
     var hora13 = document.itemForm.hora13.value;    
    var amanda13 = document.itemForm.amanda13.value;
    var luiz13 = document.itemForm.luiz13.value;
    var ariel13 = document.itemForm.ariel13.value;
    var joice13 = document.itemForm.joice13.value;
    var adri13 = document.itemForm.adri13.value; 
    var bia13 = document.itemForm.bia13.value;
    
    var hora14 = document.itemForm.hora14.value;    
    var amanda14 = document.itemForm.amanda14.value;
    var luiz14 = document.itemForm.luiz14.value;
    var ariel14 = document.itemForm.ariel14.value;
    var joice14 = document.itemForm.joice14.value;
    var adri14 = document.itemForm.adri14.value; 
    var bia14 = document.itemForm.bia14.value;
    
    var hora15 = document.itemForm.hora15.value;    
    var amanda15 = document.itemForm.amanda15.value;
    var luiz15 = document.itemForm.luiz15.value;
    var ariel15 = document.itemForm.ariel15.value;
    var joice15 = document.itemForm.joice15.value;
    var adri15 = document.itemForm.adri15.value; 
    var bia15 = document.itemForm.bia15.value;
    
    var hora16 = document.itemForm.hora16.value;    
    var amanda16 = document.itemForm.amanda16.value;
    var luiz16 = document.itemForm.luiz16.value;
    var ariel16 = document.itemForm.ariel16.value;
    var joice16 = document.itemForm.joice16.value;
    var adri16 = document.itemForm.adri16.value; 
    var bia16 = document.itemForm.bia16.value;
    
    var hora17 = document.itemForm.hora17.value;    
    var amanda17 = document.itemForm.amanda17.value;
    var luiz17 = document.itemForm.luiz17.value;
    var ariel17 = document.itemForm.ariel17.value;
    var joice17 = document.itemForm.joice17.value;
    var adri17 = document.itemForm.adri17.value; 
    var bia17 = document.itemForm.bia17.value;
    
    var hora18 = document.itemForm.hora18.value;    
    var amanda18 = document.itemForm.amanda18.value;
    var luiz18 = document.itemForm.luiz18.value;
    var ariel18 = document.itemForm.ariel18.value;
    var joice18 = document.itemForm.joice18.value;
    var adri18 = document.itemForm.adri18.value; 
    var bia18 = document.itemForm.bia18.value;
    
    var hora19 = document.itemForm.hora19.value;    
    var amanda19 = document.itemForm.amanda19.value;
    var luiz19 = document.itemForm.luiz19.value;
    var ariel19 = document.itemForm.ariel19.value;
    var joice19 = document.itemForm.joice19.value;
    var adri19 = document.itemForm.adri19.value; 
    var bia19 = document.itemForm.bia19.value;
    
    var hora20 = document.itemForm.hora20.value;    
    var amanda20 = document.itemForm.amanda20.value;
    var luiz20 = document.itemForm.luiz20.value;
    var ariel20 = document.itemForm.ariel20.value;
    var joice20 = document.itemForm.joice20.value;
    var adri20 = document.itemForm.adri20.value; 
    var bia20 = document.itemForm.bia20.value;
    
    var hora21 = document.itemForm.hora21.value;    
    var amanda21 = document.itemForm.amanda21.value;
    var luiz21 = document.itemForm.luiz21.value;
    var ariel21 = document.itemForm.ariel21.value;
    var joice21 = document.itemForm.joice21.value;
    var adri21 = document.itemForm.adri21.value; 
    var bia21 = document.itemForm.bia21.value;
    
    var hora22 = document.itemForm.hora22.value;    
    var amanda22 = document.itemForm.amanda22.value;
    var luiz22 = document.itemForm.luiz22.value;
    var ariel22 = document.itemForm.ariel22.value;
    var joice22 = document.itemForm.joice22.value;
    var adri22 = document.itemForm.adri22.value; 
    var bia22 = document.itemForm.bia22.value;
    
    var hora23 = document.itemForm.hora23.value;    
    var amanda23 = document.itemForm.amanda23.value;
    var luiz23 = document.itemForm.luiz23.value;
    var ariel23 = document.itemForm.ariel23.value;
    var joice23 = document.itemForm.joice23.value;
    var adri23 = document.itemForm.adri23.value; 
    var bia23 = document.itemForm.bia23.value;
    
    var hora24 = document.itemForm.hora24.value;    
    var amanda24 = document.itemForm.amanda24.value;
    var luiz24 = document.itemForm.luiz24.value;
    var ariel24 = document.itemForm.ariel24.value;
    var joice24 = document.itemForm.joice24.value;
    var adri24 = document.itemForm.adri24.value; 
    var bia24 = document.itemForm.bia24.value;
    
    var hora25 = document.itemForm.hora25.value;    
    var amanda25 = document.itemForm.amanda25.value;
    var luiz25 = document.itemForm.luiz25.value;
    var ariel25 = document.itemForm.ariel25.value;
    var joice25 = document.itemForm.joice25.value;
    var adri25 = document.itemForm.adri25.value; 
    var bia25 = document.itemForm.bia25.value;
    
    var hora26 = document.itemForm.hora26.value;    
    var amanda26 = document.itemForm.amanda26.value;
    var luiz26 = document.itemForm.luiz26.value;
    var ariel26 = document.itemForm.ariel26.value;
    var joice26 = document.itemForm.joice26.value;
    var adri26 = document.itemForm.adri26.value; 
    var bia26 = document.itemForm.bia26.value;
    
    var hora27 = document.itemForm.hora27.value;    
    var amanda27 = document.itemForm.amanda27.value;
    var luiz27 = document.itemForm.luiz27.value;
    var ariel27 = document.itemForm.ariel27.value;
    var joice27 = document.itemForm.joice27.value;
    var adri27 = document.itemForm.adri27.value; 
    var bia27 = document.itemForm.bia27.value;
    
    
   if (data == "" || dia == "" ) {
        updateStatus("Erro: DATA e DIA são campos obrigatórios!");
    }
    else {
        var query = "insert into hair (data, dia, hora1, amanda1, luiz1, ariel1, joice1, adri1, bia1,\n\
 hora2, amanda2, luiz2, ariel2, joice2, adri2, bia2,  hora3, amanda3, luiz3, ariel3, joice3, adri3, bia3,\n\
 hora4, amanda4, luiz4, ariel4, joice4, adri4, bia4,   hora5, amanda5, luiz5, ariel5, joice5, adri5, bia5,\n\
 hora6, amanda6, luiz6, ariel6, joice6, adri6, bia6,  hora7, amanda7, luiz7, ariel7, joice7, adri7, bia7,\n\
 hora8, amanda8, luiz8, ariel8, joice8, adri8, bia8,  hora9, amanda9, luiz9, ariel9, joice9, adri9, bia9,\n\
 hora10, amanda10, luiz10, ariel10, joice10, adri10, bia10,   hora11, amanda11, luiz11, ariel11, joice11, adri11, bia11,\n\
 hora12, amanda12, luiz12, ariel12, joice12, adri12, bia12,  hora13, amanda13, luiz13, ariel13, joice13, adri13, bia13,\n\
                    hora14, amanda14, luiz14, ariel14, joice14, adri14, bia14,  hora15, amanda15, luiz15, ariel15, joice15, adri15, bia15,\n\
                    hora16, amanda16, luiz16, ariel16, joice16, adri16, bia16,  hora17, amanda17, luiz17, ariel17, joice17, adri17, bia17,\n\
                    hora18, amanda18, luiz18, ariel18, joice18, adri18, bia18,  hora19, amanda19, luiz19, ariel19, joice19, adri19, bia19,\n\
                    hora20, amanda20, luiz20, ariel20, joice20, adri20, bia20,  hora21, amanda21, luiz21, ariel21, joice21, adri21, bia21,\n\
                    hora22, amanda22, luiz22, ariel22, joice22, adri22, bia22,  hora23, amanda23, luiz23, ariel23, joice23, adri23, bia23,\n\
                    hora24, amanda24, luiz24, ariel24, joice24, adri24, bia24,  hora25, amanda25, luiz25, ariel25, joice25, adri25, bia25,\n\
                    hora26, amanda26, luiz26, ariel26, joice26, adri26, bia26,  hora27, amanda27, luiz27, ariel27, joice27, adri27, bia27 ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?  \n\
 ,?, ?, ?, ?, ?, ?, ?    ,?, ?, ?, ?, ?, ?, ?  ,?, ?, ?, ?, ?, ?, ?   ,?, ?, ?, ?, ?, ?, ?  ,?, ?, ?, ?, ?, ?, ?  ,?, ?, ?, ?, ?, ?, ? \n\
 ,?, ?, ?, ?, ?, ?, ?    ,?, ?, ?, ?, ?, ?, ?   ,?, ?, ?, ?, ?, ?, ?   ,?, ?, ?, ?, ?, ?, ?  ,?, ?, ?, ?, ?, ?, ?   ,?, ?, ?, ?, ?, ?, ? \n\
 ,?, ?, ?, ?, ?, ?, ?    ,?, ?, ?, ?, ?, ?, ?   ,?, ?, ?, ?, ?, ?, ?   ,?, ?, ?, ?, ?, ?, ?   ,?, ?, ?, ?, ?, ?, ?   ,?, ?, ?, ?, ?, ?, ? \n\
 ,?, ?, ?, ?, ?, ?, ?    ,?, ?, ?, ?, ?, ?, ?   ,?, ?, ?, ?, ?, ?, ?   ,?, ?, ?, ?, ?, ?, ?   ,?, ?, ?, ?, ?, ?, ?   ,?, ?, ?, ?, ?, ?, ? \n\
 ,?, ?, ?, ?, ?, ?, ?    ,?, ?, ?, ?, ?, ?, ?  );";
        try {
            localDB.transaction(function(transaction){
                transaction.executeSql(query, [data, dia, hora1, amanda1, luiz1, ariel1, joice1, adri1, bia1,
                 hora2, amanda2, luiz2, ariel2, joice2, adri2, bia2,   hora3, amanda3, luiz3, ariel3, joice3, adri3, bia3,
              hora4, amanda4, luiz4, ariel4, joice4, adri4, bia4,   hora5, amanda5, luiz5, ariel5, joice5, adri5, bia5,
          hora6, amanda6, luiz6, ariel6, joice6, adri6, bia6,  hora7, amanda7, luiz7, ariel7, joice7, adri7, bia7,
          hora8, amanda8, luiz8, ariel8, joice8, adri8, bia8,  hora9, amanda9, luiz9, ariel9, joice9, adri9, bia9,
      hora10, amanda10, luiz10, ariel10, joice10, adri10, bia10,  hora11, amanda11, luiz11, ariel11, joice11, adri11, bia11,
   hora12, amanda12, luiz12, ariel12, joice12, adri12, bia12,  hora13, amanda13, luiz13, ariel13, joice13, adri13, bia13,
                    hora14, amanda14, luiz14, ariel14, joice14, adri14, bia14,  hora15, amanda15, luiz15, ariel15, joice15, adri15, bia15,
                    hora16, amanda16, luiz16, ariel16, joice16, adri16, bia16,  hora17, amanda17, luiz17, ariel17, joice17, adri17, bia17,
                    hora18, amanda18, luiz18, ariel18, joice18, adri18, bia18,  hora19, amanda19, luiz19, ariel19, joice19, adri19, bia19,
                    hora20, amanda20, luiz20, ariel20, joice20, adri20, bia20,  hora21, amanda21, luiz21, ariel21, joice21, adri21, bia21,
                    hora22, amanda22, luiz22, ariel22, joice22, adri22, bia22,  hora23, amanda23, luiz23, ariel23, joice23, adri23, bia23,
                    hora24, amanda24, luiz24, ariel24, joice24, adri24, bia24,  hora25, amanda25, luiz25, ariel25, joice25, adri25, bia25,
                    hora26, amanda26, luiz26, ariel26, joice26, adri26, bia26,  hora27, amanda27, luiz27, ariel27, joice27, adri27, bia27], function(transaction, results){
                    if (!results.rowsAffected) {
                        updateStatus("Erro: Inserção não realizada");
                    }
                    else {
                        updateForm("", "", "", "", "", "", "", "", "", ""    , "", "", "", "", "", "", "" 
                        , "", "", "", "", "", "", ""   , "", "", "", "", "", "", ""    , "", "", "", "", "", "", ""
                        , "", "", "", "", "", "", ""   , "", "", "", "", "", "", ""    , "", "", "", "", "", "", ""
                        , "", "", "", "", "", "", ""   , "", "", "", "", "", "", ""    , "", "", "", "", "", "", ""   , "", "", "", "", "", "", "" 
                         , "", "", "", "", "", "", ""   , "", "", "", "", "", "", ""    , "", "", "", "", "", "", ""    , "", "", "", "", "", "", "" 
                          , "", "", "", "", "", "", ""    , "", "", "", "", "", "", ""    , "", "", "", "", "", "", ""    , "", "", "", "", "", "", "" 
                           , "", "", "", "", "", "", ""    , "", "", "", "", "", "", ""    , "", "", "", "", "", "", ""    , "", "", "", "", "", "", "" 
                            , "", "", "", "", "", "", ""    , "", "", "", "", "", "", ""    , "", "", "", "", "", "", ""         );
                        updateStatus("Inserção realizada, linha id: " + results.insertId);
                        queryAndUpdateOverview();
                    }
                }, errorHandler);
            });
        } 
        catch (e) {
            updateStatus("Erro: INSERT não realizado " + e + e + e + e + e + e + e + e +    + e + e + e + e + e + e + e + e +  
                    + e + e + e + e + e + e + e + e +  + e + e + e + e + e + e + e + e +    + e + e + e + e + e + e + e + e + 
                    + e + e + e + e + e + e + e + e +  + e + e + e + e + e + e + e + e +    + e + e + e + e + e + e + e + e +
                    + e + e + e + e + e + e + e + e +   + e + e + e + e + e + e + e + e +   + e + e + e + e + e + e + e + e +  
                    + e + e + e + e + e + e + e + e +   + e + e + e + e + e + e + e + e +    + e + e + e + e + e + e + e + e + 
                     + e + e + e + e + e + e + e + e +    + e + e + e + e + e + e + e + e +    + e + e + e + e + e + e + e + e + 
                      + e + e + e + e + e + e + e + e +    + e + e + e + e + e + e + e + e +    + e + e + e + e + e + e + e + e + 
                       + e + e + e + e + e + e + e + e +    + e + e + e + e + e + e + e + e +    + e + e + e + e + e + e + e + e + 
                        + e + e + e + e + e + e + e + e +    + e + e + e + e + e + e + e + e +    + e + e + e + e + e + e + e + e + 
                         + e + e + e + e + e + e + e + e + ".");
        }
    }
}

function onSelect(htmlLIElement){
	var id = htmlLIElement.getAttribute("id");
	
	query = "SELECT * FROM hair where id=?;";
    try {
        localDB.transaction(function(transaction){
        
            transaction.executeSql(query, [id], function(transaction, results){
            
                var row = results.rows.item(0);
                
                updateForm(row['id'], row['data'], row['dia'], row['hora1'], row['amanda1'], row['luiz1'], row['ariel1'],  row['joice1'], row['adri1'], row['bia1'],
                row['hora2'], row['amanda2'], row['luiz2'], row['ariel2'],  row['joice2'], row['adri2'], row['bia2'],
                row['hora3'], row['amanda3'], row['luiz3'], row['ariel3'],  row['joice3'], row['adri3'], row['bia3'],
                row['hora4'], row['amanda4'], row['luiz4'], row['ariel4'],  row['joice4'], row['adri4'], row['bia4'],
                row['hora5'], row['amanda5'], row['luiz5'], row['ariel5'],  row['joice5'], row['adri5'], row['bia5'],
                row['hora6'], row['amanda6'], row['luiz6'], row['ariel6'],  row['joice6'], row['adri6'], row['bia6'],
                row['hora7'], row['amanda7'], row['luiz7'], row['ariel7'],  row['joice7'], row['adri7'], row['bia7'],
                row['hora8'], row['amanda8'], row['luiz8'], row['ariel8'],  row['joice8'], row['adri8'], row['bia8'],
                row['hora9'], row['amanda9'], row['luiz9'], row['ariel9'],  row['joice9'], row['adri9'], row['bia9'],
                row['hora10'], row['amanda10'], row['luiz10'], row['ariel10'],  row['joice10'], row['adri10'], row['bia10'],
                row['hora11'], row['amanda11'], row['luiz11'], row['ariel11'],  row['joice11'], row['adri11'], row['bia11'],
                row['hora12'], row['amanda12'], row['luiz12'], row['ariel12'],  row['joice12'], row['adri12'], row['bia12'],
                 row['hora13'], row['amanda13'], row['luiz13'], row['ariel13'],  row['joice13'], row['adri13'], row['bia13'],
                row['hora14'], row['amanda14'], row['luiz14'], row['ariel14'],  row['joice14'], row['adri14'], row['bia14'],
                row['hora15'], row['amanda15'], row['luiz15'], row['ariel15'],  row['joice15'], row['adri15'], row['bia15'],
                row['hora16'], row['amanda16'], row['luiz16'], row['ariel16'],  row['joice16'], row['adri16'], row['bia16'],
                row['hora17'], row['amanda17'], row['luiz17'], row['ariel17'],  row['joice17'], row['adri17'], row['bia17'],
                row['hora18'], row['amanda18'], row['luiz18'], row['ariel18'],  row['joice18'], row['adri18'], row['bia18'],
                row['hora19'], row['amanda19'], row['luiz19'], row['ariel19'],  row['joice19'], row['adri19'], row['bia19'],
                row['hora20'], row['amanda20'], row['luiz20'], row['ariel20'],  row['joice20'], row['adri20'], row['bia20'],
                row['hora21'], row['amanda21'], row['luiz21'], row['ariel21'],  row['joice21'], row['adri21'], row['bia21'],
                row['hora22'], row['amanda22'], row['luiz22'], row['ariel22'],  row['joice22'], row['adri22'], row['bia22'],
                row['hora23'], row['amanda23'], row['luiz23'], row['ariel23'],  row['joice23'], row['adri23'], row['bia23'],
                row['hora24'], row['amanda24'], row['luiz24'], row['ariel24'],  row['joice24'], row['adri24'], row['bia24'],
                row['hora25'], row['amanda25'], row['luiz25'], row['ariel25'],  row['joice25'], row['adri25'], row['bia25'],
                row['hora26'], row['amanda26'], row['luiz26'], row['ariel26'],  row['joice26'], row['adri26'], row['bia26'],
               row['hora27'], row['amanda27'], row['luiz27'], row['ariel27'],  row['joice27'], row['adri27'], row['bia27']);
                
            }, function(transaction, error){
                updateStatus("Erro: " + error.code + "<br>Mensagem: " + error.message);
            });
        });
    } 
    catch (e) {
        updateStatus("Error: SELECT não realizado "  + e + e + e + e + e + e + e + e +    e + e + e + e + e + e + e + e +  
                  e + e + e + e + e + e + e + e +      e + e + e + e + e + e + e + e +     e + e + e + e + e + e + e + e + 
                  e + e + e + e + e + e + e + e +      e + e + e + e + e + e + e + e +     e + e + e + e + e + e + e + e +
                  e + e + e + e + e + e + e + e +      e + e + e + e + e + e + e + e +     e + e + e + e + e + e + e + e + 
                  e + e + e + e + e + e + e + e +      e + e + e + e + e + e + e + e +     e + e + e + e + e + e + e + e + 
                  e + e + e + e + e + e + e + e +      e + e + e + e + e + e + e + e +     e + e + e + e + e + e + e + e + 
                  e + e + e + e + e + e + e + e +      e + e + e + e + e + e + e + e +     e + e + e + e + e + e + e + e + 
                  e + e + e + e + e + e + e + e +      e + e + e + e + e + e + e + e +     e + e + e + e + e + e + e + e + 
                  e + e + e + e + e + e + e + e +      e + e + e + e + e + e + e + e +     e + e + e + e + e + e + e + e + 
                  e + e + e + e + e + e + e + e + ".");
    }
   
}

function queryAndUpdateOverview(){

	//Remove as linhas existentes para inserção das novas
    var dataRows = document.getElementById("itemData").getElementsByClassName("data");
	
    while (dataRows.length > 0) {
        row = dataRows[0];
        document.getElementById("itemData").removeChild(row);
    };
    
	//Realiza a leitura no banco e cria novas linhas na tabela.
    var query = "SELECT * FROM hair;";
    try {
        localDB.transaction(function(transaction){
        
            transaction.executeSql(query, [], function(transaction, results){
                for (var i = 0; i < results.rows.length; i++) {
                
                    var row = results.rows.item(i);
                    var li = document.createElement("li");
					li.setAttribute("id", row['id']);
                    li.setAttribute("class", "data");
                    li.setAttribute("onclick", "onSelect(this)");
                    
                    var liText = document.createTextNode("DATA : "  + row['data'] + " -/- "  +   "DIA : "  + row['dia'] );
                    li.appendChild(liText);
                    
                    document.getElementById("itemData").appendChild(li);
                }
            }, function(transaction, error){
                updateStatus("Erro: " + error.code + "<br>Mensagem: " + error.message);
            });
        });
    } 
    catch (e) {
        updateStatus("Error: SELECT não realizado " + e + e + e + e + e + e + e + e +    e + e + e + e + e + e + e + e +
                 e + e + e + e + e + e + e + e +     e + e + e + e + e + e + e + e +    e + e + e + e + e + e + e + e + 
                 e + e + e + e + e + e + e + e +   e + e + e + e + e + e + e + e +   e + e + e + e + e + e + e + e + 
                 e + e + e + e + e + e + e + e +   e + e + e + e + e + e + e + e +   e + e + e + e + e + e + e + e + 
                 e + e + e + e + e + e + e + e +    e + e + e + e + e + e + e + e +    e + e + e + e + e + e + e + e +
                   e + e + e + e + e + e + e + e +    e + e + e + e + e + e + e + e +    e + e + e + e + e + e + e + e +
                     e + e + e + e + e + e + e + e +    e + e + e + e + e + e + e + e +    e + e + e + e + e + e + e + e +
                       e + e + e + e + e + e + e + e +    e + e + e + e + e + e + e + e +    e + e + e + e + e + e + e + e +
                         e + e + e + e + e + e + e + e +    e + e + e + e + e + e + e + e +    e + e + e + e + e + e + e + e +
                           e + e + e + e + e + e + e + e +".");
    }
}

// 3. Funções de tratamento e status.

// Tratando erros

errorHandler = function(transaction, error){
    updateStatus("Erro: " + error.message);
    return true;
}

nullDataHandler = function(transaction, results){
}

// Funções de update

function updateForm(id, data, dia, hora1, amanda1, luiz1, ariel1, joice1, adri1, bia1,
hora2, amanda2, luiz2, ariel2, joice2, adri2, bia2,   hora3, amanda3, luiz3, ariel3, joice3, adri3, bia3,
 hora4, amanda4, luiz4, ariel4, joice4, adri4, bia4,   hora5, amanda5, luiz5, ariel5, joice5, adri5, bia5,
  hora6, amanda6, luiz6, ariel6, joice6, adri6, bia6,  hora7, amanda7, luiz7, ariel7, joice7, adri7, bia7,
  hora8, amanda8, luiz8, ariel8, joice8, adri8, bia8,  hora9, amanda9, luiz9, ariel9, joice9, adri9, bia9,
   hora10, amanda10, luiz10, ariel10, joice10, adri10, bia10,  hora11, amanda11, luiz11, ariel11, joice11, adri11, bia11,
    hora12, amanda12, luiz12, ariel12, joice12, adri12, bia12,  hora13, amanda13, luiz13, ariel13, joice13, adri13, bia13,
                    hora14, amanda14, luiz14, ariel14, joice14, adri14, bia14,  hora15, amanda15, luiz15, ariel15, joice15, adri15, bia15,
                    hora16, amanda16, luiz16, ariel16, joice16, adri16, bia16,  hora17, amanda17, luiz17, ariel17, joice17, adri17, bia17,
                    hora18, amanda18, luiz18, ariel18, joice18, adri18, bia18,  hora19, amanda19, luiz19, ariel19, joice19, adri19, bia19,
                    hora20, amanda20, luiz20, ariel20, joice20, adri20, bia20,  hora21, amanda21, luiz21, ariel21, joice21, adri21, bia21,
                    hora22, amanda22, luiz22, ariel22, joice22, adri22, bia22,  hora23, amanda23, luiz23, ariel23, joice23, adri23, bia23,
                    hora24, amanda24, luiz24, ariel24, joice24, adri24, bia24,  hora25, amanda25, luiz25, ariel25, joice25, adri25, bia25,
                    hora26, amanda26, luiz26, ariel26, joice26, adri26, bia26,  hora27, amanda27, luiz27, ariel27, joice27, adri27, bia27){
    document.itemForm.id.value = id;
    document.itemForm.data.value = data;
    document.itemForm.dia.value = dia;
    document.itemForm.hora1.value = hora1;
    document.itemForm.amanda1.value = amanda1;
    document.itemForm.luiz1.value = luiz1;
    document.itemForm.ariel1.value = ariel1;
    document.itemForm.joice1.value = joice1;
    document.itemForm.adri1.value = adri1;
    document.itemForm.bia1.value = bia1;
    
    document.itemForm.hora2.value = hora2;
    document.itemForm.amanda2.value = amanda2;
    document.itemForm.luiz2.value = luiz2;
    document.itemForm.ariel2.value = ariel2;
    document.itemForm.joice2.value = joice2;
    document.itemForm.adri2.value = adri2;
    document.itemForm.bia2.value = bia2;
    
    document.itemForm.hora3.value = hora3;
    document.itemForm.amanda3.value = amanda3;
    document.itemForm.luiz3.value = luiz3;
    document.itemForm.ariel3.value = ariel3;
    document.itemForm.joice3.value = joice3;
    document.itemForm.adri3.value = adri3;
    document.itemForm.bia3.value = bia3;
    
    document.itemForm.hora4.value = hora4;
    document.itemForm.amanda4.value = amanda4;
    document.itemForm.luiz4.value = luiz4;
    document.itemForm.ariel4.value = ariel4;
    document.itemForm.joice4.value = joice4;
    document.itemForm.adri4.value = adri4;
    document.itemForm.bia4.value = bia4;
    
    document.itemForm.hora5.value = hora5;
    document.itemForm.amanda5.value = amanda5;
    document.itemForm.luiz5.value = luiz5;
    document.itemForm.ariel5.value = ariel5;
    document.itemForm.joice5.value = joice5;
    document.itemForm.adri5.value = adri5;
    document.itemForm.bia5.value = bia5;
    
    document.itemForm.hora6.value = hora6;
    document.itemForm.amanda6.value = amanda6;
    document.itemForm.luiz6.value = luiz6;
    document.itemForm.ariel6.value = ariel6;
    document.itemForm.joice6.value = joice6;
    document.itemForm.adri6.value = adri6;
    document.itemForm.bia6.value = bia6;
    
    document.itemForm.hora7.value = hora7;
    document.itemForm.amanda7.value = amanda7;
    document.itemForm.luiz7.value = luiz7;
    document.itemForm.ariel7.value = ariel7;
    document.itemForm.joice7.value = joice7;
    document.itemForm.adri7.value = adri7;
    document.itemForm.bia7.value = bia7;
    
    document.itemForm.hora8.value = hora8;
    document.itemForm.amanda8.value = amanda8;
    document.itemForm.luiz8.value = luiz8;
    document.itemForm.ariel8.value = ariel8;
    document.itemForm.joice8.value = joice8;
    document.itemForm.adri8.value = adri8;
    document.itemForm.bia8.value = bia8;
    
    document.itemForm.hora9.value = hora9;
    document.itemForm.amanda9.value = amanda9;
    document.itemForm.luiz9.value = luiz9;
    document.itemForm.ariel9.value = ariel9;
    document.itemForm.joice9.value = joice9;
    document.itemForm.adri9.value = adri9;
    document.itemForm.bia9.value = bia9;
    
     document.itemForm.hora10.value = hora10;
    document.itemForm.amanda10.value = amanda10;
    document.itemForm.luiz10.value = luiz10;
    document.itemForm.ariel10.value = ariel10;
    document.itemForm.joice10.value = joice10;
    document.itemForm.adri10.value = adri10;
    document.itemForm.bia10.value = bia10;
    
    document.itemForm.hora11.value = hora11;
    document.itemForm.amanda11.value = amanda11;
    document.itemForm.luiz11.value = luiz11;
    document.itemForm.ariel11.value = ariel11;
    document.itemForm.joice11.value = joice11;
    document.itemForm.adri11.value = adri11;
    document.itemForm.bia11.value = bia11;
    
    document.itemForm.hora12.value = hora12;
    document.itemForm.amanda12.value = amanda12;
    document.itemForm.luiz12.value = luiz12;
    document.itemForm.ariel12.value = ariel12;
    document.itemForm.joice12.value = joice12;
    document.itemForm.adri12.value = adri12;
    document.itemForm.bia12.value = bia12;
    
    document.itemForm.hora13.value = hora13;
    document.itemForm.amanda13.value = amanda13;
    document.itemForm.luiz13.value = luiz13;
    document.itemForm.ariel13.value = ariel13;
    document.itemForm.joice13.value = joice13;
    document.itemForm.adri13.value = adri13;
    document.itemForm.bia13.value = bia13;
    
    document.itemForm.hora14.value = hora14;
    document.itemForm.amanda14.value = amanda14;
    document.itemForm.luiz14.value = luiz14;
    document.itemForm.ariel14.value = ariel14;
    document.itemForm.joice14.value = joice14;
    document.itemForm.adri14.value = adri14;
    document.itemForm.bia14.value = bia14;
    
    document.itemForm.hora15.value = hora15;
    document.itemForm.amanda15.value = amanda15;
    document.itemForm.luiz15.value = luiz15;
    document.itemForm.ariel15.value = ariel15;
    document.itemForm.joice15.value = joice15;
    document.itemForm.adri15.value = adri15;
    document.itemForm.bia15.value = bia15;
    
    document.itemForm.hora16.value = hora16;
    document.itemForm.amanda16.value = amanda16;
    document.itemForm.luiz16.value = luiz16;
    document.itemForm.ariel16.value = ariel16;
    document.itemForm.joice16.value = joice16;
    document.itemForm.adri16.value = adri16;
    document.itemForm.bia16.value = bia16;
    
    document.itemForm.hora17.value = hora17;
    document.itemForm.amanda17.value = amanda17;
    document.itemForm.luiz17.value = luiz17;
    document.itemForm.ariel17.value = ariel17;
    document.itemForm.joice17.value = joice17;
    document.itemForm.adri17.value = adri17;
    document.itemForm.bia17.value = bia17;
    
    document.itemForm.hora18.value = hora18;
    document.itemForm.amanda18.value = amanda18;
    document.itemForm.luiz18.value = luiz18;
    document.itemForm.ariel18.value = ariel18;
    document.itemForm.joice18.value = joice18;
    document.itemForm.adri18.value = adri18;
    document.itemForm.bia18.value = bia18;
    
    document.itemForm.hora19.value = hora19;
    document.itemForm.amanda19.value = amanda19;
    document.itemForm.luiz19.value = luiz19;
    document.itemForm.ariel19.value = ariel19;
    document.itemForm.joice19.value = joice19;
    document.itemForm.adri19.value = adri19;
    document.itemForm.bia19.value = bia19;
    
    document.itemForm.hora20.value = hora20;
    document.itemForm.amanda20.value = amanda20;
    document.itemForm.luiz20.value = luiz20;
    document.itemForm.ariel20.value = ariel20;
    document.itemForm.joice20.value = joice20;
    document.itemForm.adri20.value = adri20;
    document.itemForm.bia20.value = bia20;
    
    document.itemForm.hora21.value = hora21;
    document.itemForm.amanda21.value = amanda21;
    document.itemForm.luiz21.value = luiz21;
    document.itemForm.ariel21.value = ariel21;
    document.itemForm.joice21.value = joice21;
    document.itemForm.adri21.value = adri21;
    document.itemForm.bia21.value = bia21;
    
    document.itemForm.hora22.value = hora22;
    document.itemForm.amanda22.value = amanda22;
    document.itemForm.luiz22.value = luiz22;
    document.itemForm.ariel22.value = ariel22;
    document.itemForm.joice22.value = joice22;
    document.itemForm.adri22.value = adri22;
    document.itemForm.bia22.value = bia22;
    
    document.itemForm.hora23.value = hora23;
    document.itemForm.amanda23.value = amanda23;
    document.itemForm.luiz23.value = luiz23;
    document.itemForm.ariel23.value = ariel23;
    document.itemForm.joice23.value = joice23;
    document.itemForm.adri23.value = adri23;
    document.itemForm.bia23.value = bia23;
   
    
    document.itemForm.hora24.value = hora24;
    document.itemForm.amanda24.value = amanda24;
    document.itemForm.luiz24.value = luiz24;
    document.itemForm.ariel24.value = ariel24;
    document.itemForm.joice24.value = joice24;
    document.itemForm.adri24.value = adri24;
    document.itemForm.bia24.value = bia24;
    
    document.itemForm.hora25.value = hora25;
    document.itemForm.amanda25.value = amanda25;
    document.itemForm.luiz25.value = luiz25;
    document.itemForm.ariel25.value = ariel25;
    document.itemForm.joice25.value = joice25;
    document.itemForm.adri25.value = adri25;
    document.itemForm.bia25.value = bia25;
    
    document.itemForm.hora26.value = hora26;
    document.itemForm.amanda26.value = amanda26;
    document.itemForm.luiz26.value = luiz26;
    document.itemForm.ariel26.value = ariel26;
    document.itemForm.joice26.value = joice26;
    document.itemForm.adri26.value = adri26;
    document.itemForm.bia26.value = bia26;
    
    document.itemForm.hora27.value = hora27;
    document.itemForm.amanda27.value = amanda27;
    document.itemForm.luiz27.value = luiz27;
    document.itemForm.ariel27.value = ariel27;
    document.itemForm.joice27.value = joice27;
    document.itemForm.adri27.value = adri27;
    document.itemForm.bia27.value = bia27;
    
}

// selec o dia da semana
function diaSeg() {
   document.getElementById("dia").value = "Segunda-feira";
}

function diaTer() {
   document.getElementById("dia").value = "Terça-feira";
}

function diaQua() {
   document.getElementById("dia").value = "Quarta-feira";
}

function diaQui() {
   document.getElementById("dia").value = "Quinta-feira";
}

function diaSex() {
   document.getElementById("dia").value = "Sexta-feira";
}

function diaSab() {
   document.getElementById("dia").value = "Sabado";
}

function diaDom() {
   document.getElementById("dia").value = "Domingo";
}


//apresenta status
function updateStatus(status){
    document.getElementById('status').innerHTML = status;
}