import React from "react";
import { PersonIcon } from "../../../shared/moduleImports/utIconsImports";
import { CpAvatar, CpBox } from "../../../shared/moduleImports/utModuleImports";
import "./stImageFileInput.scss";

const CpImageFileInput = (): JSX.Element => (
  <CpBox className="image-file-input-root">
    <label htmlFor="upload-photo">
      <input
        className="input-file"
        id="upload-photo"
        name="upload-photo"
        accept="image/*"
        type="file"
      />
      <CpBox component="div" className="imageFileInput-box">
        <CpAvatar variant="square" className="avatar-style">
          <PersonIcon className="avatar-logo" />
        </CpAvatar>
      </CpBox>
    </label>
  </CpBox>

);

export default CpImageFileInput;
