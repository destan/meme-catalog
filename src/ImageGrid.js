import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    // width: 500,
    // height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
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
        <GridListTile key="Subheader" cols={1} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
