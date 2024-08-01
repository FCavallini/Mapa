var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_Cidadesvisitadas_1 = new ol.format.GeoJSON();
var features_Cidadesvisitadas_1 = format_Cidadesvisitadas_1.readFeatures(json_Cidadesvisitadas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cidadesvisitadas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cidadesvisitadas_1.addFeatures(features_Cidadesvisitadas_1);
var lyr_Cidadesvisitadas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cidadesvisitadas_1, 
                style: style_Cidadesvisitadas_1,
                popuplayertitle: "Cidades visitadas",
                interactive: true,
    title: 'Cidades visitadas<br />\
    <img src="styles/legend/Cidadesvisitadas_1_0.png" /> Não<br />\
    <img src="styles/legend/Cidadesvisitadas_1_1.png" /> Sim<br />'
        });

lyr_GoogleTerrain_0.setVisible(true);lyr_Cidadesvisitadas_1.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_Cidadesvisitadas_1];
lyr_Cidadesvisitadas_1.set('fieldAliases', {'SN_MBE': 'SN_MBE', 'Cidade': 'Cidade', 'cod': 'cod', 'Visitado': 'Visitado', });
lyr_Cidadesvisitadas_1.set('fieldImages', {'SN_MBE': 'Range', 'Cidade': '', 'cod': 'Range', 'Visitado': 'TextEdit', });
lyr_Cidadesvisitadas_1.set('fieldLabels', {'SN_MBE': 'hidden field', 'Cidade': 'inline label - visible with data', 'cod': 'hidden field', 'Visitado': 'hidden field', });
lyr_Cidadesvisitadas_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});