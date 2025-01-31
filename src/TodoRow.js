import React from "react";
import styled from "styled-components";

class TodoRow extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
      if (this.props.todo === nextProps.todo) {
        return false;
      }
      return true;
    }
    render() {
      const { index, todo, handleClickRemove } = this.props;
      console.log(`${todo} 컴포넌트 렌더링`);
      return (
        <Container>
          <Text onClick={() => handleClickRemove(index)}>&nbsp;&nbsp;{index+1}.&nbsp;&nbsp;&nbsp;{todo}</Text>
        </Container>
      );
    }
  }

const Container = styled.div`
  margin: 13px 0;
  width: 80%;
  text-align: left;
`;

const Text = styled.div`
  display: inline-block;
  cursor: pointer;
  font-size: 32px;
  &:hover {
    opacity: 0.4;
  }

`;

export default TodoRow;