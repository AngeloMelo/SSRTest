import NasaImg from '../components/nasaimg'
import Layout from '../components/layout'
import Fetch from 'isomorphic-unfetch'

const Index = (props) => (
    <Layout>
        <div>
            <NasaImg imgProps={props} />
        </div>
    </Layout>
)

Index.getInitialProps = async () =>{
	const nasaAPiKey = '<MY_NASA_KEY>';
    const endpoint = `https://api.nasa.gov/planetary/apod?api_key=${nasaAPiKey}`
    const res = await Fetch(endpoint)
    const json = await res.json()
    json.imgurl = json.url;
    delete json.url;
    return json;
}

export default Index