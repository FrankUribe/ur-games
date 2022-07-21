import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

export default function Index() {
  return (
    <Layout title="Ur Games">
      <div id="urHeader">
        <h4>Juegos</h4>
      </div>
      <div id="urContent" className='p-1'>
        <Link to="/runcovid">
          <div className="card-game runcovid">
            <h2>CAMINO COVID</h2>
          </div>
        </Link>
      </div>
    </Layout>
  )
}
