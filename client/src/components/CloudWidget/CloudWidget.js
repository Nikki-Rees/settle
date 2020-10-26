import React from "react";
import { render } from "react-dom";

showWidget = (widget) => {
    widget.open()
};

render(); {

    let widget = window.cloudinary.createUploadWidget({
        cloudName: CLOUDINARY_CLOUD_NAME,
        uploadPreset: CLOUDINARY_UPLOAD_PRESET
    }, (error, result) => { })

    return (
        <div id='photo-form-container'>
            <button onClick={this.showWidget}>Upload photo</button>
        </div>
    )

}
