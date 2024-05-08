import NavBar from "../components/Home/NavBar.tsx";
import ChatList from "../components/Chat/ChatList.tsx";

const HomePage = () => {
  return <div className='container'>
    <div className='grid grid-cols-12 gap-6 bg-white-squeeze rounded-3xl p-6 my-8'>
      <div className='col-span-2'><NavBar/></div>
      <div className='col-span-2'><ChatList/></div>
    </div>
  </div>;
};

export default HomePage;
