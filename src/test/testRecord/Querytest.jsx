import React, { useState } from 'react';
import { useSolidAuth } from '@ldo/solid-react';
import { QueryEngine } from '@comunica/query-sparql-solid';

const TestComponent = () => {
  const [queryResult, setQueryResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const myEngine = new QueryEngine();
  const { session } = useSolidAuth();

  const handleClick = async () => {
    setLoading(true);

    try {
      const bindingsStream = await myEngine.queryBindings(`
        SELECT * WHERE {
          ?s ?p ?o
        } LIMIT 100`, {
        // Set your profile as query source
        sources: [
          session.webId,
          'https://solidweb.me/zjietian3000/my-post3-app/'  
        ],
        // Pass your authenticated session
        '@comunica/actor-http-inrupt-solid-client-authn:session': session,
      });

      const bindings = [];

      bindingsStream.on('data', (binding) => {
        bindings.push(binding.toString());
      });

      bindingsStream.on('end', () => {
        setQueryResult(bindings);
        setLoading(false);
      });

      bindingsStream.on('error', (error) => {
        console.error(error);
        setLoading(false);
      });
    } catch (error) {
      console.error('Error executing query:', error);
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={handleClick} disabled={loading}>
        {loading ? 'Loading...' : 'Execute SPARQL Query'}
      </button>
      <div>
        <h3>Query Results:</h3>
        <ul>
          {queryResult.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TestComponent;
