import React from 'react'
import BlocUne from '../BlocUne/BlocUne'

export default function ContentBlocManager({data}) {
    switch (data.bloc_type){
        case 'article_a_la_une':
            return <BlocUne data={data} />;
        default:
            return <div> none </div>

    }


}
