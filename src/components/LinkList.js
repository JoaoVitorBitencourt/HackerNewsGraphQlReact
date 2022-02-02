import React from 'react';
import Link from './Link';
import { useQuery, gql } from '@apollo/client';

const FEED_QUERY = gql`
  {
    feed {
      count
      links {
        id
        createdAt
        url
        description
        postedBy {
          id
          name
        }
        voters {
          id
      }
    }
  }
}
`
;

const LinkList = () => {
    const { loading, error, data } = useQuery(FEED_QUERY);

    return (
      <div>
        {data && (
          <>
            {data.feed.links.map((link, index) => (
              <Link key={link.id} link={link} index={index}/>
            ))}
          </>
        )}
      </div>
    );
};

export default LinkList;