import React, { Component } from 'react';
import styles from 'styles/containers/Home';
import Footer from 'components/footer';
import { CanvasSpace, Form, Circle, Point, Line } from 'ptjs';

export default class Home extends Component {
  componentDidMount() {
    this.space = new CanvasSpace('#play')
      .setup({ bgcolor: '#4234d3' });
    this.form = new Form(this.space);
    this.dot = new Circle(250, 250).setRadius(50);
    this.another = new Circle(100, 100).setRadius(50);
    this.bot = {
      animate: this.animates,
      onMouseAction: this.mouse,
    };
    this.space.add(this.bot);
    this.space.bindMouse();
    this.space.play();
  }

  componentWillUnmount() {
    this.space.destroy();
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
        <canvas id="play"></canvas>
        <Footer />
      </div>
    );
  }
}
