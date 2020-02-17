import React, { useState } from "react";

import { GlobalStyles } from "./GlobalStyles";
import { Button, Display } from "./components";

function App() {
  const [data, setData] = useState("0");
  return (
    <>
      <GlobalStyles />
      <Display id="display" data={data} />
      <Button id="clear" input="clear" setData={setData} />
      <Button id="nine" input="9" data={data} setData={setData} />
      <Button id="eight" input="8" data={data} setData={setData} />
      <Button id="seven" input="7" data={data} setData={setData} />
      <Button id="six" input="6" data={data} setData={setData} />
      <Button id="five" input="5" data={data} setData={setData} />
      <Button id="four" input="4" data={data} setData={setData} />
      <Button id="three" input="3" data={data} setData={setData} />
      <Button id="two" input="2" data={data} setData={setData} />
      <Button id="one" input="1" data={data} setData={setData} />
      <Button id="zero" input="0" data={data} setData={setData} />

      <Button id="decimal" input="." data={data} setData={setData} />
      <Button id="equals" input="=" data={data} setData={setData} />
      <Button id="add" input="+" data={data} setData={setData} />
      <Button id="subtract" input="-" data={data} setData={setData} />
      <Button id="multiply" input="x" data={data} setData={setData} />
      <Button id="divide" input="/" data={data} setData={setData} />
    </>
  );
}

export default App;
