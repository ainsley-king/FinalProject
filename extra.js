var kleb = drugs.filter(function(drugs)
            {
                if(drugs.Bacteria == "Klebsiella pneumoniae")
                    {
                        return true;
                    }
                else
                    {
                        return false;
                    }
            })

var esch = drugs.filter(function(drugs)
            {
                if(drugs.Bacteria == "Escherichia coli")
                    {
                        return true;
                    }
                else
                    {
                        return false;
                    }
            })

var prot = drugs.filter(function(drugs)
            {
                if(drugs.Bacteria == "Proteus mirabilis")
                    {
                        return true;
                    }
                else
                    {
                        return false;
                    }
            })