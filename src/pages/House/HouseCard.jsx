import { AiOutlineHeart } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
const HouseCard = ({ item }) => {
    const { name, location, price, image } = item;

    return (
        <section className="container">
            <div className="card h-full shadow-xl bg-white">
                <figure><img className="" src={image} alt="image" />

                </figure>

                <p className='absolute left-2 bg- text-blue-500 bg-white rounded-full p-2 m-4 '>For Rent</p>
                <div className='absolute right-2 text-blue-900 bg-gray-100 rounded-full text-white p-3 m-4'>
                    <AiOutlineHeart></AiOutlineHeart>
                </div>


                <div className="card-body">
                    <div className='flex mt-1'>
                    <CiLocationOn className='text-2xl text-red-700'></CiLocationOn>
                    <p>{location}</p>
                    </div>
                    <h2 className="card-title">{name}</h2>
                    <div className="flex justify-between">
                        <h2 className="text-xl text-blue-700">${price}<small className="bg-none">/month</small></h2>

                        <div className="card-actions justify-end">

                            <button className="btn btn-outline btn-info rounded-full">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HouseCard;