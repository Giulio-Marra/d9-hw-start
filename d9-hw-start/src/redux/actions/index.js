export const ADD_TO_PREF = "ADD_TO_PREF";
export const DELETE_TO_PREF = "DELETE_TO_PREF";
export const GET_WORK = "GET_WORK";

export const favoriteCompanyAction = (company) => {
  return (dispatch, getState) => {
    const currentState = getState();
    const favoriteCompanies = currentState.pref.content;

    const isCompanyAlreadyFavorite = favoriteCompanies.includes(company);

    if (!isCompanyAlreadyFavorite) {
      dispatch({ type: ADD_TO_PREF, payload: company });
    } else {
      alert("Questa compagnia è già nei tuoi preferiti.");
    }
  };
};

export const deleteCompanyAction = (company) => {
  return (dispatch, getState) => {
    const currentState = getState();
    const updatedContent = currentState.pref.content.filter(
      (item) => item !== company
    );
    dispatch({ type: DELETE_TO_PREF, payload: updatedContent });
  };
};

export const searchJobsAction = (query) => {
  return async (dispatch, getState) => {
    try {
      const baseEndpoint =
        "https://strive-benchmark.herokuapp.com/api/jobs?search=";
      const response = await fetch(baseEndpoint + query + "&limit=20");

      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: "GET_WORK", payload: { query, jobs: data } });
        console.log("GETSTATE", getState());
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
