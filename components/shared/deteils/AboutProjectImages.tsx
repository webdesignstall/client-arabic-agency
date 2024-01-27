"use client";
import { useState } from "react";

type images = {
    id: string;
    photo: string;
    title: string;
  };
interface AboutImages {
    aboutImages: images[];
  }
const AboutProjectImags: React.FC<AboutImages> = ({aboutImages})=> {
    const [image, setImages] = useState(aboutImages.find(image => image.id === '1'))
    return (
        <div className="mt-5">
            <div style={{width: '80%', margin: 'auto'}}>
                <img src={image?.photo} alt="" className="h-[300px] md:h-[500px] w-full"/>
                <h1 className="my-3 text-center text-[#B2B2B2] text-xl">{image?.title}</h1>
            </div>
            <div>
                <div className="flex gap-3 justify-center mt-3">
                    {
                        aboutImages.map(img => <div onClick={(()=>setImages(img))} key={img.id} className="border p-2 rounded ">
                            <img src={img.photo} alt="" className="w-[100px] h-[40px] md:h-[60px]"/>
                        </div>)
                    }
                </div>
                <h1 className="text-center mt-5 text-3xl font-bold text-[#535353] ">{image?.id}/{aboutImages.length}</h1>
            </div>
        </div>
    );
}
export default AboutProjectImags;