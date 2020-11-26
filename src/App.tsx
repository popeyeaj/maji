import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FetchData } from "./actions";

import "./App.css";

interface IProps {
  FetchData: () => void;
  urldata: any;
}
function App(props: IProps) {
  const [count, setCount] = useState(0);
  const fetchUrls = async () => {
    setCount((v) => {
      return v + 1;
    });
    await props.FetchData();
  };
  useEffect(() => {
    let timer = setInterval(async () => {
      await fetchUrls();
    }, 5000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [result, setResult] = useState([]);
  useEffect(
    () => {
      if (props.urldata) {
        let _result: any = [];
        for (let i in props.urldata) {
          _result.push(`${i}:${props.urldata[i]}`);
        }
        setResult(_result);
      }
    },
    [props.urldata]
  );

  return (
    <div className="App">
      <Link data-testid="log" to="/log">
        调用历史记录页
      </Link>
      <h3>
        第<span data-testid="counter">{count}</span>
        次调用
      </h3>
      <p style={{ textAlign: "left" }}>
        {result.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </p>
    </div>
  );
}

interface IState {
  urldata: object;
}
const mapStateToProps = (state: IState) => {
  return {
    urldata: state.urldata || "",
  };
};
const mapDispatchToProps = {
  FetchData: FetchData,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
