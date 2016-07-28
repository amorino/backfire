import React, { Component } from 'react';
import styles from 'styles/containers/Home';
import Footer from 'components/Footer';
import { CanvasSpace, Form, Circle, Point, Line } from 'ptjs';

export default class Home extends Component {
  componentDidMount() {
    this.space = new CanvasSpace('#play').setup({ bgcolor: '#4234d3' });
    console.log(this.space.size);
    // Form
    this.form = new Form(this.space);

    // Objects
    this.dot = new Circle(250, 250).setRadius(50);
    this.another = new Circle(100, 100).setRadius(50);

    // Bind
    this.space.add({
      animate: this.animates,
      onMouseAction: this.mouse,
    });
    this.space.bindMouse();
    this.space.play();
  }

  componentWillUnmount() {
    this.space.clear();
    this.space.stop();
  }

  animates = (time, fs) => {
    this.form.fill('#999');
    this.form.text(new Point(20, 20), `FPS: ${(1000 / fs)}!`);

    this.form.fill('#5AF').stroke(false);
    this.dot.setRadius(Math.abs(500 - time % 1000) / 20 + 20);
    this.form.circle(this.dot);

    this.form.fill(false).stroke('#fc0', 5);
    this.form.circle(this.another);

    const hits = this.another.intersectCircle(this.dot);
    if (hits.length > 0) {
      this.form.stroke('#fff').fill('#0C9');
      this.form.line(new Line(hits[0]).to(hits[1]));
      this.form.points(hits, 2, true);
    }
  }

  mouse = (type, x, y) => {
    if (type === 'move') {
      this.another.set(x, y);
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <h1>Home</h1>
        <p>This is a static page</p>
        <div className={styles.canvas}>
          <canvas id="play"></canvas>
        </div>
        <Footer />
      </div>
    );
  }
}
