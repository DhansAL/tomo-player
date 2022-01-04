import { useContext } from "solid-js";
import { FileFolderContext } from "../../../Contexts/FileContext";

export const AddFileMenu = () => {
       // context api
  const globalFileProperties = useContext(FileFolderContext);
  const fetchContext = () => {
    if (globalFileProperties) {
    //   globalFileProperties.propertiesForAll().name
    //   globalFileProperties.propertiesForAll().path
    //   globalFileProperties.propertiesForAll().lastModified 
    //   globalFileProperties.propertiesForAll().type 
      console.log(globalFileProperties.propertiesForAll());
    }
  };
    return (
        <div>
            AddFileMneu will test context
            <button onclick={fetchContext}>check the context values</button>
        </div>
    )
}
