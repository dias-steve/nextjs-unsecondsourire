import React from 'react'
import BlocPostList from '../../HomePageComponents/BlocPostList/BlocPostList';
import BlocUne from '../BlocUne/BlocUne'

export default function ContentBlocManager({data}) {
    switch (data.bloc_type){
        case 'article_a_la_une':
            return <BlocUne data={data} />;
        case 'liste_darticle':
            return <BlocPostList 
                data={data}
                title= {data.articlecat_info?.name}
                link= {data.articlecat_info?.link}
                labelBtn ={'Tous les articles'}
            
                />
        default:
            return <div> none </div>

    }


}
