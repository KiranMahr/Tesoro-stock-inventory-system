import { Component } from "react";

class AuditLogger extends Component {
  constructor(props) {
    super(props);
    //store logs and notification message
    this.state = {
      logs: [],
      message: "",
    };
  }

  //load saved logs and register logger
  componentDidMount() {
    const savedLogs = localStorage.getItem("auditLogs");
    if (savedLogs) {
      this.setState({ logs: JSON.parse(savedLogs) });
    }
    this.props.registerLogger(this.addLog);
  }

  //save logsand  clear notification
  componentDidUpdate(previousProps, previousState) {
    if (previousState.logs !== this.state.logs) {
      localStorage.setItem("auditLogs", JSON.stringify(this.state.logs));
      if (this.state.message) {
        this.timer = setTimeout(() => {
          this.setState({ message: "" });
        }, 2000);
      }
    }
  }

  //clear timer when component unmounts
  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  addLog = (message) => {
    const newLog = {
      id: Date.now(),
      message,
      time: new Date().toLocaleString(),
    };
    this.setState((oldState) => ({
      logs: [newLog, ...oldState.logs],
      message,
    }));
  };

  render() {
    return (
      <div className="card-wrapper">
        <h2>Inventory Audit Log</h2>
        {this.state.message && <p>{this.state.message}</p>}
        {this.state.logs.length === 0 ? (
          <p>No operations recorded</p>
        ) 
        : 
        (
          <ul>
            {this.state.logs.map((log) => (
              <li key={log.id}>
                {log.message} - {log.time}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
export default AuditLogger;
