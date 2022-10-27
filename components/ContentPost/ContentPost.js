import React from 'react';
import styles from './ContentPost.module.scss'

export default function ContentPost({content}) {
  return (
    <div className={ styles.post_content}dangerouslySetInnerHTML={{__html: content}}/>
  );
}
