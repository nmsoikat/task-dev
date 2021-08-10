const dev:boolean =  process.env.NODE_ENV !== 'production';

const rootURL:string = dev ? 'http://localhost:3000' : 'https://task-dev-saykat1.vercel.app'

export default rootURL;