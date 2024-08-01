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
var format_KRG5000_1 = new ol.format.GeoJSON();
var features_KRG5000_1 = format_KRG5000_1.readFeatures(json_KRG5000_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KRG5000_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KRG5000_1.addFeatures(features_KRG5000_1);
var lyr_KRG5000_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KRG5000_1, 
                style: style_KRG5000_1,
                popuplayertitle: "KRG5000",
                interactive: true,
                title: '<img src="styles/legend/KRG5000_1.png" /> KRG5000'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_KRG5000_1.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_KRG5000_1];
lyr_KRG5000_1.set('fieldAliases', {'SN_KRG': 'SN_KRG', 'KRG': 'KRG', });
lyr_KRG5000_1.set('fieldImages', {'SN_KRG': '', 'KRG': '', });
lyr_KRG5000_1.set('fieldLabels', {'SN_KRG': 'no label', 'KRG': 'inline label - always visible', });
lyr_KRG5000_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});