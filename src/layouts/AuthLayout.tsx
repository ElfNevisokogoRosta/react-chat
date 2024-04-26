import {Outlet, useLocation} from 'react-router-dom';
import BaseLink from '../UI/BaseLink.tsx';

function AuthLayout() {
  const location = useLocation();
  const path = location.pathname.replace('/auth/', '');
  console.log(path);
  return (
    <section className="my-11">
      <div className="container">
        <h2 className="mb-5 text-3xl font-extrabold text-white-main">
          Welcome to Simple Chat
        </h2>
      </div>
      <div className="container md:flex md:justify-center md:gap-20">
        <div className='hidden md:flex justify-center items-center '>
          <img className='w-[440px] rounded-3xl' src="/images/auth.jpeg" alt='auth image'/>
        </div>
        <div className=' w-full max-w-[440px]'>
          <Outlet/>
        </div>

      </div>
      <div className="container text-center">
        {path !== 'register' ? (
          <div className='py-4'>
            <BaseLink variant="default" to={'register'}>
              Dont have account?
            </BaseLink>
          </div>
        ) : (
          <div>
            <BaseLink to={'login'}>Already have account?</BaseLink>
          </div>
        )}
      </div>
    </section>
  );
}

export default AuthLayout;
