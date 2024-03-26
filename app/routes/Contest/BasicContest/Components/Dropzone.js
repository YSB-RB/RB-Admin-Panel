import React from 'react';
import classNames from 'classnames';
import FileDrop from 'react-dropzone';
import _ from 'lodash';

import {
    Container,
} from "../../../../components"

export class Dropzone extends React.Component {
    state = {
        isOver: false,
        files: [],
        listStyle: 'grid'
    }

    render() {
        const { isOver, files, listStyle } = this.state;
        const dropzoneClass = classNames({
            'dropzone--active': isOver
        }, 'dropzone');

        return (
            <Container>
                <div className="mb-4">
                    <FileDrop
                        multiple
                        onDragEnter={() => { this.setState({isOver: true}) }}
                        onDragLeave={() => { this.setState({isOver: false}) }}
                        onDrop={this._filesDropped}
                    >
                        {
                            ({ getRootProps, getInputProps }) => (
                                <div {...getRootProps()} className={dropzoneClass}>
                                    <i className="fa fa-cloud-upload fa-fw fa-3x mb-3"></i>
                                    <h5 className='mt-0'>
                                        Upload Your files
                                    </h5>
                                    <p>
                                        Drag a file here or <span className='text-primary'>browse</span> for a file to upload.
                                    </p>
                                    <p className="small">
                                        JPG, GIF, PNG, MOV, and AVI. Please choose files under 2GB for upload. File sizes are 400x300px.
                                    </p>
                                    <input { ...getInputProps() } />
                                </div>
                            )
                        }
                        
                    </FileDrop>
                </div>
            </Container>
        );
    }

    _filesDropped = (files) => {
        this.setState({
            files: [...this.state.files, ...files],
            isOver: false
        })
    }

    _removeFile = (file) => {
        this.setState({
            files: _.reject(this.state.files, file)
        })
    }
}