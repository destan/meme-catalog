import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import EE, {EVENT} from './EventEmitter';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  tile: {
    height: 'auto !important',
    padding: '1px !important',
  }

}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
 const tileData = [
   {
     img: 'https://picsum.photos/200',
     title: 'Image',
     author: 'author',
   },
   {
     img: 'https://picsum.photos/200',
     title: 'Image',
     author: 'author',
   },
   {
     img: 'https://picsum.photos/200',
     title: 'Image',
     author: 'author',
   },
   {
     img: 'https://picsum.photos/200',
     title: 'Image',
     author: 'author',
   },
   {
     img: 'https://picsum.photos/200',
     title: 'Image',
     author: 'author',
   },
   {
     img: 'https://picsum.photos/200',
     title: 'Image',
     author: 'author',
   },
   {
     img: 'https://picsum.photos/200',
     title: 'Image',
     author: 'author',
   },
   
 ];

function share(file) {
  debugger
  // if (navigator.canShare && navigator.canShare({ files: filesArray })) {
  //   navigator.share({
  //     files: filesArray,
  //     title: 'Vacation Pictures',
  //     text: 'Photos from September 27 to October 14.',
  //   })
  //       .then(() => console.log('Share was successful.'))
  //       .catch((error) => console.log('Sharing failed', error));
  // } else {
  //   console.log(`Your system doesn't support sharing files.`);
  // }
}

export default function ImageGrid() {
  const classes = useStyles();

  const [files, setFiles] = React.useState([]);

  React.useEffect(() => {
    EE.on(EVENT.FILES_CHANGED,files => setFiles(files))
  }, []);

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={4}>
        <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
          <ListSubheader component="div">Category or date</ListSubheader>
        </GridListTile>

        {files.map(file => (
          <GridListTile className={classes.tile} key={file.url} onClick={() => share(file)}>
            <img src={file.url} alt={file.name} style={{width: '100%'}} />
          </GridListTile>
        ))}

      </GridList>
    </div>
  );
}
