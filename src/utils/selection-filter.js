export default function selectionFilter({series, films}=[]){
    return{
        seires:[
            {
                title: 'Documentaires',
                data: series?.filter((item)=> item.genre === 'documentaires')
            },
            {
                title: 'Comedies',
                data: series?.filter((item)=> item.genre === 'comedies')
            },
            {
                title: 'Children',
                data: series?.filter((item)=> item.genre === 'children')
            },
            {
                title: 'Crime',
                data: series?.filter((item)=> item.genre === 'crime')
            },
            {
                title: 'Feel Good',
                data: series?.filter((item)=> item.genre === 'feel-good')
            }
        ],

        films:[
            {
                title: 'Drama',
                data: series?.filter((item)=> item.genre === 'drama')
            },
            {
                title: 'Thriller',
                data: series?.filter((item)=> item.genre === 'thriller')
            },
            {
                title: 'Children',
                data: series?.filter((item)=> item.genre === 'children')
            },
            {
                title: 'Suspense',
                data: series?.filter((item)=> item.genre === 'suspense')
            },
            {
                title: 'Romance',
                data: series?.filter((item)=> item.genre === 'romance')
            }
        ]
    }
}