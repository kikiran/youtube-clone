import React from 'react';
import { SearchBar } from './components';
import youtube from './apis/api';
import VideoList from './components/videos/VideoList';
import VideoDetail from './components/videos/VideoDetail';


class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
      };
    
    onQuerySubmit = async term => {
        const response  = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        console.log(response.data.items);

        this.setState({ videos: response.data.items, 
            selectedVideo: response.data.items[0]

        });

    }

    componentDidMount() {
        this.onQuerySubmit('buildings');
    }

    onSelectVideo = (video) => {
        this.setState( { selectedVideo: video })
        
    }

    render() { 
        return (
            <div className="ui container" >
                <SearchBar onQuerySubmit = {this.onQuerySubmit}/>

               <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column"><VideoDetail video={this.state.selectedVideo} /></div>
                    <div className="five wide column"><VideoList videos = {this.state.videos}  onSelectVideo = {this.onSelectVideo} /></div>
                </div>

               </div>
            </div>
          );
    }
}
 
export default App;