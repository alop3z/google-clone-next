import Image from 'next/image'
import Avatar from './Avatar'
import {useRouter} from 'next/router'
import {useRef} from 'react'
import {XIcon, MicrophoneIcon, SearchIcon} from '@heroicons/react/solid'
import HeaderOptions from './HeaderOptions'

const Header = () => {
    const router = useRouter()
    const searchInputRef = useRef(null)

    const search = (e) => {
        e.preventDefault()
        const term = searchInputRef.current.value

        if(!term) return

        router.push(`search?term=${term}`)
    }

    return (
        <header className='sticky top-0 bg-white'>
            <div className='flex w-full p-6 items-center'>
                <Image src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' height={40} width={120} className='cursor-pointer' onClick={() => router.push("/")} />  

                <form className='flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center'>
                    <input className='flex-grow w-full focus:outline-none' ref={searchInputRef} type='text' />
                    <XIcon
                    className='h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125' 
                    onClick={() =>{searchInputRef.current.value=''}} 
                    />
                    <MicrophoneIcon className='mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300' />
                    <SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex'/>
                    <button hidden type='submit' onClick={search}>Search</button>
                </form> 
                <Avatar
                    url='https://scontent-iad3-2.xx.fbcdn.net/v/t1.18169-9/15894995_1716510618374453_942814852952633069_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=jz5jcCkIhNcAX942cif&_nc_ht=scontent-iad3-2.xx&oh=3f920da1a57d2e1a5f46d0d3b0c117a2&oe=60954F92'
                    className='ml-auto' 
                />
            </div>

            {/* Header Options */}
            <HeaderOptions />
         
        </header>
    )
}

export default Header
