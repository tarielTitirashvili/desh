import React from "react"
import { NavLink } from "react-router-dom"
import css from './pagination.module.css'

export default function Pagination(props) {
    console.log(props.currentPage)
    
    return(
        <div>
            <div className="pagination">
                {props.currentPage>3?
                 <NavLink onClick = {(e)=>props.getUsersThunk(1)} className = {css.page} to={`?page=${1}`}>1</NavLink>
                 :"" 
                }
                 {props.currentPage!==1?
                <NavLink onClick = {(e)=>props.getUsersThunk(props.currentPage-1)} className = {css.page} to={`?page=${props.currentPage-1}`}>&laquo;</NavLink>
                :""
                }
                {props.currentPage>2?
                    <NavLink onClick = {(e)=>props.getUsersThunk(props.currentPage-2)} className = {css.page} to={`?page=${props.currentPage-2}`}>{props.currentPage-2}</NavLink>
                    :"" 
                }
                {props.currentPage!==1?
                    <NavLink onClick = {(e)=>props.getUsersThunk(props.currentPage-1)} className = {css.page} to={`?page=${props.currentPage-1}`}>{props.currentPage-1}</NavLink>
                    :"" 
                }
                <NavLink className = {css.page} to={`?page=${props.currentPage}`}>{props.currentPage}</NavLink>
                {props.currentPage!==props.totalPages?
                <NavLink onClick = {(e)=>props.getUsersThunk(props.currentPage+1)} className = {css.page} to={`?page=${props.currentPage+1}`}>{props.currentPage +1 }</NavLink>
                :"" 
                }
                 {props.currentPage<(props.totalPages-2)?
                    <NavLink onClick = {(e)=>props.getUsersThunk(props.currentPage+2)} className = {css.page} to={`?page=${props.currentPage+2}`}>{props.currentPage+2}</NavLink>
                    :"" 
                } {props.currentPage!==props.totalPages?
                    <NavLink onClick = {(e)=>props.getUsersThunk(props.currentPage+1)} className = {css.page} to={`?page=${props.currentPage+1}`}>&raquo;</NavLink>
                    :"" 
                }
                {props.currentPage<(props.totalPages-3)?
                 <NavLink onClick = {(e)=>props.getUsersThunk(20)} className = {css.page} to={`?page=${props.totalPages}`}>{props.totalPages}</NavLink>
                 :"" 
                }
            </div>
        </div>
    )
}