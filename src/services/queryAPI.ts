import axios from "axios"

export const notFoundPost = {
    template: 'error404',
    page_type: 'error404',
    post_title: 'Page Not Found',
    post_type: 'page',
    parentPost: {
        template: 'error404',
        page_type: 'error404',
        post_title: 'Page Not Found',
        post_type: 'page',
    }
}

export const queryApi = (pathname, search = '', postsPerPage = 28, isInitialized) => {

    return axios.get(process.env.REACT_APP_API_LOCATION + pathname + search, {
        headers: {
            'X-Index': process.env.REACT_APP_INDEX_NAME,
            'X-Page-Size': postsPerPage,
            'x-init': true
        }
    }).then(response => response.data)
        .catch(error => {
            if (error.response.status === 404)
                return {
                    ...error.response.data,
                    content: [{
                        '_source': {
                            ...notFoundPost,
                            slug: pathname + search
                        }
                    }],
                    error
                }

            throw error
        })
}