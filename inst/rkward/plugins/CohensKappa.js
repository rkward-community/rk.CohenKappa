// this code was generated using the rkwarddev package.
// perhaps don't make changes here, but in the rkwarddev script instead!



function preprocess(is_preview){
  // add requirements etc. here
  echo("require(psych)\n");
}

function calculate(is_preview){
  // read in variables from dialog
  var data = getString("data");
  var dataWeight = getString("dataWeight");
  var nobs = getString("nobs");
  var alpha = getString("alpha");

  // the R code to be evaluated
  echo("  kappa.result <- cohen.kappa(");
  if(data) {
    echo("\n    x=" + data);  
  } else {}
  if(dataWeight) {
    echo(",\n    w=" + dataWeight);  
  } else {}
  if(nobs > 0) {
    echo(",\n    n.obs=" + nobs);  
  } else {}
  if(alpha != 0.05) {
    echo(",\n    alpha=" + alpha);  
  } else {}
  echo("\n  )\n\n");
}

function printout(is_preview){
  // printout the results
  new Header(i18n("Cohen's Kappa and weighted Kappa")).print();
  new Header(i18n("Correlation coefficients and confidence boundaries"), 3).add(i18n("Alpha level"), getValue("alpha")).add(i18n("Number of subjects"), noquote("kappa.result[[\"n.obs\"]]")).print();
  echo("rk.print(kappa.result[[\"confid\"]])\n");
  //// save result object
  // read in saveobject variables
  var saveResults = getValue("saveResults");
  var saveResultsActive = getValue("saveResults.active");
  var saveResultsParent = getValue("saveResults.parent");
  // assign object to chosen environment
  if(saveResultsActive) {
    echo(".GlobalEnv$" + saveResults + " <- kappa.result\n");
  } else {}

}

