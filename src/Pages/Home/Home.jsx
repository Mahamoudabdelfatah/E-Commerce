import CategoriesList from '../../Components/CategoriesList/CategoriesList';
import Carousell from '../../Components/Carousel/Carousell'
import RecentProducts from '../RecentProducts/RecentProducts';

function Home() {
  return (
    <>
      <div className="container mx-auto px-4 mt-6">
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>

          {/* Categories Sidebar */}
          <div className="lg:col-span-1  lg:block">
            <div className="sticky top-24">
              <CategoriesList />
            </div>
          </div>

          {/* Carousel */}
          <div className='lg:col-span-3'>
            <Carousell />
          </div>
        </div>
      </div>

      <RecentProducts />
    </>
  )
}

export default Home


