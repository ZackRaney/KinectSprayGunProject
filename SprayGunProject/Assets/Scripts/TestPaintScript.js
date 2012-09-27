function Start () {
    // Create a new texture and assign it to the renderer's material
    var texture = new Texture2D(128, 128);
    renderer.material.mainTexture = texture;

    // Fill the texture with Sierpinski's fractal pattern!

            texture.SetPixel (64, 64, Color.green);
            texture.Apply();

    // Apply all SetPixel calls
    
}