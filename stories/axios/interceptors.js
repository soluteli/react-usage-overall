import React, { useState } from 'react';
import axios from 'axios';
import AxiosMockAdapter from "axios-mock-adapter";

// This sets the mock adapter on the default instance
const mock = new AxiosMockAdapter(axios);

mock.onGet("/success").reply(200, {
    users: [{ id: 1, name: "John Smith" }],
  });

mock.onGet("/error").reply(500, {
    message: 'error 500'
  });

export const AxiosInterceptorDemo = () => {
  const [logs, setLogs] = useState([]);

  const log = (message, isError = false) => {
    setLogs((prev) => [...prev, { message, isError }]);
  };

  const setupInterceptors = () => {
    // Optional: clear existing interceptors to avoid duplicates
    axios.interceptors.request.handlers = [];
    axios.interceptors.response.handlers = [];

    // Request Interceptors
    axios.interceptors.request.use((config) => {
      log('[Request Interceptor 1]');
      return config;
    });

    axios.interceptors.request.use((config) => {
      log('[Request Interceptor 2]');
      return config;
    });

    // Response Interceptors
    axios.interceptors.response.use(
      (response) => {
        log('[Response Interceptor 1]');
        return response;
      },
      (error) => {
        log('[Response Interceptor 1 - Error Handler]', true);
        return Promise.reject(error);
      }
    );

    axios.interceptors.response.use(
      (response) => {
        log('[Response Interceptor 2]');
        return response;
      },
      (error) => {
        log('[Response Interceptor 2 - Error Handler]', true);
        return Promise.reject(error);
      }
    );
  };

  const handleSuccessClick = async () => {
    setLogs([]); // Clear previous logs
    setupInterceptors();

    try {
      const res = await axios.get('/success');
      log(`Final Response: ${JSON.stringify(res.data, null, 2)}`);
    } catch (err) {
      log(`Error: ${err.message}`, true);
    }
  };

  const handleErrorClick = async () => {
    setLogs([]); // Clear previous logs
    setupInterceptors();

    try {
      const res = await axios.get('/error');
      log(`Final Response: ${JSON.stringify(res.data, null, 2)}`);
    } catch (err) {
      log(`Error: ${err.message}`, true);
    }
  };

  return (
    <div className="p-4 font-mono text-sm">
      <button
        onClick={handleSuccessClick}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Run Axios Success
      </button>
      
      <button
        onClick={handleErrorClick}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Run Axios Success Error
      </button>

      <div className="mt-4">
        <h2 className="font-bold">Execution Order:</h2>
        <ul className="mt-2 space-y-1">
          {logs.map((log, index) => (
            <li key={index}>
              {log.isError ? '🔴' : '🔹'} {log.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const AxiosInterceptorRequestErrorDemo = () => {
  const [logs, setLogs] = useState([]);

  const log = (message, isError = false) => {
    setLogs((prev) => [...prev, { message, isError }]);
  };

  const setupInterceptors = (errorIndex) => {
    // Optional: clear existing interceptors to avoid duplicates
    axios.interceptors.request.handlers = [];
    axios.interceptors.response.handlers = [];

    // ✅ Request Interceptor 1: Succeeds
    axios.interceptors.request.use(
        (config) => {
          log('[Request Interceptor 1]');
          if (errorIndex === 'Request Interceptor 1') {
              throw new Error('Manual error in request interceptor 1')
          }
          return config;
        },
        (error) => {
          log('[Request Interceptor 1 - Rejected]', true);
          return Promise.reject(error);
        }
      );
  
      // ❌ Request Interceptor 2: Intentionally throws an error
      axios.interceptors.request.use(
        (config) => {
          log('[Request Interceptor 2]');
          if (errorIndex === 'Request Interceptor 2') {
            throw new Error('Manual error in request interceptor 2')
          }
          return config;
        },
        (error) => {
          log(`[Request Interceptor 2 - Rejected]: ${error.message}`, true);
          return Promise.reject(error);
        }
      );

    // Response Interceptors
    axios.interceptors.response.use(
      (response) => {
        log('[Response Interceptor 1]');
        if (errorIndex === 'Response Interceptor 1') {
            throw new Error('Manual error in Response interceptor 1')
        }
        return response;
      },
      (error) => {
        log('[Response Interceptor 1 - Error Handler]', true);
        return Promise.reject(error);
      }
    );

    axios.interceptors.response.use(
      (response) => {
        log('[Response Interceptor 2]');
        if (errorIndex === 'Response Interceptor 2') {
            throw new Error('Manual error in Response interceptor 2')
        }
        return response;
      },
      (error) => {
        log('[Response Interceptor 2 - Error Handler]', true);
        return Promise.reject(error);
      }
    );
  };

  const handleRequest1ErrorClick = async () => {
    setLogs([]); // Clear previous logs
    setupInterceptors("Request Interceptor 1");

    try {
      const res = await axios.get('/success');
      log(`Final Response: ${JSON.stringify(res.data, null, 2)}`);
    } catch (err) {
      log(`Error: ${err.message}`, true);
    }
  };

  const handleRequest2ErrorClick = async () => {
    setLogs([]); // Clear previous logs
    setupInterceptors("Request Interceptor 2");

    try {
      const res = await axios.get('/error');
      log(`Final Response: ${JSON.stringify(res.data, null, 2)}`);
    } catch (err) {
      log(`Error: ${err.message}`, true);
    }
  };

  return (
    <div className="p-4 font-mono text-sm">
      <button
        onClick={handleRequest1ErrorClick}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Run Request Interceptor 1
      </button>
      
      <button
        onClick={handleRequest2ErrorClick}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Run Request Interceptor 2
      </button>

      <div className="mt-4">
        <h2 className="font-bold">Execution Order:</h2>
        <ul className="mt-2 space-y-1">
          {logs.map((log, index) => (
            <li key={index}>
              {log.isError ? '🔴' : '🔹'} {log.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

