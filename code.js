/*

How to Calculate BAC

   1) Determine the total liquid ounces of alcohol consumed
        1 beer = 0.54 liquid ounces of alcohol
        1 glass of wine = 0.6 liquid ounces of alcohol
        1 shot = 0.6 liquid ounces of alcohol
        If someone drank 2 beers, their total liquid ounces is 2 * 0.54
        If someone drank 1 beer and 1 glass of wine, their total liquid ounces is 0.54 + 0.6
  2)  Multiply the result of step 1 by 7.5, which is the average alcohol absorption rate
  3)  Divide the result of step 2 by the person's weight (in pounds) to determine their BAC
  4)  From the result of step 3, subtract 0.015 for each hour since their first drink
        For example, if the person's first drink was 3 hours ago, subtract (3 * 0.015)
  5)  Round the result of step 4 to three decimal places
        For example, 0.080%
 */

$(document).ready(function(){
    $("input").addClass("input-group input-group-sm mb-3");
    $("div").addClass("d-flex justify-content-center");
    $("H6").addClass("text-center");
    $("p").hide();
    $("button").click(bacCalculator);
    function bacCalculator() {
        var beers = parseInt($('#beer').val());
        beers = 0.54 * beers;
        var wineDrank = parseInt($('#wine').val());
        wineDrank = 0.6 * wineDrank;
        var shotsDown = parseInt($('#shots').val());
        shotsDown = 0.6 * shotsDown;
        var yourWeight = parseFloat($('#pounds').val());
        var hoursSinceFirst = parseFloat($('#hours').val());
        hoursSinceFirst =  .015 * hoursSinceFirst;

        var drinkTotal = (beers + wineDrank + shotsDown) * 7.5;
        var drinkTotalPlusWeight = (drinkTotal / yourWeight);
        var display = (drinkTotalPlusWeight - hoursSinceFirst);

        $("p").show();
        $("#bac").text (display.toFixed(3));
    }
});


