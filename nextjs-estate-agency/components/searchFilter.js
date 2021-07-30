import React, {useState} from 'react';
import {MDBIcon} from 'mdbreact';
import api from '../auth/axios';
import {useRouter} from 'next/router';
import useSWR from 'swr';

const fetcher = url => api.get(url).then(res => res.data);

export const SearchFilter = () => {
  const router = useRouter();
  const {data} = useSWR("/api/categories", fetcher);
  const [values, setValues] = useState({
    title : "",
    category : ""

  })

  const handleChange = (name) => e => {
    setValues({...values, [name] : e.target.value})
  }
}

