import Api from "../../sevices/apiURL"

export const fetchTodos= () => {
    return async (dispatch) => {
        const response = await Api.get(`/character/?${page=19}`)
        dispatch({type:"GETALL",payload:response.data})
    } 
}
