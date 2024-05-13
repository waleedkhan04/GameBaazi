import React from "react";
import Navbar from "../components/Navbar";
import withAuth from "../components/withAuth";

function Settings() {
  return (
    <>
      <Navbar />
      <div className="container py-5 text-white">
        <div className="row justify-content-center">
          <div className="col-md-6 centered-div">
            <h2>Change Password</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="oldPassword" className="form-label">
                  Old Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="oldPassword"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="newPassword" className="form-label">
                  New Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="newPassword"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Change Password
              </button>
            </form>
          </div>
          <div className="col-md-6 centered-div">
            <h2>Preferences</h2>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="genre"
                id="action"
                value="action"
              />
              <label className="form-check-label" htmlFor="action">
                Action
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="genre"
                id="adventure"
                value="adventure"
              />
              <label className="form-check-label" htmlFor="adventure">
                Adventure
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="genre"
                id="horror"
                value="horror"
              />
              <label className="form-check-label" htmlFor="horror">
                Horror
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="genre"
                id="survival"
                value="survival"
              />
              <label className="form-check-label" htmlFor="survival">
                Survival
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="genre"
                id="fps"
                value="fps"
              />
              <label className="form-check-label" htmlFor="fps">
                FPS
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="genre"
                id="sports"
                value="sports"
              />
              <label className="form-check-label" htmlFor="sports">
                Sports
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="genre"
                id="multiplayer"
                value="multiplayer"
              />
              <label className="form-check-label" htmlFor="multiplayer">
                Multiplayer
              </label>
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default withAuth(Settings);
