import React, { useEffect } from "react";
import { connect } from "react-redux";

interface Iprops {
  logs: [
    {
      calltime: string;
      status: string;
      duration: number;
    }
  ];
}
function Log(props: Iprops) {
  return (
    <>
      <h3>历史调用记录</h3>
      <table
        width="100%"
        style={{ border: "1px solid #ddd" }}
        cellPadding={1}
        cellSpacing={1}
      >
        <colgroup>
          <col width="30%" />
          <col width="30%" />
          <col width="40%" />
        </colgroup>
        <thead>
          <tr>
            <th>调用时间</th>
            <th>状态</th>
            <th>加载时间</th>
          </tr>
        </thead>
        <tbody>
          {props.logs.map((item, i) => (
            <tr key={i}>
              <td>{item.calltime}</td>
              <td>{item.status}</td>
              <td>{item.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

interface IState {
  logs: Array<object>;
}
const mapStateToProps = (state: IState) => {
  return {
    logs: state.logs || [],
  };
};
export default connect(
  mapStateToProps,
  null
)(Log);
