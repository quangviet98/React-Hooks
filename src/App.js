import React, { useState, useEffect } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import PostList from './components/PostList';
import Pagination from './components/Pagination';
import PostFilterForm from './components/PostFilterForm';
import Clock from './components/Clock';
import Count from './components/Count';
import FetchingData from './components/FetchingData';
import CountReducer from './components/Reducer';
import FetchingDataReducer from './components/FetchchingDataReducer';
import CounterCustomHooks from './components/CounterCustomHooks';
import UserForm from './components/UserForm';

function App() {

  const [todoList, setTodoList] = useState([
    { id: 1, title: "one" },
    { id: 2, title: "two" },
    { id: 3, title: "three" }
  ])
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 11
  })

  const [filter, setFilter] = useState({
    _page: 1,
    _limit: 10,
    title_like: ""
  })

  useEffect(() => {
    async function fetchAPI() {
      const url = `http://js-post-api.herokuapp.com/api/posts?_limit=${filter._limit}&_page=${filter._page}&title_like=${filter.title_like}`;
      const response = await fetch(url);
      const responseJSON = await response.json();
      // console.log(responseJSON);
      setPostList(responseJSON.data);
      setPagination(responseJSON.pagination);
    }
    fetchAPI();
  }, [filter])

  function pageOnChange(page) {
    console.log(page);
    setFilter({
      ...filter,
      _page: page
    })
  }

  function todoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex(val => val.id === todo.id);
    let newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function onSubmit(todo) {
    let newTodoList = [...todoList];
    console.log(todo)
    newTodoList.push({ id: newTodoList[newTodoList.length - 1].id + 1, ...todo });
    setTodoList(newTodoList);
  }

  function handleSubmitFilterForm(value) {
    console.log({ value });
    setFilter({
      ...filter,
      page: 1,
      title_like: value
    })
  }



  return (
    <div className="app">
      {/* <ColorBox />
      <TodoForm onSubmit={onSubmit}></TodoForm>
     <TodoList todos={todoList} onTodoClick={todoClick}></TodoList>*/}

      {/*<PostFilterForm onSubmit={handleSubmitFilterForm} />
      <PostList postList={postList} />
      <Pagination pagination={pagination} pageOnChange={pageOnChange} />*/}

      {/*<Clock />
      <Count />
      <FetchingData />
      <CountReducer />
      <FetchingDataReducer />*/}
      {/* <CounterCustomHooks /> */}
      <UserForm />
    </div>
  );
}

export default App;
