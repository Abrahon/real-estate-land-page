import { useEffect} from "react";
import HouseCard from "../House/HouseCard";


const CityTab = ({ items }) => {
    // const [noOfElement,setNoElement] = useState(4)
    // const slicedItems =  items.slice(0,6);

    useEffect(() => {
        fetch('city.json')
            .then(res => res.json())
            .then(data => (data))

    }, [])
    return (
        <section className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
            
                {
                    items?.map((item) => <HouseCard
                        key={item._id}
                        item={item}
                    ></HouseCard>)
                }
            </div>
           
        </section>
    );
};

export default CityTab;