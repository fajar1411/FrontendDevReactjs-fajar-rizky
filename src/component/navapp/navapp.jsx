import { CDropdown,CDropdownMenu,CDropdownItem,CDropdownToggle,CDropdownDivider,CButton  } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import { useState } from 'react';
function NavsApp() {
  const [visible, setVisible] = useState(false)
      return (
      
      <>
        <nav className="nav-home">
          <div className="container-nav">
            <div className="top-content">
                <section className="section-content">
                  <div className="logo">
                  <p>Restaurants</p>
                  </div>
                  <div className="content-nav">
                  <p>Lorem ipsum dolor sit amet. Lorem Ipsum Is Placeholder Text</p>
                  <p>Lorem ipsum dolor sit amet. Lorem Ipsum Is Placeholder Text</p>
                  </div>
                </section>
         
            </div>


            <div className="bot-content">
              <div className='content-kiri'>
                <label htmlFor="filter">Filter By</label>
              <input
                    type="radio"
                    value="baik"
                    name= "nilai2"
                    // checked={this.state.selectedOption === "Male"}
                    // onChange={this.onValueChange}
              />Open Now
              <CDropdown className='drop' variant="nav-item" popper={false}>
              <CDropdownToggle color="secondary">Prices</CDropdownToggle>
                <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="#">Another action</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Something else here</CDropdownItem>
                </CDropdownMenu>
            </CDropdown>

            <CDropdown  className='drop' variant="nav-item" popper={false}>
              <CDropdownToggle color="secondary">Kategori</CDropdownToggle>
                <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="#">Another action</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Something else here</CDropdownItem>
                </CDropdownMenu>
            </CDropdown>
            </div>
              <div className='content-kanan'>
              <CButton className='button' onClick={() => setVisible(true)}>Clear ALL</CButton>
              </div>
            
            </div>
       
          </div>
        </nav>
      </>
    );
  }
  
  export default NavsApp;