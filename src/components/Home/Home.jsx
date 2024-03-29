import React, { PureComponent } from "react";
import { Container } from "@material-ui/core";

class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  componentWillMount = () => {
    console.log("Home will mount");
  };

  componentDidMount = () => {
    console.log("Home mounted");
  };

  componentWillReceiveProps = nextProps => {
    console.log("Home will receive props", nextProps);
  };

  componentWillUpdate = (nextProps, nextState) => {
    console.log("Home will update", nextProps, nextState);
  };

  componentDidUpdate = () => {
    console.log("Home did update");
  };

  componentWillUnmount = () => {
    console.log("Home will unmount");
  };

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="HomeWrapper">
        <Container fixed>
          <div>Hi, this is Hongyi Xie</div>
        </Container>
      </div>
    );
  }
}

Home.propTypes = {
  // bla: PropTypes.string,
};

Home.defaultProps = {
  // bla: 'test',
};

export default Home;
