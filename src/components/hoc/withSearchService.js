import React from "react";
import SearchServiceContext from "../searchServiceContext";

const WithSearchService = () => (Wrapped) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    return (
      <SearchServiceContext.Consumer>
        {
          (SearchService) => {
            return <Wrapped {...props} SearchService={SearchService}/>
          }
        }
      </SearchServiceContext.Consumer>
    )
  };
};
export default WithSearchService;