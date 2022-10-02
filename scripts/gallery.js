const gallery = document.querySelector('#gallery-container')
gallery.innerHTML = ""

for (let i = 1; i <= 11; i++) {
  gallery.innerHTML += `
    <div class="card">
      <a href="images/fi_ds_pics/ds_${i}.jpg" data-toggle="lightbox" data-gallery="da-gallery">
        <img class="img-fluid" src="images/fi_ds_pics/ds_${i}.jpg" alt="Gallery Image ${i}"/>
      </a>
    </div>
  `
}