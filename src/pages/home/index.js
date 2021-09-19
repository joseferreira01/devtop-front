
import React, { useState } from 'react';
import api from '../../services/api'
import { history } from '../../history'
import { Logout, BottomContainer } from './styles'
import Pagination from '../../Pagination/'
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Home() {
  const [language, setLanguage] = React.useState('java');
  const [githubData, setGithubData] = React.useState([])
  const [page, setPage] = React.useState(1)
  const [membersCount, setMembersCount] = React.useState()


  function handleSelectChange(event) {
    if (event !== undefined) {
      setLanguage(event.target.value);
      api.get('/repos?language=' + event.target.value + '&page=' + page).
        then((res) => {
          setGithubData(res.data.items)
          setMembersCount(res.data.total_count)
        }).catch((e) => console.log(e))
    } else {
      api.get('/repos?language=' + language + '&page=' + page).
        then((res) => {
          setGithubData(res.data.items)
          setMembersCount(res.data.total_count)
        }).catch((e) => console.log(e))
    }
  }

  function setLogout() {
    localStorage.setItem('app-token', '')
    history.push('/inicial');
  }


  return (
    <body>

      <Logout className="button" onClick={() => { setLogout() }}>Sair</Logout>

      <section >
        <h1>Rankin das Linguagens</h1>
        <div className="bg">Socin</div>
        <select className="selectColor" value={language} onChange={handleSelectChange}>
          
          <option value="javascript">JavaScript js</option>
          <option value="java">Java</option>
          <option value="php">PhP</option>
          <option value="html">HTML</option>
          <option value="css">css</option>
          <option value="c">C</option>
          <option value="C++">C++</option>
          <option value="Go">Go</option>
          <option value="python">python</option>
          
        </select>
      </section>
      <div className="container-data-git">
        <div className="row">
          {
            githubData.map((item, index) => {
              return (
                <div key={index} className='card'>
                  <img className="imggit" src={item.owner.avatar_url} />
                  <p className='nameuser'>{item.owner.login}</p>
                  <p max-length={30} className='nameProject'>{item.name}</p>
                  <p className='description'> {item.description}</p>
                  <a target="_blank" className="button" href={item.html_url}> <GitHubIcon className="svg" /> Link do repositório</a>
                </div>

              )
            })

          }
         
        </div>
        <div className="divpag">
          <BottomContainer>
            <Pagination
              currentPage={page}
              setCurrentPage={setPage}
              membersCount={membersCount}
              handle={handleSelectChange}
            />
          </BottomContainer> 
          </div>
      </div>



    </body>
  );
}
