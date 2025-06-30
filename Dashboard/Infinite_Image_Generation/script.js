const gallery = document.getElementById('image-gallery');
const loading = document.getElementById('loading');
const search = document.getElementById('search');


search.addEventListener('change', (e) => {
    const color = e.target.value.trim().toLowerCase();
    page = 1;
    gallery.innerHTML = '';
    fetchimage(color);
})

let page = 1;
let isLoading = false;

const fetchimage = (color = '') => {
    if (isLoading) return;
    isLoading = true;

    if (loading) loading.style.display = 'block';

    fetch(`https://api.unsplash.com/search/photos?page=${page}&per_page=15&query=dress${color ? `&color=${color}` : ''}&client_id=xMYQJ99ghw3pZTG-_JzZILXPqdJKYURSKTJj4HeJLdI
`)
        .then(res => res.json())
        .then(data => {
            const images = data.results;

            images.forEach((image, index) => {
                const imgElement = document.createElement('img');
                imgElement.src = image.urls.regular;
                imgElement.loading = 'lazy';
                imgElement.alt = image.alt_description || 'Image from Unsplash';
                imgElement.classList.add('fade-in');
                imgElement.addEventListener('click', () => {
                    window.open(image.links.html, '_blank');
                });
                gallery.appendChild(imgElement);


                setTimeout(() => {
                    imgElement.classList.add('show');
                }, index * 100);
            });

            page++;
            setTimeout(() => {
                isLoading = false;
                if (loading) loading.style.display = 'none';
            }, 1000);
        })
        .catch(err => {
            gallery.innerHTML = `
  <div style="
    text-align: center;
    font-size: 20px;
    color: #666;
  ">
    <h2>No Images Found.</h2>
  </div>
`

            loading.innerHTML = ' '
            console.error('Fetch error:', err);
            isLoading = false;
            if (loading) loading.style.display = 'none';
        });
};

fetchimage();

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 150) {
        fetchimage();
    }
});
