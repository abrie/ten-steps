const appId = "tensteps";
const sessionId = `${Math.random() * 99999}`;

async function postData(url = "", data = {}) {
  // Default options are marked with *
  return fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "no-cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json"
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
}

window.addEventListener("beforeunload", () => {
  reportMetric({ type: "appUnload" });
});

function reportMetric(data) {
  postData(process.env.REACT_APP_METRICS_ENDPOINT, {
    ...data,
    appId,
    sessionId
  });
}

export default reportMetric;
