import { Menu } from './../Menu/index';


export const Header = () =>{
  return (
    <header className=" text-black w-full h-28 flex justify-around items-center">

      <h1 className='text-2xl text-nowrap select-none'>Deluna System</h1>

      <Menu />

      

    </header>
  )
}