import React, { useEffect } from 'react'
import Header from '../Components/Header'
import {useDispatch, useSelector} from "react-redux"
import { getUserDetails } from '../app/Actions/UserActions'
import moment from 'moment'
import { ProfileTabs } from '../Components/profileComponents/ProfileTabs'
const ProfileScreen = () => {
    window.scrollTo(0,0)

    const dispatch=useDispatch()
    
    const userLogin=useSelector((state)=>state.userLogin)
    const { error, loading, userInfo } = userLogin
    useEffect(() => {
      dispatch(getUserDetails("profile"))
    }, [dispatch])
    
  return (
      <>
          <Header />
          <div className="container mt-lg-5 mt-3">
              <div className="row align-items-start">
                  <div className="col-lg-4 p-0 shadow ">
                      <div className="author-card pb-0 pb-md-3">
                          <div className="author-card-cover"></div>
                          <div className="author-card-profile row">
                              <div className="author-card-avatar col-md-5">
                                  <img src="./images/user.png" alt="userprofileimage"/>
                              </div>
                              <div className="author-card-details col-md-7">
                                  <h5 className="author-card-name mb-2"><strong>{userInfo.name}</strong></h5><span
                                      className="author-card-position">Joined {moment(userInfo.createdAt).format('LL')}</span>
                              </div>
                          </div>
                      </div>
                      <div className="wizard pt-3 ">
                          <div className="d-flex align-items-start">
                              <div className="nav align-items-start flex-column col-12 nav-pills me-3 " id="v-pills-tab"
                                  role="tablist" aria-orientation="vertical"><button className="nav-link active" id="v-pills-home-tab"
                                      data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab"
                                      aria-controls="v-pills-home" aria-selected="true">Profile Settings</button><button
                                          className="nav-link d-flex justify-content-between" id="v-pills-profile-tab"
                                          data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab"
                                          aria-controls="v-pills-profile" aria-selected="false">Orders List<span
                                              className="badge2">1</span></button></div>
                          </div>
                      </div>
                  </div>
                  <div className="tab-content col-lg-8 pb-5 pt-lg-0 pt-3" id="v-pills-tabContent">
                      <ProfileTabs/>
                      <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                          <div className=" d-flex justify-content-center align-items-center">
                              <div className="table-responsive">
                                  <table className="table">
                                      <thead>
                                          <tr>
                                              <th>ID</th>
                                              <th>STATUS</th>
                                              <th>DATE</th>
                                              <th>TOTAL</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr className="alert-danger">
                                              <td><a href="/order/630f0922f0ac9a7fdef0f77b"
                                                  className="link">630f0922f0ac9a7fdef0f77b</a></td>
                                              <td>Not Paid</td>
                                              <td>Today at 9:09 AM</td>
                                              <td>$134.5</td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default ProfileScreen