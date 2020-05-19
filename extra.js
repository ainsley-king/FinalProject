 var stack = d3.stack()
    .keys(["PercentResistant","PercentIntermediate","PercentSensitive"]);
 
var kleb = function(drugs)
{
    console.log(drugs)
    
    return drugs.filter(function(drugs)
            {
                if((drugs.Bacteria == "Klebsiella pneumoniae") && (drugs.Year == year))
                    {
                        return true;
                    }
                else
                    {
                        return false;
                    }
            })
}
    
var series1 = stack(kleb(drugs))