import Profile_left_part from  '../components/Profile_left_part'
import Header from '../components/Header'
function Wishlist(){

    return(
        <>
          <Header color={"#394ff1"} textColor={"white"} />
         <div className='lg:flex md:flex'>
                <div className="hidden md:block md:w-[35%] lg:w-[28%] pt-[3.5vh] px-[2vw] pb-[2vh]  bg-[#FBFBFB]  dark:bg-[#131313]">
                    <Profile_left_part />
                </div>
                <div className='md:w-[65%] lg:w-[72%] flex flex-col bg-[#FBFBFB] '>

                   
                </div>
            </div>
 
        

        </>
    )
}
 export default Wishlist
