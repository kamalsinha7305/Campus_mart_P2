import Profile_left_part from '../components/Profile_left_part'
import Header from '../components/Header'
import whitebag from "../assets/whitebag.png";
import ProductCard from '../components/ProductCard';

function Wishlist() {

    return (
        <>
            <div className='h-screen w-screen dark:bg-[#131313]  '>

                <Header color={"#394ff1"} textColor={"white"} bagUrl={whitebag} />
                <div className='lg:flex md:flex'>
                    <div className="hidden md:block md:w-[35%] lg:w-[28%] pt-[3.5vh] px-[2vw] pb-[2vh]  bg-[#FBFBFB]  dark:bg-[#131313]">
                        <Profile_left_part />
                    </div>
                    <div className='md:w-[65%] lg:w-[72%] flex flex-col bg-[#FBFBFB] dark:bg-[#131313]  '>
                        <div className='mx-[5.5vw] md:mx-[1.7vh] lg:mr-[3.2vw] lg:ml-[1.5vw]'>
                        <div class="justify-start text-zinc-800 lg:text-2xl dark:bg-[#131313]  font-['Poppins'] dark:text-[#D6D6D6] mb-[2vh] mt-[3vh]  lg:mt-[5.5vh] lg:mb-[2vh] text-[1.1rem] lg:font-medium ">Wishlist</div>
                        <div className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-x-4 gap-y-7 dark:bg-[#131313]">
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                        </div>

                    </div>
                    </div>
                </div>
            </div>



        </>
    )
}
export default Wishlist
