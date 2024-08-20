import Category from "./Components/Category";
import { useSelector } from 'react-redux';
import WidgetForm from "./Components/WidgetForm";
import { useEffect, useState } from "react";
import WidgetList from "./Components/WidgetList";
import Header from "./Components/Header";

const App = () => {
  const { formDisplay, data } = useSelector(state => state.app)
  const [show, setShow] = useState(false);
  const ShowWidget = useSelector(state => state.app.widgetsShow);

  useEffect(() => {
    setShow(formDisplay.show)
    console.log("CategoryName,Show", formDisplay.CategoryName, formDisplay.show);

  }, [formDisplay, ShowWidget])

  return (
    <div className=" flex flex-col items-center w-full bg-gray-50">
      <Header />
          {
        data.categories.map(item => (
          <Category key={item.id} itemData={item} />
        ))
      }
      {/* <WidgetForm /> */}
      {show && <WidgetForm />}
      {ShowWidget && <WidgetList />}

    </div>
  )
}

export default App;
