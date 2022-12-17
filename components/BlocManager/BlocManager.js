import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ParagraphBlocAbout from '../AboutComponents/ParagraphBlocAbout/ParagraphBlocAbout';
import styles from'./BlocManager.module.scss';



/**
 * type accepted:
 * TextImage
 */ 



export const BlocContent = ({content, gsap}) => {

    switch (content.bloc_type){
        case 'TextImage':
            return  <ParagraphBlocAbout gsap={gsap} data={content} />;
        default:
            return 'component not found';
        
    }

}
export default function BlocManager({contentList, gsap}) {

    
  return (
    <div className={styles.global_container}>
        { contentList && Array.isArray(contentList) && contentList.length > 0 &&
            contentList.map(bloc => <BlocContent gsap={gsap} key={uuidv4()} content={bloc}/>)
        }

    </div>
  )
}
