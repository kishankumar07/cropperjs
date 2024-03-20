let image = document.getElementById('image');
let cropper = new Cropper(image,{
    aspectRatio:0,
});

document.querySelector('#btn-crop').addEventListener('click',function(){
    var croppedImage = cropper.getCroppedCanvas().toDataURL('image/png');
    document.getElementById('output').src = croppedImage;
    document.querySelector('.cropped-container').style.display = 'flex';
})