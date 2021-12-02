function init() {
    var selector = d3.select("#selDataset");

    d3.json("samples1.json").then((data) => {
        console.log(data);
        var sampleNames = data.wine_id;
        var i = 0;
        sampleNames.forEach((sample) => {
            selector
                .append("option")
                .text(sample)
                .property("value", i);
            i++;
        });
    })
}


init();


function optionChanged(newSample) {
    buildMetadata(newSample);
}

function buildMetadata(index) {
    d3.json("samples1.json").then((data) => {

        if (index == "") {
            d3.select("#ID").property("value", "");
            d3.select("#FixedAcidity").property("value", "");
            d3.select("#VolatileAcidity").property("value", "");
            d3.select("#CitricAcid").property("value", "");
            d3.select("#ResidualSugar").property("value", "");
            d3.select("#Chlorides").property("value", "");
            d3.select("#FSulfurDioxide").property("value", "");
            d3.select("#TSulfurDioxide").property("value", "");
            d3.select("#Density").property("value", "");
            d3.select("#pH").property("value", "");
            d3.select("#Sulphates").property("value", "");
            d3.select("#Alcohol").property("value", "");
            d3.select("#Quality").property("value", "");
            
        }
        else {

            var wine_id = data.wine_id;
            var result_wine_id = wine_id[index];
            d3.select("#ID").property("value", result_wine_id);

            var fixed_acidity = data.fixed_acidity;
            var result_fixed_acidity = fixed_acidity[index];
            d3.select("#FixedAcidity").property("value", result_fixed_acidity);

            var volatile_acidity = data.volatile_acidity;
            var result_volatile_acidity = volatile_acidity[index];
            d3.select("#VolatileAcidity").property("value", result_volatile_acidity);

            var citric_acid = data.citric_acid;
            var result_citric_acid = citric_acid[index];
            d3.select("#CitricAcid").property("value", result_citric_acid);

            var residual_sugar = data.residual_sugar;
            var result_residual_sugar = residual_sugar[index];
            d3.select("#ResidualSugar").property("value", result_residual_sugar);

            var chlorides = data.chlorides;
            var result_chlorides = chlorides[index];
            d3.select("#Chlorides").property("value", result_chlorides);

            var free_sulfur_dioxide = data.free_sulfur_dioxide;
            var result_free_sulfur_dioxide = free_sulfur_dioxide[index];
            d3.select("#FSulfurDioxide").property("value", result_free_sulfur_dioxide);

            var total_sulfur_dioxide = data.total_sulfur_dioxide;
            var result_total_sulfur_dioxide = total_sulfur_dioxide[index];
            d3.select("#TSulfurDioxide").property("value", result_total_sulfur_dioxide);

            var density = data.density;
            var result_density = density[index];
            d3.select("#Density").property("value", result_density);

            var pH = data.pH;
            var result_pH = pH[index];
            d3.select("#pH").property("value", result_pH);

            var sulphates = data.sulphates;
            var result_sulphates = sulphates[index];
            d3.select("#Sulphates").property("value", result_sulphates);

            var alcohol = data.alcohol;
            var result_alcohol = alcohol[index];
            d3.select("#Alcohol").property("value", result_alcohol);

            var quality = data.quality;
            var result_quality = quality[index];
            d3.select("#Quality").property("value", result_quality);
        }
    });
}