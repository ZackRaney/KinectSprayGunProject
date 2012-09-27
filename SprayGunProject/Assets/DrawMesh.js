// Draws aMesh with aMaterial at (0,0,0) with no rotation for one frame

var aMesh : Mesh;
var aMaterial : Material;

function Update() {
    Graphics.DrawMesh(aMesh, Vector3.zero, Quaternion.identity, aMaterial, 0);
}