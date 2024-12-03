
export const PhotoService = {
    getData() {
        return [
            {
                itemImageSrc: '/images/top1.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: '/images/top1.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria2s.jpg',
                alt: 'Description for Image 2',
                title: 'Title 2'
            },
            {
                itemImageSrc: '/images/top1.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria3s.jpg',
                alt: 'Description for Image 3',
                title: 'Title 3'
            },
            {
                itemImageSrc: '/images/top.jpeg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria4s.jpg',
                alt: 'Description for Image 4',
                title: 'Title 4'
            }
        ];
    },

    getImages() {
        return Promise.resolve(this.getData());
    }
};

