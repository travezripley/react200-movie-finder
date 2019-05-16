import { connect } from "react-redux";
import MovieDetailContainer from "./MovieDetailContainer";

function mapStoretoProps(store) {
  return {
    lineItems: store.search.lineItems
  };
}

export default connect(mapStoretoProps)(MovieDetailContainer);
