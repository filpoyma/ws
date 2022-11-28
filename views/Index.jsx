const React = require("react");
const Layout = require("./Layout");

function Home() {
  //JS Code
  return (
    <Layout>
      <div>
        <form className="pure-form" name="sendForm">
          <fieldset>
            <legend>Sockets WS</legend>
            {/*<input*/}
            {/*  name="nickname"*/}
            {/*  type="text"*/}
            {/*  placeholder="nickname"*/}
            {/*  required*/}
            {/*/>*/}
            {/*<br />*/}
            {/*<input name="message" type="text" placeholder="message" required />*/}
            {/*<br />*/}
            {/*<button*/}
            {/*  name="sendButton"*/}
            {/*  type="submit"*/}
            {/*  className="button-xlarge pure-button"*/}
            {/*  disabled*/}
            {/*  // style={{ height: 45, width: 222 }}*/}
            {/*>*/}
            {/*  Send Message*/}
            {/*</button>*/}
          </fieldset>
        </form>

        <ul data-message="" />
      </div>
    </Layout>
  );
}

module.exports = Home;
