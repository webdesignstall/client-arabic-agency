"use client";
import { JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, Key, SetStateAction, useState } from "react";

type Tab = {
  id: string;
  label: string;
  content: React.ReactNode;
  client: {
    title?: string;
    discription?: string;
    location?: string;
    images?: string[];
  };
}
interface TabsProps {
  aboutData: any;
}
  
const TabListAbout: React.FC<TabsProps> = ({ aboutData }) => {
    const [childrenData, setChildrenData] = useState(aboutData.find((c: { id: string; }) => c.id === "1"))
    const [images, setImages] = useState<string | undefined>("");
    const hendelOpenData = (id:string)=>{
      // @ts-ignore
      setChildrenData("")
      if(id){
          const fintData = aboutData.find((c: { id: string; }) => c.id === id)
          setChildrenData(fintData);
      }
    }
   const allImages = childrenData?.client.images;
    return (
        <div>
            <div className="flex gap-5 ">
            {
                aboutData.map((title: { id: string; label: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }) => <div key={title.id}>
                <button onClick={()=>hendelOpenData(title?.id)} className={` border-b-2 pb-2 text-lg md:text-xl lg:text-2xl font-bold ${childrenData?.id===title.id? 'border-[#23beec]':'border-white'}`}>{title.label}</button>
                </div>)
            }
            </div>
            <div className="border border-gray-500"></div>
            <div className="mt-5 md:mt-10 lg:mt-16">
            {
              childrenData?.id === '1'?
                <div className="md:grid grid-cols-2">
                  <div className="col-span-1">
                      <h1 className="text-2xl text-center md:text-start lg:text-4xl font-medium text-black">{childrenData?.client?.title}</h1>
                      <p className="text-sm md:text-lg mt-2">{childrenData?.client?.discription}</p>
                      <h1 className="text-xl text-[#B2B2B2] my-5 lg:mt-10">LOCATION: <span className="pl-4 text-black">France</span></h1>
                  </div>
                  <div className="col-span-1">
                      <img src={childrenData?.client?.location} alt="" />
                  </div>
                </div>
            : <>
              <h1 className="text-4xl font-medium text-black">{childrenData?.client?.title}</h1>
              <p className="text-xl mt-2">{childrenData?.client?.discription}</p>
              <div style={{width: '95%', margin: 'auto'}} className="pt-10 ">
                <img src={images?images: childrenData?.client?.location} alt="" className="h-[400px] w-full"/>
                <div className="flex gap-2 mt-3 justify-center flex-wrap">
                    {
                        allImages?.map((img:string , index: Key | null | undefined)=>
                        <div onClick={()=>setImages(img)} key={index} className="border rounded p-1 bg-[#FAFAFA]">
                            <img src={img} alt="" className="w-[30px] h-[20px] md:w-[130px] md:h-[50px] rounded"/>
                        </div>
                        )
                      }
                </div>

              </div>
            </>
        }
      </div>
    </div>
  );
}
export default TabListAbout;