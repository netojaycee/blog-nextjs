'use client'
import React, {useEffect} from 'react';
import { Card } from '@material-tailwind/react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Features = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <section className="w-full relative flex flex-col  bg-primary-500 bg[url(/images/modal.png)] ">
            <Image src={"/images/section-bg.png"} height={700} width={700} className="object-cover w-[100%] h-[100%] md:mt-10 mt-20 hidden md:block rounded-xl md:absolute rounded-3xl" alt="man wearing glasses" data-aos="fade-right"/>
            <div className="flex md:flex-row flex-col-reverse md:px-20 w-full md:mt-20 mt-40 justify-between items-center py-10 relative gap-10 object-contain" >


                <div className="w-full object-fit ">
                    <Image src={"/images/modal.png"} height={700} width={700} className="object-cover rounded-3xl" alt="man wearing glasses" data-aos="fade-in"/>
                </div>
                <div className="text-left space-y-8 w-full">
                    <h1 className="font-bold text-2xl md:text-4xl text-center md:text-left text-primary" data-aos="fade-left">
                        Implement measurement-based care.
                    </h1>
                    <p className="font-normal text-base leading-10" data-aos="fade-up">
                        Our chatbot and app can administer homework and mental health assessment tests. This will help you see real-time mental health analyses of their clients, identify the acuity of your clients' presentation, determine if your interventions are working as expected, and prioritize resources accordingly.

                        <p>
                            Create and personalize your homework for clients
                            You and your clients can track symptoms and visualize results.
                            This allows your clients to document their symptoms as they happen in between their sessions with you.
                        </p>
                    </p>
                </div>
            </div>
            <div class="hr h-px bg-[#444444] w-full"></div>

            <div className="grid md:grid-cols-3 grid-cols-1 md:px-20 py-8 gap-4 ">
                <Card className='p-8 flex flex-col justify-start' data-aos="slide-up">
                <Image src={"/images/human.svg"} height={80} width={80} className="object-cover rounded-3xl" alt="man wearing glasses" />
                <h1 className="text-base py-6 font-bold text-primary">Values</h1>
                <p className='text-base font-normal'>Our values are human interaction, community, privacy, no judgment, in a positive environment.</p>
                </Card>
                <Card className='p-8 flex flex-col justify-start' data-aos="slide-in">
                <Image src={"/images/mission.svg"} height={80} width={80} className="object-cover rounded-3xl" alt="man wearing glasses" />
                <h1 className="text-base py-6 font-bold text-primary">Mission</h1>
                <p className='text-base font-normal'>To empower people to connect with each other and their therapists as accountability partners in their care.</p>
                </Card>

                <Card className='p-8 flex flex-col justify-start' data-aos="slide-left">
                <Image src={"/images/vision.svg"} height={80} width={80} className="object-cover rounded-3xl" alt="man wearing glasses" />
                <h1 className="text-base py-6 font-bold text-primary">Vision</h1>
                <p className='text-base font-normal'>To transform the world's approach to mental health using chatbot technology.</p>
                </Card>
                
            </div>
        </section>

    );
};

export default Features;
