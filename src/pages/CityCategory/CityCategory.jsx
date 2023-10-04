import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CityTab from "../CityTab/CityTab";
import City from '../../../public/city.json'


const CityCategory = () => {
    const categories = ['mumbai','paris', 'new york', 'london'];
    const {category} = useParams()
    const initialIndex = categories.indexOf(category)

    const [tabIndex, setTabIndex] = useState(initialIndex)

    const london = City?.filter(item => item.category === 'london');
    const new_york = City?.filter(item => item.category === 'new york');
    const mumbai = City?.filter(item => item.category === 'mumbai');
    const paris = City?.filter(item => item.category === 'paris');
    
    return (
        <div className="my-10">
              <Tabs  selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className={({isActive}) => isActive? "btn btn-info rounded-full":"btn btn-white "}>
                    <Tab>Mumbai</Tab>
                    <Tab >Paris</Tab>
                    <Tab>New York</Tab>
                    <Tab>London</Tab>
                </TabList>
                <TabPanel>
                    <CityTab items={mumbai}></CityTab>
                </TabPanel>
                <TabPanel>
                <CityTab items={paris}></CityTab>
                </TabPanel>
                <TabPanel>
                <CityTab items={new_york}></CityTab>
                </TabPanel>
                <TabPanel>
                <CityTab items={london}></CityTab>
                </TabPanel>
              
                
            </Tabs>
           <div className="flex justify-center">
           <Link> <button className="btn btn-outline btn-wide bg-blue-500 rounded-full">Show more</button></Link>
           </div>
        </div>
    );
};

export default CityCategory;