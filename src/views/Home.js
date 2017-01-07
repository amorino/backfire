import 'styles/views/Home'

import React, { Component, PropTypes } from 'react'
import Footer from 'components/App/Footer'
import { connect } from 'react-redux'
import React3 from 'react-three-renderer'
import * as THREE from 'three'
import fragment from 'shaders/bg.frag'
import vertex from 'shaders/bg.vert'

class Home extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  state = {
    cubeRotation: new THREE.Euler(),
    cameraPosition: new THREE.Vector3(0, 0, -1.6),
  }

  onAnimate = () => {
    this.setState({
      cubeRotation: new THREE.Euler(
        this.state.cubeRotation.x + 0.01,
        this.state.cubeRotation.y + 0.01,
        0,
      ),
    })
  }

  render() {
    const width = 500
    const height = 400
    const resolution = new THREE.Vector2(width, height)
    return (
      <div className="app__container" ref={node => this.node = node}>
        <h2>Welcome to Backfire</h2>
        <p>This is a static page.</p>
        <React3
          mainCamera="camera"
          width={width}
          height={height}
          onAnimate={this.onAnimate}
        >
          <scene>
            <orthographicCamera
              name="camera"
              left={-1}
              right={1}
              top={1}
              bottom={-1}
              lookAt={new THREE.Vector3()}
              position={this.state.cameraPosition}
            />
            <mesh rotation={new THREE.Euler(0, -Math.PI, 0)}>
              <planeGeometry width={2} height={2} />
              <shaderMaterial
                vertexShader={vertex}
                fragmentShader={fragment}
                side={THREE.DoubleSide}
              >
                <uniforms>
                  <uniform name="iResolution" type="v2" value={resolution} />
                  <uniform name="iGlobalTime" type="f" value={0} />
                </uniforms>
              </shaderMaterial>
            </mesh>
            <mesh rotation={this.state.cubeRotation}>
              <boxGeometry width={1} height={1} depth={1} />
              <meshBasicMaterial color={0x00ff00} />
            </mesh>
          </scene>
        </React3>
        <Footer />
      </div>
    )
  }
}

export default connect()(Home)
