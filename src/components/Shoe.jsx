import Next from "./Next";
import Previous from "./Previous";
import { useState } from 'react';

const Shoe = ({ showLightbox,setShowLightbox,showImg,setShowImg }) => { 
    
    const [images] = useState([
        {
            img: '/images/image-product-1.jpg'
        },
        {
            img: '/images/image-product-2.jpg'
        },
        {
            img: '/images/image-product-3.jpg'
        },
        {
            img: '/images/image-product-4.jpg'
        }
    ]);

    const data = images.map((image) => {
        return image.img;
    });

   const [active,setActive] = useState(0);
   const goNext = (id) => {
        if(active < 3) {
            setShowImg(data[id + active]);
            setActive(active + 1); 
        } 
    } 
   const goPrevious = (id) => {
       if(active >= 1) {
            setShowImg(data[active - id]);
            setActive(active - 1);
       }
   }
    
    let changeClass1,changeClass2,changeClass3,changeClass4 = "";
    if(showImg === '/images/image-product-1.jpg') {
        changeClass1 = "thumb-cover1 rounded-xl w-16 h-16 overflow-hidden cursor-pointer";
    } else {
        changeClass1 = "thumbnail-img1 rounded-xl w-16 h-16 overflow-hidden cursor-pointer"
    }

    if(showImg === '/images/image-product-2.jpg') {
        changeClass2 = "thumb-cover2 rounded-xl w-16 h-16 overflow-hidden cursor-pointer";
    } else {
        changeClass2 = "thumbnail-img2 rounded-xl w-16 h-16 overflow-hidden cursor-pointer"
    }

    if(showImg === '/images/image-product-3.jpg') {
        changeClass3 = "thumb-cover3 rounded-xl w-16 h-16 overflow-hidden cursor-pointer";
    } else {
        changeClass3 = "thumbnail-img3 rounded-xl w-16 h-16 overflow-hidden cursor-pointer"
    }

    if(showImg === '/images/image-product-4.jpg') {
        changeClass4 = "thumb-cover4 rounded-xl w-16 h-16 overflow-hidden cursor-pointer";
    } else {
        changeClass4 = "thumbnail-img4 rounded-xl w-16 h-16 overflow-hidden cursor-pointer"
    }

    return (
        <div className="h-full w-full md:overflow-hidden col-span-1 flex items-center justify-center">
            <div className="md:mt-10 mt-0">
                <div className="relative">
                    <span onClick={() => goPrevious(1)} className="md:hidden absolute left-5 top-1/2 bg-white rounded-full h-10 w-10 flex items-center justify-center"><Previous /></span>
                    <img onClick={() => setShowLightbox(!showLightbox)} className="md:w-96 md:h-96 w-full object-cover md:rounded-xl cursor-pointer" src={showImg} alt="image1" />
                    <span onClick={() => goNext(1)} className="md:hidden absolute right-5 top-1/2 bg-white rounded-full h-10 w-10 flex items-center justify-center z-0"><Next /></span>
                </div>
                <section className="md:flex w-full justify-between gap-2 mt-5 hidden">
                    {/* Thumbnails */}
                    <div onClick={() => setShowImg('/images/image-product-1.jpg')} className={ `${changeClass1} hover-thumb1` }>
                        
                    </div>
                    <div onClick={() => setShowImg('/images/image-product-2.jpg')} className={ `${changeClass2} hover-thumb2` }>
                        
                    </div>
                    <div onClick={() => setShowImg('/images/image-product-3.jpg')} className={ `${changeClass3} hover-thumb3` }>
                        
                    </div>
                    <div onClick={() => setShowImg('/images/image-product-4.jpg')} className={ `${changeClass4} hover-thumb4` }>
                        
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Shoe
