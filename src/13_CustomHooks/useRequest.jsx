import React, { useState, useEffect } from "react";
import axios from "axios";

const useRequest = (config) => {
  const [data, setData] = useState(null); // State lưu trữ data từ API
  const [isLoading, setIsLoading] = useState(false); // State lưu trữ trạng thái loading khi call API
  const [error, setError] = useState(null); // State lưu trữ lỗi khi call API thất bại
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true); // set isLoading thành true trước khi call API
        const { data } = await axios(config);
        setData(data); // set data là kết quả từ API trả về
        setIsLoading(false); // set isLoading thành false khi call API thành công
      } catch (error) {
        setIsLoading(false); // set isLoading thành false khi call API thất bại
        setError(error.resonse.data); // set error là lỗi từ API trả về
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useRequest;
