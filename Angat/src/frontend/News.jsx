import { useState } from 'react'
import angatLogo from '../assets/img/logo.svg'
import banner from '../assets/img/banner.png'
import './components/header'
import Header from './components/header'
import Footer from './components/footer'
import NewsItem from './components/newsitem'

function News() {
  const [count, setCount] = useState(0)

  return (
    <> 
            <div className="w-full lg:w-7/10 px-4 sm:px-16 py-10 mx-auto bg-base-200">
                <div className="flex flex-row justify-between">
                    <div className="text-3xl font-bold">
                        News
                    </div>
                    <div className='flex gap-2'>
                        <div className='btn btn-primary'>
                            Add
                        </div>
                        <div className='btn btn-primary'>
                            Pending
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col pt-4 gap-4">
                    <NewsItem
                    title='Neglected cellphone charger seen as possible trigger of Makati fire, 1 deadNeglected cellphone charger seen as possible trigger of Makati fire, 1 dead'
                    date='January 3'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ullamcorper ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ullamcorper ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ullamcorper ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ullamcorper ipsum.   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ullamcorper ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ullamcorper ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            '/>
                </div>
             
            </div>

          

    </>
  )
}

export default News
