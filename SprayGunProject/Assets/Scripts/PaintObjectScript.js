//set this in inspector
var paintGunRadius:int;

//squared variables for the painting
var rayLocYSqu:int;
var paintGunRadiusSqu:int;
var addedRadSqu:int;
var texture:Texture2D;
var finalPaintLoc:int;

var testCounter:int;

function Start () {
	texture = new Texture2D(128, 128);	
	renderer.material.mainTexture = texture;
	Paint(60,60);
    //texture.Apply();
}

//Function that actually paints the object
function Paint (rayLocX, rayLocY) {

	
	
	for(y = rayLocY + paintGunRadius ; y > rayLocY; y--){
		for (x = PaintPointFinder(rayLocY) ; x > rayLocX - PaintPointFinder(rayLocY) - PaintPointFinder(rayLocY) ; x--){    //the greater than part needs fixed
			texture.SetPixel (x, y, Color.black);	
			testCounter++;
			//Debug.Log(testCounter);
		}
	}
	texture.Apply();
}

//point finding function for x
function PaintPointFinder(rayLocY){

	rayLocYSqu = rayLocY * rayLocY;
	paintGunRadiusSqu = paintGunRadius * paintGunRadius;
	addedRadSqu = rayLocYSqu + paintGunRadiusSqu;
	finalPaintLoc = Mathf.Sqrt(addedRadSqu);
	Debug.Log(finalPaintLoc);
	return finalPaintLoc;
}

function OnGUI(){
	var x:int = 0;
	if (GUI.Button(Rect(10,10,50,50),"click")){
		texture.SetPixel (x, 0, Color.black);
		x++;
		texture.Apply();
		}
}