import React from "react";

function index() {
  return (
    <>
      <div className="ncgContain">
        <div className="childNcg">
          <div className="image">
            <p>Image Format</p>
            <div className="subContentNcg">
            <p>: </p>
              <select>
                <option value="default">Image Format</option>
                <option value="png">png</option>
                <option value="jpg">jpg</option>
                <option value="jpeg">jpeg</option>
              </select>
            </div>
          </div>
          <div className="image">
            <p>Image width in px</p>
            <div className="subContentNcg">
              <p>: </p>
              <input type="number" placeholder="0 px" />
            </div>
          </div>
          <div className="image">
            <p>Image height in px</p>
            <div className="subContentNcg">
              <p>: </p>
              <input type="number" placeholder="0 px" />
            </div>
          </div>
          <div className="image">
            <p>Number of NFT</p>
            <div className="subContentNcg">
              <p>: </p>
              <input type="number" placeholder="0" />
            </div>
          </div>
          <div className="image">
            <p>Metadata Standard</p>
            <div className="subContentNcg">
            <p>: </p>
              <select>
                <option value="default">Select</option>
                <option value="png">png</option>
                <option value="jpg">jpg</option>
                <option value="jpeg">jpeg</option>
              </select>
            </div>
          </div>
          <div className="image">
            <p>Collection Name</p>
            <div className="subContentNcg">
              <p>: </p>
              <input type="number" placeholder="Enter name here" />
            </div>
          </div>
          <div className="image">
            <p>Collection Description</p>
            <div className="subContentNcg">
              <p>: </p>
              <input type="number" placeholder="Enter description here" />
            </div>
          </div>
        </div>
        <div className="buttonNcg">
          <button className="green-button">Preview NFT</button>
          <button className="green-button2">Generate NFT Collection</button>
        </div>
      </div>
    </>
  );
}

export default index;
