 lucide.createIcons();

        function filter(e, category) {
            const items = document.querySelectorAll('.project-card');
            const buttons = document.querySelectorAll('.filter-btn');

            buttons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            items.forEach(item => {
                if (category === 'all' || item.classList.contains(category)) {
                    item.style.display = 'block';
                } else {
                item.style.display = 'none';
                }
            });
        }


        function openMedia(type, src) {
            const modal = document.getElementById('lightbox-modal');
            const content = document.getElementById('lightbox-content');
            if (type === 'pdf') {
                content.innerHTML = `<iframe src="${src}" class="w-full h-full" style="border: none;"></iframe>`;
            } else {
                content.innerHTML = `<img src="${src}" class="max-h-full max-w-full object-contain">`;
            }
            modal.classList.add('active');
        }