import React from "react";
import "../css/upload.css";

export const Upload = () => {
  return (
    <div class="container">
      <h2>House Sale Form</h2>
      <form id="house-form">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div class="form-group">
          <label for="contact">Contact Number:</label>
          <input type="tel" id="contact" name="contact" required />
        </div>
        <div class="form-group">
          <label for="building">Building Name:</label>
          <input type="text" id="building" name="building" required />
        </div>
        <div class="form-group">
          <label for="floor">Floor:</label>
          <input type="text" id="floor" name="floor" required />
        </div>
        <div class="form-group">
          <label for="area">Area:</label>
          <input type="text" id="area" name="area" required />
        </div>
        <div class="form-group">
          <label for="road">Road:</label>
          <input type="text" id="road" name="road" required />
        </div>
        <div class="form-group">
          <label>Furnished:</label>
          <input
            type="radio"
            id="furnished-yes"
            name="furnished"
            value="yes"
            required
          />
          <label for="furnished-yes">Yes</label>
          <input
            type="radio"
            id="furnished-no"
            name="furnished"
            value="no"
            required
          />
          <label for="furnished-no">No</label>
        </div>
        <div class="form-group">
          <label for="photos">Photos:</label>
          <input
            type="file"
            id="photo-input"
            name="photos[]"
            accept="image/*"
            multiple
          />
          <label id="photo-label" for="photo-input">
            Upload Photos
          </label>
          <div id="photo-preview"></div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
