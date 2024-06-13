import PropTypes from 'prop-types';

export default function Nav({ id, name: firstName, age, img = 'image10.jpg', children }) {


        return (

                <>
                
                  <div className='container bg-white sm:w-[576]  h-full py-5 rounded-xl flex flex-col lg:flex-row  '> 

                   

                       <div className='basis-2/3 bg-white md:basis-1/2 sm:mb-4 md:mb-0' >
                         <img className='rounded-xl w-82 w-92 h-full' src='./images/login.jpg'></img>

                        </div>
                        <div  className='basis-2/3 md:basis-1/2 bg-white flex flex-col items-center py-10'>
                    
                                <h2 className='text-primary font-bold'>EDUFACTORY</h2>
                                <h3 className='font-bold'>Sign in to your account</h3>
                                <form className='flex flex-col items-center my-10 basis-1/2 w-48'>
                                      <div className='mb-4'>  
                                        <label className='block text-sm text-gray-400 mb-1'>Email Address</label>
                                        <input className='w-full bg-transparent bg-gray-100 rounded-lg px-2 py-1 border-2' type='text' placeholder='admin@gmail.com'/>
                                      </div>
                                      <div className='mb-4'>  
                                        <label className='block text-sm text-gray-400 mb-1'>Password</label>
                                        <input className='w-full bg-transparent rounded-lg px-2 py-1 border-2' type='password' placeholder='password'/>
                                      </div>
                                      <div>
                                        <button className='bg-primary w-48 px-2 py-1 text-white rounded-lg' type='submit'>Sign in</button>
                                      </div>
                                </form>
                          </div>

                        </div>
                    
                               
               

                </>
        )
}


Nav.propTypes = {
        firstName: PropTypes.bool
};