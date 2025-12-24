import Counter from '@/components/common/Counter'
import React, { useEffect, useRef } from 'react'
import { galleries, partern, service } from '@/constant'
import { ArrowRight, Check } from 'lucide-react'
import Title from '@/components/ui/Title';


function Services() {
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            if (!cardsRef.current) return;
            cardsRef.current.forEach((card: HTMLDivElement, i: number) => {
                const rect = card.getBoundingClientRect();
                const offset = Math.max(0, 150 - rect.top);

                if (offset === 0) {
                    card.style.position = "sticky";
                    card.style.top = "150px";
                } else {
                    card.style.position = "relative";
                    card.style.top = "0px";
                }

            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center my-20 gap-10'>
                <Title h1="We build beautiful websites that showcase your creativity, attract clients, and drive sales." h2="From custom design and e-commerce integration to Google Ads management and ongoing maintenance, we provide everything you need to grow your business." />
                <div className='flex w-3/5 gap-5 justify-between items-center'>
                    <div>
                        <Counter target={15} text={"+Years"} />
                        <p>Experience in Website Development</p>
                    </div>
                    <div>
                        <Counter target={1000} text={"+"} />
                        <p>Clients Use and Love Our Products</p>
                    </div>
                    <div>
                        <Counter target={4} text={"weeks"} />
                        <p>Fast Delivery time</p>
                    </div>
                </div>
            </div>
            <div className='w-2/3  flex flex-col  gap-10'>
                {service.map((item, i) => (
                    <div key={item.id} ref={(el) => (cardsRef.current[i] = el!)} className='w-full h-120 flex bg-white justify-center items-center gap-10 shadow-2xl shadow-gray-300 p-5 rounded-md ' style={{ zIndex: service.length + item.id }}>
                        <img className='w-1/2 h-full object-cover rounded-md' src={item.imageUrl} alt="" />
                        <div className='w-1/2 h-full flex flex-col justify-center gap-7 pl-10'>
                            <p className='font-semibold text-4xl'>{item.title}</p>
                            <p className='text-gray-500 text-2xl'>{item.description}</p>
                            <ul>
                                {item.content.map((content: string, index: number) => (
                                    <p key={index} className='text-gray-800 font-semibold list-disc list-inside'><Check className="w-4 h-4 mr-2 inline text-green-600" />{content}</p>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex flex-col justify-center items-center my-20 gap-10'>
                <Title h1="What Makes Us Your Perfect Partner for the Job." h2="" />
                <div className='flex gap-10 w-4/5 justify-between'>
                    {partern.slice(0, 3).map((item) => (
                        <div key={item.id} className='flex flex-col justify-center bg-gray-100 gap-10 w-1/3 rounded-sm p-5'>
                            <div className='w-20 h-20 rounded-md flex justify-center items-center bg-white'>{item.imageUrl()}</div>
                            <p className='font-semibold text-2xl'>{item.title}</p>
                            <p className='text-gray-500 '>{item.description}</p>
                        </div>
                    ))}
                </div>
                <div className='my-10 border-2 rounded-2xl w-4/5 flex  items-center p-10 gap-10 flex-col md:flex-row '>
                    <svg  id="brxe-rodjca" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#202020"><path d="M10.025 34q-1.151 0-1.921-.77-.771-.772-.771-1.923V26.5q0-.355.238-.595a.8.8 0 0 1 .595-.238q.355 0 .595.238.238.24.238.595v4.807q0 .385.32.706.322.32.706.32h4.808q.356 0 .594.24.24.237.239.594 0 .356-.239.594a.8.8 0 0 1-.594.239zm21.282 0h-4.808a.8.8 0 0 1-.594-.239.8.8 0 0 1-.239-.594q0-.357.239-.595a.8.8 0 0 1 .594-.239h4.808q.385 0 .705-.32t.32-.706V26.5q0-.355.24-.595a.8.8 0 0 1 .594-.238q.355 0 .595.238.238.24.238.595v4.807q0 1.151-.77 1.922-.771.771-1.922.771M7.333 10.026q0-1.15.77-1.922.771-.77 1.922-.77h4.808q.356 0 .594.238.24.239.239.595 0 .356-.239.594a.8.8 0 0 1-.594.239h-4.808q-.385 0-.705.32-.32.322-.32.706v4.807q0 .357-.24.595a.8.8 0 0 1-.594.239.8.8 0 0 1-.595-.24.8.8 0 0 1-.238-.594zm26.666 0v4.807q0 .357-.238.595a.8.8 0 0 1-.595.239.8.8 0 0 1-.595-.24.8.8 0 0 1-.238-.594v-4.807q0-.385-.32-.706-.321-.32-.706-.32h-4.808a.8.8 0 0 1-.594-.239.8.8 0 0 1-.239-.594q0-.357.239-.595a.8.8 0 0 1 .594-.239h4.808q1.151 0 1.921.771.771.771.771 1.922M20.73 29.352q.555 0 .934-.38a1.27 1.27 0 0 0 .38-.934q0-.554-.38-.934a1.27 1.27 0 0 0-.934-.38q-.554 0-.934.38a1.27 1.27 0 0 0-.38.934q0 .555.38.935t.934.38m0-15.82q1.276 0 2.2.81.925.812.925 2.046 0 .894-.524 1.628-.525.735-1.2 1.327-1.084.99-1.614 1.844a4.14 4.14 0 0 0-.614 1.87.63.63 0 0 0 .193.557q.233.228.57.229a.8.8 0 0 0 .566-.224.94.94 0 0 0 .29-.562q.115-.708.5-1.265.384-.558 1.208-1.382 1.266-1.266 1.745-2.13t.48-1.92q0-1.93-1.305-3.155t-3.356-1.224q-1.419 0-2.598.642-1.178.643-1.886 1.867a.67.67 0 0 0-.036.588q.116.313.434.425.285.112.607.016t.527-.362a5 5 0 0 1 1.271-1.168 2.94 2.94 0 0 1 1.617-.457"></path></svg>
                    <div className='flex flex-col gap-4 '>
                        <p className='font-semibold text-2xl mb-2'>Ready to Elevate Your Online Presence?</p>
                        <p className='text-gray-500  '>Contact us today to discuss your project and discover how our web design and SEO services can help your creative business thrive in the digital world.</p>
                    </div>
                    <div>
                        <button className='text-center rounded-full bg-black w-50 text-white  gap-2 px-4 py-4 flex justify-center items-center'>Contact Us <ArrowRight/></button>
                    </div>
                </div>
                
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Services