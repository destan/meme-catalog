import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },

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
export default function ImageGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={4}>
        <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
          <ListSubheader component="div">Category or date</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} style={{width: '100%', height: 'auto'}} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
