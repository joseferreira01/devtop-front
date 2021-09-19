
import React from 'react';
import api from '../../services/api'
import { history } from '../../history'
import { Logout, BottomContainer } from './styles'
import Pagination from '../../Pagination/'

export default function Home() {


  const [language, setLanguage] = React.useState('--------');
  const [githubData, setGithubData] = React.useState([])
  const [page, setPage] = React.useState(1)
  const [membersCount, setMembersCount] = React.useState()

  function handleSelectChange(event) {
    setLanguage(event.target.value);
setMembersCount(20)
    api.get('/repos?language=' + event.target.value + '&page=' + page).
      then((res) => {
        setGithubData(res.data.items)
        setMembersCount(20)
        console.log('pagia',membersCount)
       

      }).catch((e) => console.log(e))
  }


  function setLogout() {
    localStorage.setItem('app-token', '')
    history.push('/inicial');
  }


  return (
    <body>

      <Logout onClick={() => { setLogout() }}>Sair</Logout>

      <section >
        <h1>Rankin das Linguagens</h1>
        <div class="bg">Socin</div>
        <select class="selectColor" value={language} onChange={handleSelectChange}>
          <option value="javascript">------</option>
          <option value="javascript">JavaScript js</option>
          <option value="java">Java</option>
          <option value="c#">C#</option>
          <option value="php">PhP</option>
          <option value="rubi">Rubi</option>
          <option value="html">HTML</option>
          <option value="c">C</option>
          <option value="C++">C++</option>
          <option value="typecript">TypeScript</option>
          <option value="Go">Go</option>
          <option value="python">Python</option>
        </select>
      </section>
      <div className="container datagit">
        <div className="row">
          {
            githubData.map((item, index) => {
              return (
                <div key={index} className='card'>
                  <img className="imgigt" src={item.owner.avatar_url} />
                  <br />
                  <p className='nameProject '><strong>Projeto:</strong> {item.name}</p>
                  <p className='description'> {item.description}</p>
                  <a target="_blank" href={item.html_url}>Link do repositório</a>
                </div>

              )
            })

          }

        </div>
        <div className="pag">
          <BottomContainer>
            
            <Pagination currentPage={page}
             setCurrentPage={setPage} membersCount={membersCount} />
          </BottomContainer>

        </div>

      </div>



    </body>
  );
}
