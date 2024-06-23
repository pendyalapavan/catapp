function switchOff() {
    document.getElementById("bulbImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
     document.getElementById("catImage").src= "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
     document.getElementById("switchStatus").textContent="SWITCHED OFF";
     document.getElementById("OnSwitch").style.backgroundColor="green";
     document.getElementById("OffSwitch").style.backgroundColor="#cbd2d9";
}

function switchOn(){
    document.getElementById("bulbImage").src= "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switchStatus").textContent="SWITCHED ON";
    document.getElementById("OnSwitch").style.backgroundColor="#cbd2d9";
    document.getElementById("OffSwitch").style.backgroundColor="red";
}

