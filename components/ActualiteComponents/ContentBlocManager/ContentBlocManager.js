import React from 'react'
import BlocPostList from '../../HomePageComponents/BlocPostList/BlocPostList';
import BlocCatList from '../BlocCatList/BlocCatList';
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
        case 'liste_categorie_article':
            return <BlocCatList data={data} />
        default:
            return <div> none </div>

    }


}
